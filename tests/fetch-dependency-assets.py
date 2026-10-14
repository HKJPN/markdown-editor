"""Verification-only downloader; no application package manager or build step.

Run with the bundled Python: python tests/fetch-dependency-assets.py <output-dir>
Checks npm tarball integrity and byte equality of the pinned CDN distribution.
"""
import base64
import hashlib
import io
import json
import pathlib
import sys
import tarfile
import urllib.request

root = pathlib.Path(sys.argv[1])
root.mkdir(parents=True, exist_ok=True)
assets = {
    'marked': ('18.0.14', ['lib/marked.umd.js']),
    'typo-js': ('1.3.2', ['typo.js', 'dictionaries/en_US/en_US.aff', 'dictionaries/en_US/en_US.dic']),
    'mammoth': ('1.13.0', ['mammoth.browser.min.js']),
    'mermaid': ('11.16.1', ['dist/mermaid.min.js']),
    'dompurify': ('3.4.17', ['dist/purify.min.js']),
    'katex': ('0.19.0', ['dist/katex.min.js', 'dist/katex.min.css']),
    'turndown': ('7.2.4', ['lib/turndown.browser.umd.js']),
}
proof = {}


def get(url):
    with urllib.request.urlopen(url, timeout=45) as response:
        return response.read()


for name, (version, files) in assets.items():
    meta = json.loads(get(f'https://registry.npmjs.org/{name}/{version}'))
    assert meta['version'] == version
    tgz = get(meta['dist']['tarball'])
    integrity = 'sha512-' + base64.b64encode(hashlib.sha512(tgz).digest()).decode()
    assert integrity == meta['dist']['integrity']
    archive = tarfile.open(fileobj=io.BytesIO(tgz), mode='r:gz')
    package = json.load(archive.extractfile('package/package.json'))
    assert package['version'] == version
    print(name, version, 'official package files:', ', '.join(files), flush=True)
    proof[name] = {'version': version, 'tarball': meta['dist']['tarball'],
                   'integrity': integrity, 'license': package.get('license'),
                   'repository': package.get('repository'), 'files': {}}
    (root / f'{name}-{version}.json').write_text(json.dumps(meta), encoding='utf8')
    for file in files:
        member = 'package/' + file
        assert member in archive.getnames(), f'{file} absent; inspect official package before choosing another path'
        url = f'https://cdn.jsdelivr.net/npm/{name}@{version}/{file}'
        data = get(url)
        assert data == archive.extractfile(member).read(), f'{name}: CDN bytes differ from npm'
        (root / f'{name}-{pathlib.Path(file).name}').write_bytes(data)
        sri = 'sha384-' + base64.b64encode(hashlib.sha384(data).digest()).decode()
        proof[name]['files'][file] = {'url': url, 'sri': sri, 'sha256': hashlib.sha256(data).hexdigest(),
                                      'bytes': len(data), 'cdnMatchesNpm': True}
        print(file, len(data), sri, flush=True)
    for member in archive.getmembers():
        if name == 'katex' and member.name.startswith('package/dist/fonts/') and member.isfile():
            fonts = root / 'katex-fonts'
            fonts.mkdir(exist_ok=True)
            (fonts / pathlib.Path(member.name).name).write_bytes(archive.extractfile(member).read())
        if 'license' in pathlib.Path(member.name).name.lower() and member.isfile() and member.size < 200000:
            license_dir = root / 'licenses' / name
            license_dir.mkdir(parents=True, exist_ok=True)
            (license_dir / pathlib.Path(member.name).name).write_bytes(archive.extractfile(member).read())
    (root / 'distribution-proof.json').write_text(json.dumps(proof, indent=2), encoding='utf8')
