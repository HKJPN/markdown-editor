// NODE_PATH=<bundled Playwright directory> node tests/dependency-security.browser.cjs [word|mermaid|purify|math|all|stage2]
// Uses installed Edge by default. No npm install or application dependencies.
// Optional MDWORKS_ASSET_DIR: directory containing verified CDN bytes for repeatable offline tests.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const stage = process.argv[2] || 'all';
const full = stage === 'all' || stage === 'stage2';
const distributions = require('./dependency-assets.json');
const htmlPath = path.join(__dirname, '..', 'index.html');
const hostPurifyVersion = fs.readFileSync(htmlPath, 'utf8').match(/DOMPurify bundled \| v([\d.]+)/)[1];
const artifacts = process.env.MDWORKS_TEST_OUTPUT;
const assets = process.env.MDWORKS_ASSET_DIR;
const results = [];
const generated = new Map();
if (process.env.MDWORKS_BASELINE) generated.set('/baseline', fs.readFileSync(process.env.MDWORKS_BASELINE));
const server = http.createServer((req, res) => {
  const html = req.url === '/' ? fs.readFileSync(htmlPath) : generated.get(req.url);
  res.writeHead(html ? 200 : 404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html || '');
});
// Small stored ZIP fixture: exercises DOCX parsing without adding a ZIP dependency.
function zip(files) {
  const local = [], central = []; let offset = 0;
  for (const [name, text] of Object.entries(files)) {
    const data = Buffer.from(text), nameBytes = Buffer.from(name); let crc = 0xffffffff;
    for (const byte of data) { crc ^= byte; for (let b = 0; b < 8; b++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0); }
    crc = (crc ^ 0xffffffff) >>> 0;
    const header = Buffer.alloc(30); header.writeUInt32LE(0x04034b50); header.writeUInt32LE(crc, 14);
    header.writeUInt32LE(data.length, 18); header.writeUInt32LE(data.length, 22); header.writeUInt16LE(nameBytes.length, 26);
    local.push(header, nameBytes, data);
    const directory = Buffer.alloc(46); directory.writeUInt32LE(0x02014b50); directory.writeUInt16LE(20, 4);
    directory.writeUInt32LE(crc, 16); directory.writeUInt32LE(data.length, 20); directory.writeUInt32LE(data.length, 24);
    directory.writeUInt16LE(nameBytes.length, 28); directory.writeUInt32LE(offset, 42); central.push(directory, nameBytes);
    offset += header.length + nameBytes.length + data.length;
  }
  const directory = Buffer.concat(central), end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50);
  end.writeUInt16LE(central.length / 2, 8); end.writeUInt16LE(central.length / 2, 10);
  end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, directory, end]);
}
const docx = zip({
  '[Content_Types].xml': '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>',
  '_rels/.rels': '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="r1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
  'word/styles.xml': '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/></w:style></w:styles>',
  'word/numbering.xml': '<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:abstractNum w:abstractNumId="0"><w:lvl w:ilvl="0"><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/></w:lvl></w:abstractNum><w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num></w:numbering>',
  'word/_rels/document.xml.rels': '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="safe" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="https://example.com/" TargetMode="External"/><Relationship Id="bad" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="javascript:window.__xss=1" TargetMode="External"/></Relationships>',
  'word/document.xml': '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body><w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:t>日本語の見出し</w:t></w:r></w:p><w:p><w:r><w:t>段落 </w:t></w:r><w:r><w:rPr><w:b/></w:rPr><w:t>太字</w:t></w:r><w:r><w:rPr><w:i/></w:rPr><w:t>斜体</w:t></w:r></w:p><w:p><w:pPr><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr></w:pPr><w:r><w:t>箇条書き</w:t></w:r></w:p><w:p><w:hyperlink r:id="safe"><w:r><w:t>リンク</w:t></w:r></w:hyperlink><w:hyperlink r:id="bad"><w:r><w:t>危険リンク</w:t></w:r></w:hyperlink></w:p><w:tbl><w:tr><w:tc><w:p><w:r><w:t>表のセル</w:t></w:r></w:p></w:tc></w:tr></w:tbl><w:sectPr/></w:body></w:document>'
});
const diagrams = {
  flowchart: 'flowchart TD\n A[日本語] --> B[Done]',
  sequence: 'sequenceDiagram\n Alice->>Bob: Hello\n Bob-->>Alice: OK',
  class: 'classDiagram\n Animal <|-- Duck\n Animal : +int age',
  state: 'stateDiagram-v2\n [*] --> Active\n Active --> [*]',
  ER: 'erDiagram\n CUSTOMER ||--o{ ORDER : places\n CUSTOMER { string name }',
  Gantt: 'gantt\n dateFormat YYYY-MM-DD\n section Work\n Task :a1, 2026-10-13, 2d',
  pie: 'pie title Example\n "A" : 40\n "B" : 60',
  XY: 'xychart-beta\n x-axis [A, B, C]\n y-axis "Count" 0 --> 10\n bar [2, 5, 8]',
  architecture: 'architecture-beta\n group api(cloud)[API]\n service db(database)[Database] in api\n service server(server)[Server] in api\n db:R -- L:server'
};
function safeDom(snapshot) {
  assert.equal(snapshot.dangerous, 0, 'dangerous elements or attributes');
  assert.equal(snapshot.executed, false, 'XSS did not execute');
}
function assetPath(requestUrl) {
  if (/\/fonts\//.test(requestUrl)) return `katex-fonts/${requestUrl.split('/').pop()}`;
  const name = requestUrl.match(/\/npm\/([^@]+)@/)[1];
  return `${name}-${requestUrl.split('/').pop()}`;
}
async function snapshot(page, root = '#preview') {
  return page.evaluate(selector => {
    const root = document.querySelector(selector);
    const nodes = [...root.querySelectorAll('*')];
    return { dangerous: nodes.filter(el => /^(SCRIPT|IFRAME|OBJECT|EMBED|FOREIGNOBJECT)$/i.test(el.tagName) ||
      [...el.attributes].some(a => /^on/i.test(a.name) || /^(?:javascript|vbscript):/i.test(a.value.replace(/\s/g, '')))).length,
      executed: !!window.__xss, html: root.innerHTML };
  }, root);
}
async function run(name, fn) {
  try { await fn(); results.push({ name, status: 'PASS' }); console.log('PASS', name); }
  catch (error) { results.push({ name, status: 'FAIL', error: error.stack }); console.error('FAIL', name, error.message); }
}
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: process.env.EDGE_EXECUTABLE || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
  console.log('Browser', browser.version(), 'stage', stage, assets ? 'verified cached host assets; Word sandbox may use live CDN' : 'live CDN');
  try {
    const context = await browser.newContext({ locale: 'ja-JP', viewport: { width: 1280, height: 900 } });
    await context.route('**/*', async route => {
      const requestUrl = route.request().url();
      if (requestUrl.startsWith(url) || requestUrl === pathToFileURL(htmlPath).href) return route.continue();
      const pinned = Object.values(distributions).flatMap(pkg => Object.values(pkg.files)).some(file => file.url === requestUrl);
      if (!pinned && !requestUrl.startsWith('https://cdn.jsdelivr.net/npm/katex@0.19.0/dist/fonts/')) return route.abort();
      if (!assets) return route.continue();
      const file = assetPath(requestUrl), body = fs.readFileSync(path.join(assets, file));
      return route.fulfill({ body, headers: { 'access-control-allow-origin': '*' }, contentType: file.endsWith('.css') ? 'text/css' : /\.(woff2?|ttf)$/.test(file) ? 'font/woff2' : 'application/javascript' });
    });
    const page = await context.newPage(); const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));
    page.on('dialog', dialog => dialog.accept());
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForFunction(() => typeof convertWordInSandbox === 'function');
    await page.evaluate(() => document.getElementById('rn-modal').classList.remove('show'));
    if (stage === 'word' || full) {
      await run('Word: DOCX Japanese, formatting, lists, links, table, sandbox cleanup', async () => {
        const value = await page.evaluate(async bytes => {
          const result = await convertWordInSandbox(new Uint8Array(bytes).buffer);
          return { ...result, frames: document.querySelectorAll('iframe').length };
        }, [...docx]);
        assert.match(value.markdown, /# 日本語の見出し/); assert.match(value.markdown, /\*\*太字\*\*/);
        assert.match(value.markdown, /(?:\*斜体\*|_斜体_)/); assert.match(value.markdown, /-\s+箇条書き/);
        assert.match(value.markdown, /\[リンク\]\(https:\/\/example.com\/\)/);
        assert.match(value.markdown, /表のセル/); assert.doesNotMatch(value.markdown, /javascript:/); assert.equal(value.frames, 0);
        if (artifacts) fs.writeFileSync(path.join(artifacts, `word-${stage}.md`), value.markdown);
      });
      await run('Word: native Promise and iframe library versions', async () => {
        await page.evaluate(async () => {
          const frame = document.createElement('iframe'); frame.sandbox = 'allow-scripts'; frame.srcdoc = getWordImportSandboxSrcdoc();
          window.testWordFrame = frame; await new Promise(resolve => { frame.onload = resolve; document.body.appendChild(frame); });
        });
        const frame = await (await page.locator('iframe').elementHandle()).contentFrame();
        const value = await frame.evaluate(bytes => {
          const promise = mammoth.convertToHtml({ arrayBuffer: new Uint8Array(bytes).buffer });
          promise.catch(() => {}); return { native: promise instanceof Promise, purify: DOMPurify.version };
        }, [...docx]);
        assert.equal(value.native, true); assert.equal(value.purify, hostPurifyVersion);
        await page.evaluate(() => testWordFrame.remove());
      });
      await run('Word: corrupt input, 10MiB limit, 60s timeout, resource cleanup', async () => {
        const state = await page.evaluate(async () => {
          const listeners = new Set(), add = window.addEventListener, remove = window.removeEventListener;
          window.addEventListener = function(type, fn, ...args) { if (type === 'message') listeners.add(fn); return add.call(this, type, fn, ...args); };
          window.removeEventListener = function(type, fn, ...args) { if (type === 'message') listeners.delete(fn); return remove.call(this, type, fn, ...args); };
          let error, timeout;
          try { await convertWordInSandbox(new Uint8Array([1, 2, 3]).buffer); } catch (e) { error = e.message; }
          const originalSrcdoc = getWordImportSandboxSrcdoc, originalTimer = window.setTimeout;
          getWordImportSandboxSrcdoc = () => '<!doctype html><body>Silent fixture</body>';
          window.setTimeout = (fn, ms, ...args) => originalTimer(fn, ms === 60000 ? 50 : ms, ...args);
          try { await convertWordInSandbox(new ArrayBuffer(1)); } catch (e) { timeout = e.message; }
          getWordImportSandboxSrcdoc = originalSrcdoc; window.setTimeout = originalTimer;
          window.addEventListener = add; window.removeEventListener = remove;
          return { error, timeout, listeners: listeners.size, frames: document.querySelectorAll('iframe').length, max: WORD_MAX_BYTES, ms: WORD_IMPORT_SANDBOX_TIMEOUT_MS };
        });
        assert.ok(state.error); assert.match(state.timeout, /timed out/); assert.equal(state.listeners, 0);
        assert.equal(state.frames, 0); assert.equal(state.max, 10485760); assert.equal(state.ms, 60000);
        let alertMessage; page.once('dialog', dialog => { alertMessage = dialog.message(); });
        await page.locator('#word-input').setInputFiles({ name: 'oversized.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', buffer: Buffer.alloc(10485761) });
        assert.ok(alertMessage); assert.equal(await page.locator('iframe').count(), 0);
      });
    }
    if (stage === 'mermaid' || full) {
      for (const [name, source] of Object.entries(diagrams)) await run(`Mermaid: ${name} sanitized SVG`, async () => {
        const svg = await page.evaluate(source => renderMermaidToSvg(source), source);
        assert.match(svg, /<svg[\s>]/); assert.doesNotMatch(svg, /<foreignObject|<script|\son\w+=|\sstyle=/i);
      });
      await run('Mermaid: strict, htmlLabels, secure config, scoped CSS, prototype pollution', async () => {
        const value = await page.evaluate(async () => {
          const before = getComputedStyle(document.body).backgroundColor;
          const source = '%%{init: {"securityLevel":"loose","htmlLabels":true,"flowchart":{"htmlLabels":true},"themeCSS":"body { background: rgb(1, 2, 3) !important; } & + * { color: rgb(4, 5, 6) !important; } & ~ * { background: rgb(1, 2, 3) !important; }"}}%%\nflowchart TD\n A[Safe] --> B[Diagram]';
          const svg = await renderMermaidToSvg(source); const holder = document.createElement('div'); holder.innerHTML = svg;
          const sibling = document.createElement('p'); sibling.textContent = 'Sibling'; holder.append(sibling); document.body.appendChild(holder);
          const siblingColor = getComputedStyle(sibling).color, siblingBg = getComputedStyle(sibling).backgroundColor;
          const after = getComputedStyle(document.body).backgroundColor, config = mermaid.mermaidAPI.getConfig(); holder.remove();
          mermaid.initialize(JSON.parse('{"__proto__":{"mdworksPolluted":true},"constructor":{"prototype":{"mdworksPolluted":true}}}'));
          const polluted = ({}).mdworksPolluted === true; initializeMermaid(mermaid);
          return { before, after, siblingColor, siblingBg, strict: config.securityLevel, labels: config.htmlLabels, flow: config.flowchart.htmlLabels, secure: config.secure, svg, polluted };
        });
        assert.equal(value.before, value.after); assert.equal(value.strict, 'strict'); assert.equal(value.labels, false); assert.equal(value.flow, false);
        assert.equal(value.polluted, false); assert.ok(value.secure.includes('themeVariables'));
        assert.notEqual(value.siblingColor, 'rgb(4, 5, 6)'); assert.notEqual(value.siblingBg, 'rgb(1, 2, 3)');
        assert.doesNotMatch(value.svg, /<foreignObject|<script|\son\w+=/i);
      });
      await run('Mermaid: invalid syntax, 50,000 characters, 20 diagrams, debounce, Viewer export', async () => {
        const value = await page.evaluate(async () => {
          const invalid = await createViewerRenderPackage('```mermaid\nthis is invalid\n```');
          const count = safePreviewMarkdownHtml(Array.from({ length: 21 }, () => '```mermaid\nflowchart TD\n A-->B\n```').join('\n'), { editorMermaid: true });
          const size = safePreviewMarkdownHtml('```mermaid\n' + 'x'.repeat(50001) + '\n```', { editorMermaid: true });
          const viewer = await createViewerRenderPackage('```mermaid\nflowchart TD\n A-->B\n```');
          return { invalid: invalid.html, count: [...count.diagrams.values()].filter(x => x.limitReason === 'count').length,
            size: [...size.diagrams.values()].filter(x => x.limitReason === 'size').length, delay: MERMAID_RENDER_DELAY, viewer: viewer.html };
        });
        assert.match(value.invalid, /mdw-mermaid-error/); assert.doesNotMatch(value.invalid, /<svg/);
        assert.equal(value.count, 1); assert.equal(value.size, 1); assert.equal(value.delay, 400); assert.match(value.viewer, /<svg/);
      });
    }
    if (stage === 'purify' || full) {
      await run('DOMPurify: bundled version, HTML/SVG XSS, URL schemes, normal markup, fail closed', async () => {
        const value = await page.evaluate(() => {
          window.__xss = 0;
          const input = '<h1>日本語</h1><p><strong>bold</strong><em>italic</em></p><table><tr><td>cell</td></tr></table><a href="https://example.com">link</a><script>window.__xss=1</script><img src="x" onerror="window.__xss=1"><a href="java\nscript:window.__xss=1">bad</a><a href="data:text/html,bad">bad</a>';
          const safe = sanitizeHtml(input), svg = sanitizeMermaidSvg('<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/><script>window.__xss=1</script><foreignObject><p>bad</p></foreignObject><a href="javascript:alert(1)">bad</a><g onload="window.__xss=1" style="fill:red"/></svg>');
          preview.innerHTML = safe; const holder = document.createElement('div'); holder.append(svg);
          const purify = window.DOMPurify; window.DOMPurify = null; const missing = sanitizeHtml(input); window.DOMPurify = purify;
          const original = purify.sanitize; purify.sanitize = () => { throw new Error('test sanitizer failure'); };
          let threw = false; try { safeMarkdownHtml(input); } catch { threw = true; } finally { purify.sanitize = original; }
          return { version: purify.version, safe, svg: holder.innerHTML, missing, threw };
        });
        assert.equal(value.version, '3.4.17'); assert.match(value.safe, /<strong>bold/); assert.match(value.safe, /<table>/);
        assert.doesNotMatch(value.safe, /<script|onerror=|href="(?:data|java)/i); assert.match(value.svg, /<rect/);
        assert.doesNotMatch(value.svg, /<script|foreignObject|<a[\s>]|\son\w+=|\sstyle=/i); assert.equal(value.missing, ''); assert.equal(value.threw, true);
        safeDom(await snapshot(page));
      });
    }
    if (stage === 'math' || full) {
      await run('KaTeX: 0.19.0 JS/CSS/SRI, inline/display/Japanese, invalid, trust:false, strict:warn', async () => {
        const value = await page.evaluate(async () => {
          const api = await ensureKatexLoaded(), warnings = [], warn = console.warn; console.warn = (...args) => warnings.push(args.join(' '));
          const samples = ['x^2+1', '\\frac{1}{2}', '\\text{日本語}+x', '\\frac{', '\\href{javascript:alert(1)}{x}', '\\htmlClass{injected}{x}', '\\char"20AC'];
          const rendered = samples.map((tex, index) => { const target = document.createElement('span'); renderKatexIntoTarget(api, { tex, displayMode: index === 1 }, target); return target.innerHTML; });
          console.warn = warn;
          return { version: api.version, rendered, warnings, css: document.getElementById(KATEX_CSS_ELEMENT_ID).href,
            cssSri: document.getElementById(KATEX_CSS_ELEMENT_ID).integrity, jsSri: document.getElementById(KATEX_JS_ELEMENT_ID).integrity };
        });
        assert.equal(value.version, '0.19.0'); assert.match(value.css, /katex@0\.19\.0/);
        assert.equal(value.cssSri, 'sha384-3rdsX6e5mueWyoweR9NIVmtEsUkokpBT/0ALqKKIBMr9j4qhHkaIkAcGgsE6uVlp');
        assert.equal(value.jsSri, 'sha384-QFFtAGzvvj+bfgCGxXJlNZZR1nXEZgvG8tDLCCY1F19xl20WlfTYgguB4VcNdxYk');
        assert.match(value.rendered[0], /class="katex"/); assert.match(value.rendered[1], /katex-display/);
        assert.match(value.rendered[2], /日本語/); assert.match(value.rendered[3], /katex-error/);
        assert.doesNotMatch(value.rendered[4], /<a[\s>]|href=/); assert.doesNotMatch(value.rendered[5], /class="injected"/);
        assert.ok(value.warnings.some(w => w.includes('symbolNotInFont')));
      });
    }
    if (full) {
      await run('Integrated: Word import UI, save/reload, Markdown/math/Mermaid preview, Viewer/Standalone/print/HTML', async () => {
        await page.locator('#word-input').setInputFiles({ name: '日本語.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', buffer: docx });
        await page.waitForFunction(() => editor.value.includes('表のセル'));
        await page.waitForFunction(() => !isSaving);
        await page.evaluate(async () => { editor.value += '\n\n日本語と $x^2$\n\n$$\\frac{1}{2}$$\n\n```mermaid\nflowchart TD\n A-->B\n```\n\n<script>window.__xss=1</script><img src="x" onerror="window.__xss=1">'; update(); markDirty(); await triggerAutoSave(); });
        const text = await page.locator('#editor').inputValue(); await page.reload({ waitUntil: 'load' });
        await page.waitForFunction(() => editor.value.includes('日本語と $x^2$')); assert.equal(await page.locator('#editor').inputValue(), text);
        await page.evaluate(() => { previewOpen = true; renderPreview(true); });
        await page.waitForFunction(() => document.querySelector('#preview .katex') && document.querySelector('#preview .mdw-mermaid svg'));
        safeDom(await snapshot(page));
        const output = await page.evaluate(async () => {
          const pack = await createViewerRenderPackage(editor.value);
          const viewer = buildViewerHtml(pack.html, 'test', { math: pack.math });
          const display = await encryptRestrictedViewerDisplay(JSON.stringify({ type: 'mdworks-restricted-viewer-display', title: 'test', html: pack.html, math: pack.math }));
          const restricted = buildRestrictedViewerHtml({ format: RESTRICTED_VIEWER_FORMAT, formatVersion: RESTRICTED_VIEWER_VERSION, display }, 'test', { math: pack.math });
          const encrypted = await encryptPrivateAppBox(JSON.stringify({ type: 'mdworks-private-viewer', contentType: 'sanitized-html', title: 'test', html: pack.html, math: pack.math }), 'test-passphrase', 'private-viewer');
          const privateViewer = buildPrivateViewerHtml(encrypted, 'test', { math: pack.math });
          const standalone = buildStandaloneHtmlForExport().htmlStr;
          const print = await buildPrintablePreviewHtml(); let exported;
          const download = triggerDownload; triggerDownload = html => { exported = html; }; exportHtml(); triggerDownload = download;
          return { viewer, restricted, privateViewer, standalone, print, exported };
        });
        assert.match(output.viewer, /<svg/); assert.match(output.viewer, /katex@0\.19\.0/);
        assert.match(output.standalone, /mammoth@1\.13\.0/); assert.match(output.standalone, /DOMPurify 3\.4\.17/);
        assert.match(output.print, /<svg/); assert.match(output.print, /class="katex"/);
        assert.doesNotMatch(output.exported, /<script>|onerror=/); assert.match(output.exported, /表のセル/);
        for (const [name, html] of Object.entries(output)) {
          assert.doesNotMatch(html, /marked v18\.0\.7|typo-js@1\.2\.3|encoding-japanese|mammoth@1\.12\.0|dompurify@3\.4\.12|mermaid@11\.12\.2|katex@0\.17\.0/, `${name}: old dependency reference`);
          generated.set(`/${name}`, html); if (artifacts) fs.writeFileSync(path.join(artifacts, `${name}.html`), html);
        }
        for (const name of ['viewer', 'restricted', 'privateViewer', 'standalone', 'print', 'exported']) {
          const target = await context.newPage(); target.on('dialog', dialog => dialog.accept());
          await target.goto(`${url}/${name}`, { waitUntil: 'load' });
          if (name === 'privateViewer') { await target.locator('#passphrase').fill('test-passphrase'); await target.locator('#unlock-btn').click(); }
          if (name === 'standalone') { await target.waitForFunction(() => editor.value.includes('表のセル')); await target.evaluate(() => { previewOpen = true; renderPreview(true); }); }
          if (name !== 'exported') {
            await target.waitForFunction(() => document.querySelector('.katex') && document.querySelector('.mdw-mermaid svg'));
            await target.evaluate(() => document.fonts.ready);
            assert.equal(await target.evaluate(() => document.fonts.check('16px KaTeX_Main')), true);
            if (!['restricted', 'privateViewer'].includes(name)) await target.emulateMedia({ media: 'print' });
            if (artifacts && name === 'print') await target.pdf({ path: path.join(artifacts, 'print.pdf'), format: 'A4' });
          }
          if (artifacts) await target.screenshot({ path: path.join(artifacts, `${name}.png`), fullPage: true });
          assert.equal(await target.evaluate(() => !!window.__xss), false); await target.close();
        }
      });
      await run('Offline/CDN failure: safe source fallbacks and online recovery', async () => {
        const offline = await context.newPage(); await offline.route('**/npm/**', route => route.abort());
        offline.on('dialog', dialog => dialog.accept()); await offline.goto(url, { waitUntil: 'load' });
        await offline.evaluate(() => { editor.value = '日本語 $x^2$\n\n```mermaid\nflowchart TD\n A-->B\n```'; previewOpen = true; renderPreview(true); });
        await offline.waitForFunction(() => katexLoadState === 'failed' && mermaidLoadState === 'failed');
        assert.match(await offline.locator('#preview').innerText(), /\$x\^2\$/);
        assert.match(await offline.locator('#preview').innerText(), /A-->B/); safeDom(await snapshot(offline));
        const pack = await offline.evaluate(() => createViewerRenderPackage(editor.value)); assert.doesNotMatch(pack.html, /<svg/); assert.ok(pack.math);
        await offline.unroute('**/npm/**'); await offline.evaluate(async () => { await handleKatexOnlineRecovery(); handleMermaidOnlineRecovery(); });
        await offline.waitForFunction(() => document.querySelector('#preview .katex') && document.querySelector('#preview .mdw-mermaid svg'));
        await offline.close();
      });
    }
    if (stage === 'stage2' || stage === 'extra') {
      async function fresh(targetUrl = url) {
        const target = await context.newPage(); target.on('dialog', dialog => dialog.accept());
        await target.goto(targetUrl, { waitUntil: 'load' });
        await target.waitForFunction(() => typeof initDict === 'function');
        await target.evaluate(() => document.getElementById('rn-modal').classList.remove('show'));
        return target;
      }
      await run('Marked: representative HTML matches stage-1; documented parser changes; extensions and XSS', async () => {
        assert.ok(process.env.MDWORKS_BASELINE, 'stage-1 baseline required');
        const baseline = await fresh(`${url}/baseline`);
        const samples = [
          '# 日本語 Heading\n\n本文 **bold** *italic* ~~deleted~~ ^sup^ ~sub~\n\n[link](https://example.com) ![image](./image.png)',
          '| Name | Value |\n| --- | --- |\n| 日本語 | English |',
          '- [ ] alpha\n- [x] bravo\n* [ ] charlie\n* [x] delta',
          '- outer\n  - inner\n\n> quote\n>\n> - nested\n\n```js\nconst a = 1;\n```',
          '# Footnotes\n\n本文[^b] 次[^a] 再参照[^b]\n\n[^a]: 日本語\n[^b]: **English** [link](https://example.com)',
          '**first\nsecond**\n\n日本語 $x^2$\n\n$$\\frac{1}{2}$$\n\n```mermaid\nflowchart TD\n A-->B\n```',
          '<script>window.__xss=1</script>\n\n<a href="javascript:alert(1)">bad</a><img src="x" onerror="window.__xss=1">'
        ];
        const outputs = async target => target.evaluate(samples => samples.map(text => safeMarkdownHtml(text)), samples);
        const before = await outputs(baseline), after = await outputs(page); assert.deepEqual(after, before);
        assert.match(after[1], /<table>/); assert.equal((after[2].match(/type="checkbox"/g) || []).length, 4);
        assert.equal((after[4].match(/class="mdw-footnote-ref-link"/g) || []).length, 3);
        assert.doesNotMatch(after[6], /<script|onerror=|href="javascript:/i);
        const differences = [];
        for (const sample of ['Heading\n  continuation\n---', '&#65; and &#x42;', '> >\n>\n> after']) {
          const oldHtml = await baseline.evaluate(text => marked.parse(text), sample), newHtml = await page.evaluate(text => marked.parse(text), sample);
          differences.push({ input: sample, oldHtml, newHtml, changed: oldHtml !== newHtml });
        }
        assert.match(differences[0].newHtml, /<h2>Heading\n  continuation<\/h2>/);
        if (artifacts) fs.writeFileSync(path.join(artifacts, 'marked-comparison.json'), JSON.stringify({ samples, before, after, documentedChanges: differences }, null, 2));
        await baseline.close();
      });
      await run('Editing UI: task toggle/Undo/Redo, search/replace, outline and Japanese input', async () => {
        const target = await fresh();
        for (const bullet of ['-', '*']) {
          const initial = `${bullet} [ ] hello`;
          await target.locator('#editor').fill(initial); await target.locator('#editor').selectText();
          await target.locator('#tb-task-btn').click(); assert.equal(await target.locator('#editor').inputValue(), `${bullet} [x] hello`);
          await target.locator('#editor').press('Control+z'); assert.equal(await target.locator('#editor').inputValue(), initial);
          await target.locator('#editor').press('Control+y'); assert.equal(await target.locator('#editor').inputValue(), `${bullet} [x] hello`);
        }
        await target.locator('#editor').fill('# 日本語見出し\n\nhello 日本語 hello');
        await target.locator('#editor').press('Control+f'); await target.locator('#tab-replace').click(); await target.locator('#sr-search-input').fill('hello');
        await target.locator('#sr-replace-input').fill('world'); await target.locator('#sr-btn-replace-all').click();
        await target.waitForFunction(() => editor.value.includes('world 日本語 world'));
        await target.locator('#sr-close').click(); await target.locator('#editor').press('Control+z');
        await target.waitForFunction(() => editor.value.includes('hello 日本語 hello'));
        await target.evaluate(() => { toggleOutline(); renderOutline(); }); assert.match(await target.locator('#outline-list').innerText(), /日本語見出し/);
        await target.close();
      });
      await run('Marked: benign long document versus stage-1 response', async () => {
        const baseline = await fresh(`${url}/baseline`);
        const measure = target => target.evaluate(() => {
          const text = Array(2000).fill('## 日本語 Heading\n\nHello world\n\n- item\n\n').join('');
          const start = performance.now(), html = safeMarkdownHtml(text), ms = performance.now() - start;
          return { characters: text.length, headings: (html.match(/<h2/g) || []).length, ms };
        });
        const before = await measure(baseline), after = await measure(page);
        if (artifacts) fs.writeFileSync(path.join(artifacts, 'long-markdown.json'), JSON.stringify({ before, after }));
        assert.equal(before.headings, 2000); assert.equal(after.headings, 2000); assert.ok(after.ms < Math.max(15000, before.ms * 2));
        await baseline.close();
      });
      await run('Typo UI: valid/misspelled words, case, Japanese mix, suggestions/application, ON/OFF/reload', async () => {
        const target = await fresh(); await target.locator('#editor').fill('Hello world 日本語 helo');
        await target.locator('#spell-toggle-title-btn').click(); await target.waitForFunction(() => dictReady && !isDictLoading);
        const value = await target.evaluate(() => ({ good: ['hello', 'Hello', 'world'].map(word => typo.check(word)), bad: typo.check('helo'), suggestions: typo.suggest('helo') }));
        assert.deepEqual(value.good, [true, true, true]); assert.equal(value.bad, false); assert.ok(value.suggestions.includes('hello'));
        await target.waitForFunction(() => document.querySelector('#sw-helo .spell-sug'));
        await target.locator('#sw-helo .spell-sug').filter({ hasText: /^hello$/ }).click();
        await target.waitForFunction(() => editor.value === 'Hello world 日本語 hello');
        assert.equal(await target.locator('#spell-toggle-title-btn').getAttribute('aria-pressed'), 'true');
        const elapsed = await target.evaluate(() => {
          editor.value = Array(2000).fill('Hello world 日本語 hello').join('\n'); const start = performance.now(); doSpellCheck(); return { ms: performance.now() - start, errors: spellMatches.length };
        });
        assert.equal(elapsed.errors, 0); assert.ok(elapsed.ms < 15000);
        if (artifacts) fs.writeFileSync(path.join(artifacts, 'long-spellcheck.json'), JSON.stringify(elapsed));
        await target.locator('#spell-toggle-title-btn').click(); assert.equal(await target.evaluate(() => spellEnabled), false);
        await target.evaluate(async () => { dictReady = false; typo = null; await initDict(); }); assert.equal(await target.evaluate(() => dictReady && !isDictLoading), true);
        await target.close();
      });
      await run('Dictionaries: SHA-384 mismatch/CDN abort/HTTP error reject, UI retry succeeds', async () => {
        for (const ext of ['aff', 'dic']) for (const mode of ['tamper', 'abort', 'http']) {
          const target = await context.newPage(); target.on('dialog', dialog => dialog.accept()); let fail = true;
          await target.route(`**/en_US.${ext}`, async route => {
            if (!fail) return route.fallback();
            if (mode === 'abort') return route.abort();
            const body = assets ? fs.readFileSync(path.join(assets, assetPath(route.request().url()))) : await (await route.fetch()).body();
            return route.fulfill({ body: mode === 'tamper' ? Buffer.concat([body, Buffer.from('\nchanged')]) : body,
              status: mode === 'http' ? 503 : 200, headers: { 'access-control-allow-origin': '*' }, contentType: 'text/plain' });
          });
          await target.goto(url, { waitUntil: 'load' }); await target.evaluate(() => document.getElementById('rn-modal').classList.remove('show'));
          await target.locator('#editor').fill('Hello helo 日本語'); await target.locator('#spell-toggle-title-btn').click();
          await target.waitForFunction(() => !isDictLoading); assert.equal(await target.evaluate(() => dictReady), false, `${ext} ${mode}`);
          assert.match(await target.evaluate(() => safeMarkdownHtml('**正常**')), /<strong>正常/);
          fail = false; await target.locator('#spell-toggle-title-btn').click(); await target.locator('#spell-toggle-title-btn').click();
          await target.waitForFunction(() => dictReady && !isDictLoading); await target.close();
        }
      });
      const scriptTargets = ['typo-js', 'mermaid', 'mammoth', 'dompurify', 'turndown'];
      async function checkBlockedScript(name, mode) {
        const target = await context.newPage(); target.on('dialog', dialog => dialog.accept());
        const script = Object.values(distributions[name].files).find(file => /\.js$/.test(file.url));
        let intercepted = 0;
        const intercept = async route => {
          intercepted++;
          if (mode === 'abort') return route.abort();
          const body = assets ? fs.readFileSync(path.join(assets, assetPath(script.url))) : await (await route.fetch()).body();
          return route.fulfill({ body: Buffer.concat([body, Buffer.from('\n;window.__unverified=true;')]), headers: { 'access-control-allow-origin': '*' }, contentType: 'application/javascript' });
        };
        const wordScript = ['mammoth', 'dompurify', 'turndown'].includes(name);
        if (!wordScript) await context.route(script.url, intercept);
        try {
        await target.goto(url, { waitUntil: 'load' });
        await target.evaluate(() => document.getElementById('rn-modal').classList.remove('show'));
        if (wordScript) {
          // This Edge/Playwright combination does not intercept opaque srcdoc subrequests.
          // Test real browser enforcement against the live pinned CDN bytes with mismatched SRI metadata.
          // The CDN-error case uses an actually missing resource on the same CDN, with no new host.
          const changed = await target.evaluate(({ script, mode }) => {
            const original = getWordImportSandboxSrcdoc;
            const bad = mode === 'tamper' ? 'sha384-' + 'A'.repeat(64) : script.url.replace(/[^/]+$/, 'missing-mdworks-security-test.js');
            getWordImportSandboxSrcdoc = () => original().replace(mode === 'tamper' ? script.sri : script.url, bad);
            return getWordImportSandboxSrcdoc().includes(bad);
          }, { script, mode });
          assert.equal(changed, true);
        }
        if (name === 'typo-js') {
          assert.equal(await target.evaluate(() => typeof Typo), 'undefined');
          await target.locator('#spell-toggle-title-btn').click(); await target.waitForFunction(() => !isDictLoading);
          assert.equal(await target.evaluate(() => dictReady), false);
        } else if (name === 'mermaid') {
          const result = await target.evaluate(async () => {
            const pack = await createViewerRenderPackage('```mermaid\nflowchart TD\n A-->B\n```');
            return { html: pack.html, available: !!window.mermaid };
          });
          assert.equal(result.available, false); assert.doesNotMatch(result.html, /<svg/); assert.match(result.html, /mdw-mermaid-error/);
        } else {
          const result = await target.evaluate(async bytes => {
            let error; try { await convertWordInSandbox(new Uint8Array(bytes).buffer); } catch (e) { error = e.message; }
            return { error, frames: document.querySelectorAll('iframe').length };
          }, [...docx]);
          assert.match(result.error || '', /mammoth|DOMPurify|Turndown/i, `${name} ${mode}`); assert.equal(result.frames, 0);
        }
        assert.equal(await target.evaluate(() => !!window.__unverified), false);
        if (!wordScript) assert.ok(intercepted > 0, `${name}: request was intercepted`);
        assert.match(await target.evaluate(() => safeMarkdownHtml('日本語 **editor remains usable**')), /<strong>editor remains usable/);
        } finally { await target.close(); if (!wordScript) await context.unroute(script.url, intercept); }
      }
      for (const name of scriptTargets) await run(`SRI mismatch: ${name} rejects altered script safely`, () => checkBlockedScript(name, 'tamper'));
      await run('CDN failure: host scripts blocked and Word scripts return CDN 404 safely', async () => {
        for (const name of scriptTargets) await checkBlockedScript(name, 'abort');
      });
      for (const extension of ['js', 'css']) await run(`KaTeX SRI mismatch: ${extension} fallback and verified retry`, async () => {
        const target = await context.newPage(); target.on('dialog', dialog => dialog.accept());
        const file = distributions.katex.files[`dist/katex.min.${extension}`];
        const intercept = async route => {
          const body = assets ? fs.readFileSync(path.join(assets, assetPath(file.url))) : await (await route.fetch()).body();
          return route.fulfill({ body: Buffer.concat([body, Buffer.from('\n/* changed */')]), contentType: extension === 'css' ? 'text/css' : 'application/javascript', headers: { 'access-control-allow-origin': '*' } });
        };
        await target.route(file.url, intercept); await target.goto(url, { waitUntil: 'load' });
        await target.evaluate(() => { editor.value = '日本語 $x^2$'; previewOpen = true; renderPreview(true); });
        await target.waitForFunction(() => katexLoadState === 'failed'); assert.match(await target.locator('#preview').innerText(), /\$x\^2\$/);
        assert.equal(await target.locator('#preview .katex').count(), 0); await target.unroute(file.url, intercept);
        await target.evaluate(() => handleKatexOnlineRecovery()); await target.waitForFunction(() => document.querySelector('#preview .katex'));
        await target.close();
      });
      await run('file://: dictionary integrity and Japanese file Open/Save/reopen', async () => {
        const target = await fresh(pathToFileURL(htmlPath).href);
        await target.locator('#file-input').setInputFiles({ name: '日本語.md', mimeType: 'text/markdown', buffer: Buffer.from('# 日本語\n\nHello helo') });
        await target.waitForFunction(() => editor.value.startsWith('# 日本語'));
        await target.locator('#editor').press('Control+End'); await target.locator('#editor').type('\n\n編集済み');
        await target.locator('#spell-toggle-title-btn').click(); await target.waitForFunction(() => dictReady && !isDictLoading);
        assert.equal(await target.evaluate(() => typeof Encoding), 'undefined');
        const original = await target.locator('#editor').inputValue();
        // Native file-picker dialogs cannot be operated in headless mode; exercise the existing download branch.
        await target.evaluate(() => { window.showSaveFilePicker = undefined; });
        const downloadPending = target.waitForEvent('download'); await target.locator('#editor').press('Control+s');
        const download = await downloadPending, chunks = []; for await (const chunk of await download.createReadStream()) chunks.push(chunk);
        const saved = Buffer.concat(chunks); assert.equal(saved.toString('utf8'), original);
        await target.locator('#editor').fill('temporary'); await target.locator('#file-input').setInputFiles({ name: '日本語.md', mimeType: 'text/markdown', buffer: saved });
        await target.waitForFunction(text => editor.value === text, original); await target.close();
      });
    }
    await run('No uncaught host JavaScript errors', async () => assert.deepEqual(pageErrors, []));
  } finally { await browser.close(); }
})().catch(error => { results.push({ name: 'Harness', status: 'FAIL', error: error.stack }); console.error(error); }).finally(() => {
  server.close(); if (artifacts) fs.writeFileSync(path.join(artifacts, `results-${stage}.json`), JSON.stringify(results, null, 2));
  process.exitCode = results.some(result => result.status === 'FAIL') ? 1 : 0;
});
