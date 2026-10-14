# MD//WORKS Direct Dependency Inventory

Last verified: 2026-10-13 (Japan Standard Time). The implementation's APP_VERSION is 1.6.6. This inventory records the state after the stage 2 update.

The application remains a single HTML file, with no npm dependency management or build process. `tests/dependency-assets.json` contains distribution identifiers used for verification; it is not an application dependency management file.

## Libraries in Use

| Name | Version | Purpose | Loading method | Package license | Verification date |
|---|---|---|---|---|---|
| Marked | 18.0.14 | Markdown parsing, custom extensions, table of contents, and output | Bundled UMD | MIT | 2026-10-13 |
| Typo.js | 1.3.2 | English spellchecking | Library from CDN; dictionaries via fetch | BSD-3-Clause | 2026-10-13 |
| Mammoth | 1.13.0 | DOCX-to-HTML conversion | CDN, on demand | BSD-2-Clause | 2026-10-13 |
| Mermaid | 11.16.1 | Diagram rendering | CDN, on demand | MIT | 2026-10-13 |
| DOMPurify | 3.4.17 | HTML/SVG sanitization | Bundled in the application; CDN in the Word iframe | (MPL-2.0 OR Apache-2.0) | 2026-10-13 |
| KaTeX | 0.19.0 | Mathematical expression rendering | CDN, on demand | MIT | 2026-10-13 |
| Turndown | 7.2.4 | Conversion of Word-derived HTML to Markdown | CDN, on demand | MIT | 2026-10-13 |

## Distributions and Hashes

For every specified version, the official npm package.json and tarball SHA-512 were verified. The bytes retrieved from the CDN for the following 10 files match the corresponding files in the npm tarballs. SHA-256 and SHA-384 were calculated from those same retrieved bytes.

When comparing bundled Marked and DOMPurify, the existing HTML's CRLF line endings are normalized to LF before comparison with the official source. No custom modifications have been made inside the libraries. The SHA-256 values below identify the original bytes of the official distributions, not the entire HTML file.

### Marked 18.0.14 — lib/marked.umd.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/marked@18.0.14/lib/marked.umd.js)
- Distribution identifier: `package/lib/marked.umd.js` in `https://registry.npmjs.org/marked/-/marked-18.0.14.tgz`
- Size: 46891 bytes
- SHA-256: `21568877a938d2c4e7d74e27f18e60da96bb73a68809610ca39216e1efebae62`
- SHA-384: `sha384-2vpGtuKqJvFlwJqYnf/wUMuzUfhUnYBt9oay0e2yaFcq0Dh6/aEbQ8YAOeKGzlYo`
- Verification use: Comparison with the bundled source, not script SRI

### Typo.js 1.3.2 — typo.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/typo.js)
- Distribution identifier: `package/typo.js` in `https://registry.npmjs.org/typo-js/-/typo-js-1.3.2.tgz`
- Size: 40168 bytes
- SHA-256: `38aca145fe2f2ff727d4b8f25c8698c8199f2884a0811458d6fc0d41d1f81ba3`
- SHA-384: `sha384-iKTwAGlX9kbsTpsre+dQC0+i60Pajk7wt8RXoMxVPC9LmcZ4qpBF+eP6qcHxNGpK`
- Verification use: script/link integrity

### Typo.js 1.3.2 — dictionaries/en_US/en_US.aff

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/en_US.aff)
- Distribution identifier: `package/dictionaries/en_US/en_US.aff` in `https://registry.npmjs.org/typo-js/-/typo-js-1.3.2.tgz`
- Size: 3090 bytes
- SHA-256: `c7a8c4d08c29d237880844b1623099f59092602f189be38ce3912e457ff38bc1`
- SHA-384: `sha384-/P5B0jVP7QXgvynOMNiP5a+OFRqvn+JJmiYZmq4o1Y4vc93N3/goz8yyFz8iISRi`
- Verification use: Dictionary byte verification through fetch(url, { integrity })

### Typo.js 1.3.2 — dictionaries/en_US/en_US.dic

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/en_US.dic)
- Distribution identifier: `package/dictionaries/en_US/en_US.dic` in `https://registry.npmjs.org/typo-js/-/typo-js-1.3.2.tgz`
- Size: 551762 bytes
- SHA-256: `f0b1a234bd178bdd01875b2a392a9647f888b8fe879f79c52aae62c2759b3647`
- SHA-384: `sha384-iCAD1eau2Nvskji81XhOyqgkNzbmO85f6XiGRz1mOJCWedk2VPpjUevyBesBQpcO`
- Verification use: Dictionary byte verification through fetch(url, { integrity })

### Mammoth 1.13.0 — mammoth.browser.min.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/mammoth@1.13.0/mammoth.browser.min.js)
- Distribution identifier: `package/mammoth.browser.min.js` in `https://registry.npmjs.org/mammoth/-/mammoth-1.13.0.tgz`
- Size: 405060 bytes
- SHA-256: `92914a3708cfdf1e62cb553d1856a7fedab21da83d8ee82845de2f897b368cab`
- SHA-384: `sha384-8NWE3bZDrmRI4IePMoQaEoLhAQ1MmRMJkdNgnGiHRFanTqsFKr0TmK6aSZvFJ/PO`
- Verification use: script/link integrity

### Mermaid 11.16.1 — dist/mermaid.min.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/mermaid@11.16.1/dist/mermaid.min.js)
- Distribution identifier: `package/dist/mermaid.min.js` in `https://registry.npmjs.org/mermaid/-/mermaid-11.16.1.tgz`
- Size: 3566058 bytes
- SHA-256: `18327bef70d96fb505fe7287d9f6a7362ebf07ff6576ddfaffb1a06f3e1a2954`
- SHA-384: `sha384-aBQXj4hK6Jm05i7aQAsUV3bLdSUrHX1BGYfMB0166TtWt/RRaw+h0Eelme9OCOvy`
- Verification use: script/link integrity

