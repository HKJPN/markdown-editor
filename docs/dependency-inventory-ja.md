# MD//WORKS 直接依存ライブラリ台帳

最終更新：2026-11-26（日本時間）、v1.6.8 の DOMPurify、Marked、KaTeX、Mermaid の更新。各ライブラリの確認日は表に記載。

アプリ本体は単一HTMLで、npm管理・ビルド工程はない。`tests/dependency-assets.json` は検証用の配布物識別情報であり、アプリの依存管理ファイルではない。

## 使用ライブラリ

| 名前 | 版 | 目的 | 読み込み | パッケージのライセンス | 確認日 |
|---|---|---|---|---|---|
| Marked | 18.3.0 | Markdown解析・独自拡張・目次・出力 | 同梱UMD | MIT | 2026-11-26 |
| Typo.js | 1.3.2 | 英語スペルチェック | CDN本体＋fetch辞書 | BSD-3-Clause | 2026-10-13 |
| Mammoth | 1.13.0 | DOCXからHTMLへの変換 | CDN（必要時） | BSD-2-Clause | 2026-10-13 |
| Mermaid | 12.3.0 | 図の描画 | CDN（必要時） | MIT | 2026-11-26 |
| DOMPurify | 3.5.0 | HTML/SVGの無害化 | 本体同梱＋Word iframe CDN | (MPL-2.0 OR Apache-2.0) | 2026-11-26 |
| KaTeX | 0.19.1 | 数式描画 | CDN（必要時） | MIT | 2026-11-26 |
| Turndown | 7.2.4 | Word由来HTMLからMarkdownへの変換 | CDN（必要時） | MIT | 2026-10-13 |

## 配布物とハッシュ

全指定版について、公式npmのpackage.json・tarball SHA-512を確認した。以下の10ファイルは実CDNの取得バイトとnpm tarball内のファイルが一致する。SHA-256とSHA-384は同じ取得バイトから計算した。

同梱Marked/DOMPurifyの比較では、既存HTMLのCRLF表現をLFへ戻して公式ソースと照合する。ライブラリ内部の独自修正はない。以下のSHA-256は公式配布物の元バイトの値で、HTML全体のハッシュではない。

### Marked 18.3.0 — lib/marked.umd.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/marked@18.3.0/lib/marked.umd.js)
- 配布識別：`https://registry.npmjs.org/marked/-/marked-18.3.0.tgz` 内の `package/lib/marked.umd.js`
- サイズ：55534 bytes
- SHA-256：`f8c7f128939415995e2219e8a84bec42fab27f5980d22e361339e6901da5eadf`
- SHA-384：`sha384-hH4NOxDIQY57RnVrD2fqqLH/RL4DK2iPPnw/nHh2KuepyxA6z62hUUPNnuXf6AMX`
- 検証の利用：同梱ソースの照合用（scriptのSRIではない）

### Typo.js 1.3.2 — typo.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/typo.js)
- 配布識別：`https://registry.npmjs.org/typo-js/-/typo-js-1.3.2.tgz` 内の `package/typo.js`
- サイズ：40168 bytes
- SHA-256：`38aca145fe2f2ff727d4b8f25c8698c8199f2884a0811458d6fc0d41d1f81ba3`
- SHA-384：`sha384-iKTwAGlX9kbsTpsre+dQC0+i60Pajk7wt8RXoMxVPC9LmcZ4qpBF+eP6qcHxNGpK`
- 検証の利用：script/linkのintegrity

### Typo.js 1.3.2 — dictionaries/en_US/en_US.aff

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/en_US.aff)
- 配布識別：`https://registry.npmjs.org/typo-js/-/typo-js-1.3.2.tgz` 内の `package/dictionaries/en_US/en_US.aff`
- サイズ：3090 bytes
- SHA-256：`c7a8c4d08c29d237880844b1623099f59092602f189be38ce3912e457ff38bc1`
- SHA-384：`sha384-/P5B0jVP7QXgvynOMNiP5a+OFRqvn+JJmiYZmq4o1Y4vc93N3/goz8yyFz8iISRi`
- 検証の利用：fetch(url, { integrity })による辞書バイト検証

