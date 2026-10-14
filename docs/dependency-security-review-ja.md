# 依存ライブラリーとセキュリティ更新の調査

調査日：2026年10月13日（日本時間）

対象：この作業フォルダーの `index.html`（APP_VERSION: 1.6.6）。READMEの表記は1.6.5のため、実装を基準とした。

対象ファイルのSHA-256：`17EC877256F7EF9F96F186CBA957A1151B37B19B8BF3A519255A95B7131F4252`

## 結論

MammothとMermaidは、使用バージョンに該当する公開済みのセキュリティ修正があり、優先して更新する必要がある。KaTeXも条件付きの脆弱性に該当するため更新を推奨する。DOMPurifyは防御の中心であり、現行設定で直近の主要な脆弱性の成立条件が確認されなくても、早期に最新版へ更新するのが妥当である。

Markedは処理量に関する改善を取り込むため更新を推奨する。Turndownは確認できた最新版を使用している。Typo.jsは通常の保守更新、encoding-japaneseは更新の前に不要な読み込みの削除を検討する。

本調査はコードの静的確認と公開情報の照合であり、攻撃の再現試験や全依存関係の網羅的監査ではない。アプリ本体の変更・ライブラリー更新は実施していない。

## 直接読み込むライブラリーの一覧

行番号は調査時点の `index.html` に対応する。最新版欄は調査時に公開情報から確認できた版であり、最小修正版とは区別する。

