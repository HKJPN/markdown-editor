// node --test tests/dependency-security.test.cjs
// Optional MDWORKS_ASSET_DIR and MDWORKS_BASELINE verify downloaded bytes and exact change scope.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const distributions = require('./dependency-assets.json');
const expected = {
  css: 'sha384-3rdsX6e5mueWyoweR9NIVmtEsUkokpBT/0ALqKKIBMr9j4qhHkaIkAcGgsE6uVlp',
  js: 'sha384-QFFtAGzvvj+bfgCGxXJlNZZR1nXEZgvG8tDLCCY1F19xl20WlfTYgguB4VcNdxYk'
};
function purifierBlock(source) {
  const at = source.indexOf('/* DOMPurify bundled');
  return source.slice(source.lastIndexOf('<script>', at) + 8, source.indexOf('</script>', at));
}
function markedBlock(source) {
  const at = source.indexOf('marked v');
  return source.slice(source.lastIndexOf('<script>', at) + 8, source.indexOf('</script>', at));
}
test('all executable inline JavaScript parses', () => {
  let count = 0;
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (/\bsrc\s*=|\btype\s*=\s*["']application\/json/i.test(match[1])) continue;
    new vm.Script(match[2], { filename: `index.inline.${++count}.js` });
  }
  assert.ok(count >= 3);
});
test('versions, CDN URLs and JS/CSS SRI are pinned consistently', () => {
  const inventory = fs.readFileSync(path.join(__dirname, '..', 'docs', 'dependency-inventory.md'), 'utf8');
  for (const pkg of Object.values(distributions)) for (const file of Object.values(pkg.files)) {
    assert.ok(inventory.includes(file.url)); assert.ok(inventory.includes(file.sri)); assert.ok(inventory.includes(file.sha256));
  }
  assert.match(html, /const KATEX_VERSION = '0\.19\.0'/);
  assert.match(html, /const MERMAID_VERSION = '11\.16\.1'/);
  assert.match(html, /mammoth@1\.13\.0\/mammoth\.browser\.min\.js/);
  assert.match(html, /dompurify@3\.4\.17\/dist\/purify\.min\.js/);
  assert.match(purifierBlock(html), /DOMPurify 3\.4\.17/);
  assert.match(markedBlock(html), /marked v18\.0\.14/);
  assert.match(html, /typo-js@1\.3\.2\/typo\.js/);
  assert.doesNotMatch(html, /marked v18\.0\.7|typo-js@1\.2\.3|encoding-japanese|window\.Encoding|Encoding\./);
  assert.doesNotMatch(html, /mammoth@1\.12\.0|mermaid@11\.12\.2|dompurify@3\.4\.12|DOMPurify 3\.4\.12|version="3\.4\.12"|const KATEX_VERSION = '0\.17\.0'|const MERMAID_VERSION = '11\.12\.2'/);
  assert.ok(html.includes(`const KATEX_CSS_INTEGRITY = '${expected.css}'`));
  assert.ok(html.includes(`const KATEX_JS_INTEGRITY = '${expected.js}'`));
  assert.match(html, /katex@\$\{KATEX_VERSION\}\/dist\/katex\.min\.css/);
  assert.match(html, /katex@\$\{KATEX_VERSION\}\/dist\/katex\.min\.js/);
  assert.match(html, /element\.crossOrigin = 'anonymous'/);
  for (const match of html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>/g)) {
    const file = Object.values(distributions).flatMap(pkg => Object.values(pkg.files)).find(file => file.url === match[1]);
    assert.ok(file, `unexpected external script ${match[1]}`);
    assert.ok(match[0].includes(`integrity="${file.sri}"`));
    assert.ok(match[0].includes('crossorigin="anonymous"'));
  }
  assert.ok(html.includes(`const MERMAID_JS_INTEGRITY = '${distributions.mermaid.files['dist/mermaid.min.js'].sri}'`));
  assert.match(html, /script\.integrity = MERMAID_JS_INTEGRITY/);
  for (const file of Object.values(distributions['typo-js'].files).filter(file => /\.(aff|dic)$/.test(file.url))) {
    assert.ok(html.includes(`fetchSpellDictionary('${file.url}', '${file.sri}')`));
  }
  assert.match(html, /fetch\(url, \{ integrity \}\)/);
  assert.match(html, /if \(!response\.ok\) throw/);
});
test('security options and resource limits remain explicit', () => {
  assert.match(html, /iframe\.sandbox = 'allow-scripts'/);
  assert.match(html, /const WORD_MAX_BYTES = 10 \* 1024 \* 1024/);
  assert.match(html, /const WORD_IMPORT_SANDBOX_TIMEOUT_MS = 60000/);
  assert.match(html, /if \(file\.size > WORD_MAX_BYTES\)/);
  assert.match(html, /securityLevel: 'strict'/); assert.match(html, /htmlLabels: false/);
  assert.match(html, /maxTextSize: 50000/); assert.match(html, /ordinal > 20/);
  assert.match(html, /source\.length > 50000/); assert.match(html, /MERMAID_RENDER_DELAY = 400/);
  assert.match(html, /trust: false/); assert.match(html, /trust:false/);
  assert.match(html, /maxExpand: 1000/); assert.match(html, /maxExpand:1000/);
  assert.match(html, /maxSize: 100/); assert.match(html, /maxSize:100/);
  const application = html.slice(html.indexOf('const APP_VERSION'));
  assert.doesNotMatch(application, /IN_PLACE\s*:|ALLOW_UNKNOWN_PROTOCOLS\s*:\s*true|SAFE_FOR_XML\s*:\s*false/);
});
test('all downloaded SRI/SHA-256, fonts, official bundled Marked and DOMPurify bytes', { skip: !process.env.MDWORKS_ASSET_DIR }, () => {
  const directory = process.env.MDWORKS_ASSET_DIR;
  for (const extension of ['css', 'js']) {
    const bytes = fs.readFileSync(path.join(directory, `katex-katex.min.${extension}`));
    assert.equal('sha384-' + crypto.createHash('sha384').update(bytes).digest('base64'), expected[extension]);
  }
  const css = fs.readFileSync(path.join(directory, 'katex-katex.min.css'), 'utf8');
  const fonts = [...css.matchAll(/url\((fonts\/[^)]+)\)/g)].map(match => match[1]);
  assert.ok(fonts.length >= 20);
  for (const font of fonts) assert.ok(fs.existsSync(path.join(directory, 'katex-fonts', path.basename(font))));
  const official = fs.readFileSync(path.join(directory, 'dompurify-purify.min.js'), 'utf8');
  assert.equal(purifierBlock(html).replace(/^\s*\/\* DOMPurify bundled \| v3\.4\.17 \*\/\s*/, '').trim().replace(/\r\n/g, '\n'), official.trim());
  const officialMarked = fs.readFileSync(path.join(directory, 'marked-marked.umd.js'), 'utf8');
  assert.equal(markedBlock(html).trim().replace(/\r\n/g, '\n'), officialMarked.trim());
  for (const [name, pkg] of Object.entries(distributions)) for (const [file, evidence] of Object.entries(pkg.files)) {
    const bytes = fs.readFileSync(path.join(directory, `${name}-${path.basename(file)}`));
    assert.equal('sha384-' + crypto.createHash('sha384').update(bytes).digest('base64'), evidence.sri);
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), evidence.sha256);
    assert.equal(bytes.length, evidence.bytes); assert.equal(evidence.cdnMatchesNpm, true);
  }
});
test('only approved stage-2 and Ctrl+H changes differ from stage-1 baseline; CSP/settings/UI unchanged', { skip: !process.env.MDWORKS_BASELINE }, () => {
  const baseline = fs.readFileSync(process.env.MDWORKS_BASELINE, 'utf8');
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(process.env.MDWORKS_BASELINE)).digest('hex'), '0d952f31f75a9fdf4738331a6290a6a3a9725bf0f3a6aae5484893a27a38f4c6');
  let normalized = baseline.replace(markedBlock(baseline), markedBlock(html)).replace(/\r\n/g, '\n');
  function replace(old, value) { assert.equal(normalized.split(old).length - 1, 1, `baseline occurrence: ${old}`); normalized = normalized.replace(old, value); }
  replace('<script src="https://cdn.jsdelivr.net/npm/encoding-japanese@2.0.0/encoding.min.js" crossorigin="anonymous"></script>\n', '');
  const typo = distributions['typo-js'].files['typo.js'];
  replace('<script src="https://cdn.jsdelivr.net/npm/typo-js@1.2.3/typo.js" crossorigin="anonymous"></script>', `<script src="${typo.url}" integrity="${typo.sri}" crossorigin="anonymous"></script>`);
  const mermaid = distributions.mermaid.files['dist/mermaid.min.js'];
  replace("const MERMAID_JS_ELEMENT_ID =", `const MERMAID_JS_INTEGRITY = '${mermaid.sri}';\nconst MERMAID_JS_ELEMENT_ID =`);
  replace('    script.src = MERMAID_JS_URL;\n', '    script.src = MERMAID_JS_URL;\n    script.integrity = MERMAID_JS_INTEGRITY;\n');
  replace('async function initDict() {', "async function fetchSpellDictionary(url, integrity) {\n  const response = await fetch(url, { integrity });\n  if (!response.ok) throw new Error('Spell dictionary load failed.');\n  return response.text();\n}\n\nasync function initDict() {");
  for (const ext of ['aff', 'dic']) {
    const file = distributions['typo-js'].files[`dictionaries/en_US/en_US.${ext}`];
    replace(`fetch('https://cdn.jsdelivr.net/npm/typo-js@1.2.3/dictionaries/en_US/en_US.${ext}').then(r => r.text())`, `fetchSpellDictionary('${file.url}', '${file.sri}')`);
  }
  replace("    set('sp-loading-text', T.dictFailed);\n  }\n}", "    set('sp-loading-text', T.dictFailed);\n  } finally {\n    isDictLoading = false;\n  }\n}");
  for (const name of ['mammoth', 'dompurify', 'turndown']) {
    const file = Object.values(distributions[name].files)[0];
    const oldUrl = name === 'turndown' ? file.url.replace('.umd.js', '.umd.min.js') : file.url;
    replace(`<script src="${oldUrl}">`, `<script src="${file.url}" integrity="${file.sri}" crossorigin="anonymous">`);
  }
  const findShortcut = "  if (key === 'f' && m) { e.preventDefault(); openSearchPanel('find'); }\n";
  replace(findShortcut, findShortcut + "  if (key === 'h' && e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !e.isComposing && e.keyCode !== 229 && !isEditorComposing && !isComposing && guardEditorCommand()) {\n    e.preventDefault();\n    openSearchPanel('replace');\n  }\n");
  assert.equal(normalized, html.replace(/\r\n/g, '\n'), 'unexpected application change');
});