### DOMPurify 3.4.17 — dist/purify.min.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/dompurify@3.4.17/dist/purify.min.js)
- Distribution identifier: `package/dist/purify.min.js` in `https://registry.npmjs.org/dompurify/-/dompurify-3.4.17.tgz`
- Size: 29828 bytes
- SHA-256: `cd37898f9782adf54820c413191b5691803f0f137c799d6edcfd38523b4c2c31`
- SHA-384: `sha384-P0JNneQf81HOl9VwNXK76cQ9VMD6Nfsnepxb0cCOg8+UzEdzgPHAPV4wVQrvYQSx`
- Verification use: Comparison with the application bundle, and integrity in the Word iframe

### KaTeX 0.19.0 — dist/katex.min.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/katex@0.19.0/dist/katex.min.js)
- Distribution identifier: `package/dist/katex.min.js` in `https://registry.npmjs.org/katex/-/katex-0.19.0.tgz`
- Size: 272868 bytes
- SHA-256: `103a53763cc033bba8d175bf3f0ba597c3505c9b6747dd3f2c7bc2a6bfcc8ae7`
- SHA-384: `sha384-QFFtAGzvvj+bfgCGxXJlNZZR1nXEZgvG8tDLCCY1F19xl20WlfTYgguB4VcNdxYk`
- Verification use: script/link integrity

### KaTeX 0.19.0 — dist/katex.min.css

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/katex@0.19.0/dist/katex.min.css)
- Distribution identifier: `package/dist/katex.min.css` in `https://registry.npmjs.org/katex/-/katex-0.19.0.tgz`
- Size: 24793 bytes
- SHA-256: `d4ab5b8ee16989b070cdb0ea24bd6ad48fc8df1b787f280f29d3ae4f959f2c00`
- SHA-384: `sha384-3rdsX6e5mueWyoweR9NIVmtEsUkokpBT/0ALqKKIBMr9j4qhHkaIkAcGgsE6uVlp`
- Verification use: script/link integrity

### Turndown 7.2.4 — lib/turndown.browser.umd.js

- Distribution URL: [Version-pinned CDN distribution](https://cdn.jsdelivr.net/npm/turndown@7.2.4/lib/turndown.browser.umd.js)
- Distribution identifier: `package/lib/turndown.browser.umd.js` in `https://registry.npmjs.org/turndown/-/turndown-7.2.4.tgz`
- Size: 26946 bytes
- SHA-256: `cdf933e0a2085df3c64d6c763331f04345f6c3b25746216e8f1426c9c5253045`
- SHA-384: `sha384-yfnQWJ22yiVEUfFDQH3SNYUI9Rl/zaLGe81+2ky2ohcZtz/854n4bJS9ZufXp2NR`
- Verification use: script/link integrity

## Notes on Dictionaries and Related Resources

- The en_US dictionary in the Typo.js 1.3.2 distribution uses the UTF-8 Hunspell format. Its README identifies it as the SCOWL-derived 2020.12.07 version. The package version and dictionary creation date are distinct.
- The Typo.js library is identified as BSD-3-Clause in npm and as Modified BSD in its README. The dictionary data includes multiple copyright notices and permissions from SCOWL and other sources, so it should not be classified solely under the library's BSD-3-Clause license. See the [official dictionary distribution README](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/README.md).
- KaTeX font URLs resolve to `dist/fonts/` relative to the CSS from the same 0.19.0 version. Font existence, browser loading, and rendering were verified. A complete inventory of individual font hashes and licenses has not been verified.
- Existing external style resources such as Google Fonts are separate from the seven direct JavaScript libraries listed above. Version-pinned SRI was not added to those resources in this update.

## Removed Dependency

encoding-japanese 2.0.0 was removed because no API calls were found beyond its loading tag. Browser-standard APIs such as File/Blob and TextEncoder/TextDecoder used by Open/Save, Word import, Viewer, Standalone App, and character encoding processing remain in use. The unused library was not retained for possible future use.

## Distribution Path Compatibility

The previous Turndown `lib/turndown.browser.umd.min.js` is a CDN-generated file absent from the official npm tarball. To ensure byte equality with the official distribution, the path was changed to `lib/turndown.browser.umd.js` from the same 7.2.4 version. The CDN provider, UMD global API, and conversion settings remain unchanged. Word conversion regression tests were performed.

## Outstanding Items

- Exact versions of transitive dependencies inside each bundle: **not verified**. Dependency ranges in package.json were not used to infer versions for this inventory.
- Forced interruption of synchronous CPU processing in the iframe, ZIP expansion limits, and review of CSP unsafe-inline are separate tasks.
- Firefox testing on an actual device, physical printing, and OS-native save dialogs have not been tested. Edge HTTP/file usage and dictionary integrity were tested.
- Previously exported Viewer and Standalone App files do not update automatically. Regenerate any required files using the updated editor.

## Verification During Future Updates

Use `tests/fetch-dependency-assets.py` to retrieve and compare the specified versions and recalculate hashes from the distribution bytes. Use `dependency-security.test.cjs` to verify executable URLs, versions, SRI, bundled code, and change scope. Use `dependency-security.browser.cjs stage2` to verify successful loading, SRI mismatches, CDN failures, dictionary retries, editing, and output formats. Do not use floating latest URLs or retries that bypass hash verification.