### Typo.js 1.3.2 — dictionaries/en_US/en_US.dic

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/en_US.dic)
- 配布識別：`https://registry.npmjs.org/typo-js/-/typo-js-1.3.2.tgz` 内の `package/dictionaries/en_US/en_US.dic`
- サイズ：551762 bytes
- SHA-256：`f0b1a234bd178bdd01875b2a392a9647f888b8fe879f79c52aae62c2759b3647`
- SHA-384：`sha384-iCAD1eau2Nvskji81XhOyqgkNzbmO85f6XiGRz1mOJCWedk2VPpjUevyBesBQpcO`
- 検証の利用：fetch(url, { integrity })による辞書バイト検証

### Mammoth 1.13.0 — mammoth.browser.min.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/mammoth@1.13.0/mammoth.browser.min.js)
- 配布識別：`https://registry.npmjs.org/mammoth/-/mammoth-1.13.0.tgz` 内の `package/mammoth.browser.min.js`
- サイズ：405060 bytes
- SHA-256：`92914a3708cfdf1e62cb553d1856a7fedab21da83d8ee82845de2f897b368cab`
- SHA-384：`sha384-8NWE3bZDrmRI4IePMoQaEoLhAQ1MmRMJkdNgnGiHRFanTqsFKr0TmK6aSZvFJ/PO`
- 検証の利用：script/linkのintegrity

### Mermaid 12.3.0 — dist/mermaid.min.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/mermaid@12.3.0/dist/mermaid.min.js)
- 配布識別：`https://registry.npmjs.org/mermaid/-/mermaid-12.3.0.tgz` 内の `package/dist/mermaid.min.js`
- サイズ：5537838 bytes
- SHA-256：`336df803d87a38b70a01e736e666c8f7601d2ce42f5e47c8fafe5d721074b9a3`
- SHA-384：`sha384-HHW54r639fK42Ip0coGF3mz8oSiGn0eEoWNTLs75X7H63pLSDBa0Tqs0RwGmLlXE`
- 検証の利用：script/linkのintegrity
- 同梱 DOMPurify：公式単一ファイル版の 3.4.17。更新は公式 Mermaid リリースに追随する。

### DOMPurify 3.5.0 — dist/purify.min.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/dompurify@3.5.0/dist/purify.min.js)
- 配布識別：`https://registry.npmjs.org/dompurify/-/dompurify-3.5.0.tgz` 内の `package/dist/purify.min.js`
- サイズ：30839 bytes
- SHA-256：`f69a46022ab1f53e969c8ebbca98172c8995785a9b3be72ea4a12d25b1a1bf67`
- SHA-384：`sha384-DOUwTXbuiiQxlONuue5N42674XXDfjIJ/LTPtJMZ2ZV1Ir4NRQ3OnM/yM505YQAc`
- 検証の利用：本体同梱版の照合、およびWord iframeのintegrity

### KaTeX 0.19.1 — dist/katex.min.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/katex@0.19.1/dist/katex.min.js)
- 配布識別：`https://registry.npmjs.org/katex/-/katex-0.19.1.tgz` 内の `package/dist/katex.min.js`
- サイズ：273081 bytes
- SHA-256：`fa140498b8cfc8302cbe5e7cb1bdbc1f952bc38b3fa258ede09e73edbf9a74bc`
- SHA-384：`sha384-a1WQdjRj162i159OYq041X6I4K8NenkrI09LlPmiHg0YOb7CR+wJOraXwK9abpnE`
- 検証の利用：script/linkのintegrity