| ライブラリー | 使用版 | 用途・読み込み方式 | 実装箇所 | 確認できた最新版 | 更新判断 |
|---|---|---|---|---|---|
| Marked | 18.0.7 | Markdown→HTML。コードをHTML内に同梱 | 34行、3713行 | [18.0.14](https://github.com/markedjs/marked/releases) | 更新推奨。処理量の改善を含む |
| DOMPurify | 3.4.12 | プレビュー、図、エクスポート、Word変換のサニタイズ。本体に同梱し、Word用iframeではCDNから別途読み込み | 116行、3650行、6198行、8085行 | [3.4.17](https://github.com/cure53/DOMPurify/releases) | 早期更新推奨。同梱版とWord用の両方を更新 |
| Mammoth | 1.12.0 | DOCX→HTML。Wordインポート時にCDNから読み込み | 8065行、8084行 | [1.13.0](https://github.com/mwilliamson/mammoth.js/blob/1.13.0/package.json) | 優先更新。少なくとも1.12.3の修正を含む版へ |
| Turndown | 7.2.4 | サニタイズ済みHTML→Markdown。Word用iframeでCDNから読み込み | 8068行、8086行 | [7.2.4](https://github.com/mixmark-io/turndown/releases) | 現状維持可能。監視継続 |
| KaTeX | 0.17.0 | 数式表示。プレビュー、Viewer、印刷で使用。JS/CSSをCDNから必要時に読み込み | 5987行、6117行、8956行、11523行 | [0.19.0](https://github.com/KaTeX/KaTeX/releases) | 更新推奨。少なくとも0.18.2以上 |
| Mermaid | 11.12.2 | 図のプレビュー、Viewer用SVG生成等。CDNから必要時に読み込み | 5994行、6185行、6213行、8881行 | [12.1.0](https://github.com/mermaid-js/mermaid/releases/tag/mermaid%4012.1.0) | 優先更新。確認した脆弱性の修正版は11.16.1。12系は互換性確認が必要 |
| encoding-japanese | 2.0.0 | 文字コード変換ライブラリーを起動時にCDNから読み込み。ただし本実装内にAPI呼び出しを確認できない | 121行 | [2.4.0](https://github.com/polygonplanet/encoding.js/releases) | 不要なら削除。必要なら通常の保守更新 |
| Typo.js / typo-js | 1.2.3 | 英語スペルチェック。JSとen_US辞書をCDNから読み込み | 122行、7006行、7009行、7099行 | [1.3.2](https://www.npmjs.com/package/typo-js) | 通常の保守更新。今回確認した範囲で緊急更新の公開根拠は確認できず |

Typo.jsの最新版はnpm公式掲載情報の検索結果で確認した。npmページ本体は403応答となり、変更内容の全件確認はできていない。

## エクスポート機能の依存関係

独立したHTML/PDF/暗号化用ライブラリーを使う構成ではない。

| 機能 | 実装で使うもの | 実装箇所 |
|---|---|---|
| 通常のHTMLエクスポート | Marked、DOMPurify、自作HTML生成 | 11460行付近 |
| Viewer形式 | Marked、DOMPurify。数式があればKaTeX。Mermaid図は書き出し時にSVG化してサニタイズ | 8881行以降 |
| Standalone App形式 | エディタのHTMLを複製して生成。エディタの同梱コードと外部依存を引き継ぐ | 9000行付近以降 |
| パスワード保護 | ブラウザー標準Web Crypto API。AES-GCM 256ビット、PBKDF2-SHA-256、310,000反復 | 4177行、9551行以降 |
| ダウンロード保存 | 標準のBlob、URL.createObjectURL、a.download | 10120行 |
| 印刷・ブラウザーからのPDF保存 | HTML生成と標準のwindow.print | 11472行以降、11690行 |

したがって、この実装でjsPDF、html2canvas、FileSaver、CryptoJSを更新する必要はない。これらの直接利用は確認されなかった。ブラウザー標準APIには、このアプリで固定する独立したパッケージ版はない。

Google FontsのZen Kaku Gothic New、JetBrains Mono、Noto Serif JPも外部取得するが、上表のJavaScriptライブラリーとは別の資源で、URLに固定バージョンはない（124〜125行）。

## 更新判断の根拠

### Mammoth：最優先

公式変更履歴には、1.12.2のプロトタイプ汚染修正と1.12.3の過剰な正規表現バックトラッキングによるDoS修正が記載されている。使用中の1.12.0はこれらの修正より前である。[公式変更履歴](https://github.com/mwilliamson/mammoth.js/blob/master/NEWS)

このアプリでは、DOCXを`arrayBuffer`としてブラウザー内で処理し、`sandbox="allow-scripts"`のiframeに隔離している。HTML生成後のサニタイズもある。これらは有効だが、パーサー内で起きるCPU・メモリー消費を、変換後のサニタイズで防ぐことはできない。10MiBの入力上限はZIP展開後のサイズ上限でもない。

60秒のタイムアウトは実装されているものの、iframeは専用Workerではなく、同期処理で実行スレッドが占有された場合に確実に中断できる設計とはいえない。パース部分を停止可能なWorker等へ分離し、展開量にも制限を設けることを検討する。

1.12.1にはWindowsのCLI出力先に関する修正もあるが、本アプリはCLIの`--output-dir`を使わないため、このファイル書き出し問題をそのまま本アプリの影響として扱わない。更新先は1.13.0を候補とし、DOCX変換の回帰確認を行う。

### Mermaid：最優先

11.12.2は次の公開アドバイザリーの対象範囲に含まれる。

| 問題 | 修正版 | 本アプリでの考察 |
|---|---|---|
| XYチャートの無限ループ・メモリー消費（GHSA-2v8p-3f2j-5mp7） | 11.16.1 | 短い入力でも成立し得るため、50,000文字・20図の制限だけでは防げない。[公式情報](https://github.com/mermaid-js/mermaid/security/advisories/GHSA-2v8p-3f2j-5mp7) |
| Architecture図のプロトタイプ汚染（GHSA-3rrr-jr9j-h3q3） | 11.16.1 | 描画時に共有オブジェクトの挙動が変わる。SVG生成後のDOMPurifyでは元に戻せない。[公式情報](https://github.com/mermaid-js/mermaid/security/advisories/GHSA-3rrr-jr9j-h3q3) |
| 図の外側へのCSS注入（GHSA-6x64-9x62-f2gx） | 11.16.1 | DOM配置や設定に依存する。本アプリは図専用の要素を使うため緩和され得るが、設定の保護範囲も確認が必要。[公式情報](https://github.com/mermaid-js/mermaid/security/advisories/GHSA-6x64-9x62-f2gx) |

`securityLevel: 'strict'`、`htmlLabels: false`、生成SVGの再サニタイズは良い対策だが、処理停止やプロトタイプ汚染まで防ぐものではない。ここでいうプロトタイプ汚染はJavaScriptオブジェクトの共通の継承元への書き込みであり、この問題単独で任意コード実行を確認したという意味ではない。

SVGのサニタイズ設定は`style`属性を禁止している一方、`style`要素は明示的な禁止対象ではない。Mermaidの`secure`設定にも`themeCSS`、`fontFamily`、`altFontFamily`が含まれていない。図の見た目を維持しながら設定を固定するか、隔離する方針を検討する。

11.16.1は上記問題の修正下限であり、全間接依存も含めた安全保証ではない。最新版12.1.0のリリースには間接依存の脆弱なlodash-esを取り除く更新も記載されているため、長期的には最新系列への移行を検証する。[12.1.0リリース](https://github.com/mermaid-js/mermaid/releases/tag/mermaid%4012.1.0)

### KaTeX：条件付き脆弱性への対応として更新

GHSA-238p-pmpm-9mq7は0.11.0以上0.18.2未満が対象で、0.18.2で修正されている。他のコードによってプロトタイプが既に汚染されている場合、信頼設定や内部設定の解釈に影響が出る問題である。KaTeX自体が汚染を起こすという内容ではない。[公式アドバイザリー](https://github.com/KaTeX/KaTeX/security/advisories/GHSA-238p-pmpm-9mq7)

本アプリは`trust: false`、`maxExpand: 1000`、`maxSize: 100`を明示しているため、単に継承された`trust`値を使う経路は緩和される。ただし、同じページでプロトタイプ汚染対象版のMermaidも動き、KaTeXの生成結果は`render()`で直接DOMへ挿入される。複合利用を考えると更新が妥当である。Mermaidと組み合わせた実際の攻撃成立は今回検証していない。

0.19.0を候補とするが、JS・CSS・フォントの版を揃え、SRIハッシュを更新し、数式のプレビュー、Viewer、印刷、既存CSSとの互換性を確認する。0.19.0にはstrictの挙動変更がある。[公式リリース](https://github.com/KaTeX/KaTeX/releases)

### DOMPurify：防御の中心として早期更新

3.4.12は、`IN_PLACE`と要素を削除するフックを組み合わせたときのXSS問題（GHSA-55q2-fjhq-7xh7、3.4.13修正）の対象版である。[公式アドバイザリー](https://github.com/cure53/DOMPurify/security/advisories/GHSA-55q2-fjhq-7xh7)

ただし、本アプリの直接呼び出しは文字列入力で、`IN_PLACE`を有効にしていない。直近のshadow rootとテンプレート式の問題に必要な`SAFE_FOR_TEMPLATES`や、XHTMLモードの問題に必要な`PARSER_MEDIA_TYPE: 'application/xhtml+xml'`も設定していない。SVGで`RETURN_DOM_FRAGMENT`を使うことだけで、これらの発生条件が成立するわけではない。[shadow rootの条件](https://github.com/cure53/DOMPurify/security/advisories/GHSA-cg2g-xh64-v4q7)、[XHTMLモードの条件](https://github.com/cure53/DOMPurify/security/advisories/GHSA-c6gr-qvv4-5v3f)

したがって「現時点で本アプリにXSSが成立する」とは断定しない。一方、3.4.17までには複数の安全性強化があり、HTMLの取り込み・表示・書き出し全体がこのライブラリーに依存するため、3.4.17へ早期更新する。本体同梱とWord用CDN参照の二箇所を揃える。[公式リリース](https://github.com/cure53/DOMPurify/releases)

### Marked：可用性と保守の観点から更新

18.0.13には参照リンク検索のO(n²)処理を避ける修正があり、18.0.14までにパース処理の修正が追加されている。外部文書で画面が重くなるリスクを減らすため、18.0.14への更新を推奨する。この修正を、確認していないCVEとして扱うことはしない。[公式リリース](https://github.com/markedjs/marked/releases)

現状でもMarkedの出力をDOMPurifyに渡しており、更新後もこの順序を維持する。脚注、複数行インライン、見出し、数式・図の置換処理に独自拡張があるため、互換性確認が必要である。

### Turndown、Typo.js、encoding-japanese

Turndownは確認できた最新版7.2.4を使用している。Word変換の前後にサニタイズがある構成を維持し、今回の調査では追加の更新は不要と判断する。[公式リリース](https://github.com/mixmark-io/turndown/releases)

Typo.jsは1.3.2への通常更新を候補とする。現在のJSと辞書はすべて1.2.3に固定されており、更新時は辞書の配置・互換性と候補表示の応答性を確認する。公開アドバイザリーが見つからないことは安全性の保証ではない。[npm掲載情報](https://www.npmjs.com/package/typo-js)、[公式セキュリティページ](https://github.com/cfinke/Typo.js/security)

encoding-japaneseは読み込みタグ以外の呼び出しを確認できず、現在の入出力はUTF-8を使っている。不要なスクリプトであれば、最新版への交換より読み込み削除の方が外部依存を減らせる。利用予定がある場合は2.4.0を候補とする。公式の変更履歴は文字変換の修正等を中心としており、本調査では緊急のセキュリティ更新根拠を確認していない。[公式リリース](https://github.com/polygonplanet/encoding.js/releases)

## バージョン更新と併せて改善する事項

1. **CDN資源の完全性検証を揃える。** KaTeXのJS/CSSにはSRIがあるが、Mammoth、Word用DOMPurify、Turndown、Mermaid、encoding-japanese、Typo.jsのスクリプトにはない。固定版URLだけでは配信内容の改変検出にならず、`crossorigin`も完全性検証ではない。SRIの追加か、検証したファイルの同梱を検討する。Typo.js辞書のfetchには別途ハッシュ検証または同梱が必要。
2. **重い変換処理の停止を可能にする。** Wordのiframe隔離とタイムアウトは維持しつつ、DOCXパースを停止できる実行環境、展開後サイズ、図・数式の計算量制限を検討する。
3. **依存一覧を機械で確認できる形にする。** 現在はpackage.jsonやlockfileがなく、同梱コードやHTML内のCDN参照を一般的なnpm監査だけで拾えない。直接依存の版・配布URL・ハッシュと、配布物に含まれる間接依存を台帳化し、リリース時に確認する。
4. **書き出し済みファイルを区別する。** 過去に配布したStandalone Appには古い同梱コードやCDN参照が残る。元のエディタを更新しても、それらは自動で置き換わらない。数式付きViewerもKaTeXの固定URLを含むため、必要に応じて再書き出しする。

本体CSPは外部スクリプトをjsDelivrに制限しているが、`unsafe-inline`も許可している。サニタイズの代替にはならず、将来的にはインラインスクリプトのハッシュ化や外部ファイル化と併せて見直す余地がある。

## 調査の限界と更新時の確認範囲

上表はアプリが直接読み込む8種類の一覧である。Mammothの配布物にはさらにJSZipやXML関連処理などが含まれ得る。上流1.12.0のpackage.jsonには`jszip: ^3.7.1`、`@xmldom/xmldom: ^0.8.6`等の依存範囲があるが、これを実際のCDNバンドルに含まれる確定版と取り違えてはいけない。[上流の依存宣言](https://github.com/mwilliamson/mammoth.js/blob/1.12.0/package.json)

今回はCDN配布物の全間接依存の確定、同梱コードと上流配布物のバイト単位の照合、SRI値の正当性検証、悪意ある文書を使った再現試験は実施していない。npmレジストリーへの直接照会は環境のネットワーク制約で失敗したため、公開リリース・アドバイザリー・公式掲載情報を使用した。

更新時は、Markdown独自拡張、DOCXの見出し・表・リンク、数式の画面・Viewer・印刷、Mermaidの各図種とエクスポート、サニタイズ失敗時に表示を止める動作、オフライン時のフォールバックを確認する。今回の成果物は調査資料のみであり、これらの更新後テストが済んだという意味ではない。