### KaTeX 0.19.1 — dist/katex.min.css

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/katex@0.19.1/dist/katex.min.css)
- 配布識別：`https://registry.npmjs.org/katex/-/katex-0.19.1.tgz` 内の `package/dist/katex.min.css`
- サイズ：24793 bytes
- SHA-256：`00e0b094171b07f58422075f469b4feac2b2f7bce1aeec943c08da4d697f4dcf`
- SHA-384：`sha384-WwGtaC6ywCHxA5cstpj/3+xIZvTez8dq2IcBQaXRkenHZ7FVVq1ZROtURwfbtTlG`
- 検証の利用：script/linkのintegrity

### Turndown 7.2.4 — lib/turndown.browser.umd.js

- 配布URL：[固定版CDN配布物](https://cdn.jsdelivr.net/npm/turndown@7.2.4/lib/turndown.browser.umd.js)
- 配布識別：`https://registry.npmjs.org/turndown/-/turndown-7.2.4.tgz` 内の `package/lib/turndown.browser.umd.js`
- サイズ：26946 bytes
- SHA-256：`cdf933e0a2085df3c64d6c763331f04345f6c3b25746216e8f1426c9c5253045`
- SHA-384：`sha384-yfnQWJ22yiVEUfFDQH3SNYUI9Rl/zaLGe81+2ky2ohcZtz/854n4bJS9ZufXp2NR`
- 検証の利用：script/linkのintegrity

## 辞書と関連資源の注意事項

- en_US辞書はTypo.js 1.3.2配布物内のUTF-8 Hunspell形式。辞書READMEの表記はSCOWL由来の2020.12.07版。パッケージ版と辞書データの作成日を混同しない。
- Typo.js本体はnpmのBSD-3-Clause／READMEのModified BSD表記。辞書データにはSCOWL等の複数の著作権・許諾が含まれるため、本体のBSD-3-Clauseだけで分類しない。[辞書の公式配布README](https://cdn.jsdelivr.net/npm/typo-js@1.3.2/dictionaries/en_US/README.md)を参照する。
- KaTeXフォントは同じ0.19.1 CSSの相対URLから`dist/fonts/`へ解決する。フォント存在とブラウザーでの取得・表示を確認した。フォントごとの個別ハッシュ台帳・ライセンスの全件確認は未実施。
- Google Fonts等の既存外部スタイル資源は、上記の直接JavaScriptライブラリ7種と別に扱う。固定版のSRIを今回追加していない。

## 削除した依存

encoding-japanese 2.0.0は読み込みタグ以外のAPI利用がなく削除した。Open/Save、Word、Viewer、Standalone App、文字コード処理で使うブラウザー標準File/Blob、TextEncoder/TextDecoder等は維持している。将来の利用を理由に残していない。

## パス互換性への対応

Turndownの旧`lib/turndown.browser.umd.min.js`は公式npm tarballに存在しないCDN生成版。公式配布物とのバイト一致を満たすため、同じ7.2.4の`lib/turndown.browser.umd.js`に変更した。配信元・UMDグローバル・変換設定は同じで、Word変換回帰試験を実施した。

## 未対応事項

- 各バンドル内の間接依存の確定版：**未確認**。package.jsonの範囲から推測して台帳を埋めていない。
- iframe同期CPU処理の強制中断・ZIP展開量上限、CSPのunsafe-inline見直しは別課題。
- Firefoxでの実機試験、実プリンター・OSネイティブ保存ダイアログは未実施。EdgeのHTTP/file利用と辞書integrityを試験した。
- 過去に書き出したViewer・Standalone Appは自動更新されない。必要なファイルは更新済みエディタから再生成する。

## 更新時の検証方法

`tests/fetch-dependency-assets.py`で指定版を取得・照合し、配布バイトからハッシュを再計算する。`dependency-security.test.cjs`で実行URL・版・SRI・同梱コード・変更範囲を確認し、`dependency-security.browser.cjs stage2`で正常取得、SRI不一致、CDN障害、辞書再試行、編集・各種出力を確認する。浮動的なlatest URLや、ハッシュ検証を迂回する再取得は使用しない。
