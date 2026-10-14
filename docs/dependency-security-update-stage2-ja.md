# MD//WORKS 依存ライブラリのセキュリティ・保守更新（第2段階）結果

実施日：2026年10月13日（日本時間）。APP_VERSIONは依頼どおり1.6.6のまま。実装・自動検証は完了し、公開判定は **CONDITIONAL**。

## A. Audit Summary

### 比較基準

第1段階完了時のindex.htmlを新しい基準として保存した。SHA-256は `0D952F31F75A9FDF4738331A6290A6A3A9725BF0F3A6AAE5484893A27A38F4C6`。今回の開始時点でこの内容と一致した。

単一HTML構成で、本作業フォルダーにGitリポジトリーやpackage.jsonはない。第1段階の調査・結果報告と、既存の93件の自動試験、19項目のブラウザ試験を確認した。前段階の比較テストはv1.6.6更新前を前提にしていたため、今回の比較基準と変更範囲へ更新した。

| 依存 | 開始時の状態 | 判断・更新方針 |
|---|---|---|
| Marked | 18.0.7 UMDを同梱 | 指定18.0.14の公式UMDへ交換。独自拡張とDOMPurify処理を維持 |
| Typo.js | 1.2.3、本体とen_US辞書をCDNから取得 | 指定1.3.2へ更新。本体と辞書の実ファイル構成を確認 |
| encoding-japanese | 2.0.0のscriptタグだけ存在 | API利用なし。削除 |
| Turndown | 7.2.4、CDN生成のmin版 | 版を維持。公式UMDファイルにパスを変更してSRI適用 |
| 第1段階の4種 | Mammoth 1.13.0 / Mermaid 11.16.1 / DOMPurify 3.4.17 / KaTeX 0.19.0 | 版と同梱DOMPurifyを維持。必要なCDNスクリプトへSRIを追加 |

Markedは見出し・脚注・上下付き文字・数式・Mermaidの独自処理、複数行編集のlexer、目次・プレビュー・Viewer・印刷に関係する。新しいUMDでも既存のmarkedグローバル／Markedコンストラクターが動作した。

Typo.jsはcheck()/suggest()、英語抽出・修正候補・置換・ON/OFFを既存UIで使う。辞書はUTF-8 Hunspell形式で、既存のfetch方式と `new Typo('en_US', aff, dic)` を維持できた。失敗・成功後にisDictLoadingが解除されない既存箇所を、再試行のために修正した。

encoding-japaneseはOpen/Save、Word、各種インポート・エクスポート、Viewer、Standalone App、動的呼び出しを検索・確認しても利用がなかった。実際の文字処理はFile/Blob、File.text()、TextEncoder/TextDecoder等で行う。UTF-8の日本語ファイルを使った入出力試験を実施した。

外部ライブラリの配信元は既存のjsDelivrに維持した。CSP・iframe sandbox・サニタイズ設定・入力制限・UI・テーマを変更していない。

## B. Changes

### アプリ本体

| 修正箇所 | 更新後index.htmlの行番号 | 内容 |
|---|---|---|
| Marked同梱 | 34〜115 | 18.0.14の公式lib/marked.umd.jsへ交換。ライセンス・著作権表示を維持 |
| 外部script | 127 | encoding-japaneseのタグを削除。Typo.js 1.3.2に更新しintegrityを追加 |
| Mermaid定数／ローダー | 6001 / 6151 | SHA-384 SRIを宣言し、動的script.integrityへ設定 |
| 辞書取得 | 7008〜7029 | fetch(url, { integrity })、HTTPエラー確認、1.3.2 URLと辞書SHA-384、finallyで読み込みフラグ解除 |
| Word iframe | 8099〜8101 | Mammoth／DOMPurify／Turndownにintegrityとcrossorigin="anonymous"を追加 |

アプリ差分は61行追加・50行削除。大部分はMarked配布物交換である。第1段階のHTMLに対する厳密な変更許可リスト比較で、上記以外のアプリ差分がないことを確認した。

Marked配布物は46,891 bytes、SHA-256は `21568877a938d2c4e7d74e27f18e60da96bb73a68809610ca39216e1efebae62`。公式npm tarball内のファイルとCDNの元バイトが一致し、同梱内容は改行表現を正規化してその公式ソースと一致する。ライブラリ内部の独自修正はない。

Turndownの旧`lib/turndown.browser.umd.min.js`はnpm tarballに存在しなかった。推測で同一配布物と扱わず、公式アーカイブ内の`lib/turndown.browser.umd.js`を確認して変更した。同じ7.2.4・UMD API・jsDelivrであり、Wordの変換設定は変更していない。公式配布物とのバイト照合を満たすためのパス対応である。

### SRIと辞書検証

対象5スクリプトすべてにSRIを適用した。KaTeX JS/CSSの既存SRIは維持した。fetchのintegrityオプションにより、辞書もデコード・Typoへの引き渡し前にブラウザーが元バイトを検証する。Web Cryptoへ依存する新しい文字処理や、検証なしのフォールバックは導入していない。

| 資源 | SHA-384 integrity |
|---|---|
| Typo.js 1.3.2 typo.js | `sha384-iKTwAGlX9kbsTpsre+dQC0+i60Pajk7wt8RXoMxVPC9LmcZ4qpBF+eP6qcHxNGpK` |
| en_US.aff | `sha384-/P5B0jVP7QXgvynOMNiP5a+OFRqvn+JJmiYZmq4o1Y4vc93N3/goz8yyFz8iISRi` |
| en_US.dic | `sha384-iCAD1eau2Nvskji81XhOyqgkNzbmO85f6XiGRz1mOJCWedk2VPpjUevyBesBQpcO` |
| Mermaid 11.16.1 | `sha384-aBQXj4hK6Jm05i7aQAsUV3bLdSUrHX1BGYfMB0166TtWt/RRaw+h0Eelme9OCOvy` |
| Mammoth 1.13.0 | `sha384-8NWE3bZDrmRI4IePMoQaEoLhAQ1MmRMJkdNgnGiHRFanTqsFKr0TmK6aSZvFJ/PO` |
| DOMPurify 3.4.17 iframe版 | `sha384-P0JNneQf81HOl9VwNXK76cQ9VMD6Nfsnepxb0cCOg8+UzEdzgPHAPV4wVQrvYQSx` |
| Turndown 7.2.4公式UMD | `sha384-yfnQWJ22yiVEUfFDQH3SNYUI9Rl/zaLGe81+2ky2ohcZtz/854n4bJS9ZufXp2NR` |

配布URL・元バイトSHA-256・ライセンス・確認日・未対応事項は `docs/dependency-inventory.md` に記録した。7直接依存、10配布ファイル（JS/CSS・辞書）を記載し、間接依存の確定版は「未確認」とした。

### テスト・資料

- `tests/dependency-security.test.cjs`：既存5試験を維持・拡張。新しい版・SRI・全配布バイト・Marked同梱・台帳・第1段階基準の厳密差分を検証。既存の安全設定のアサーションを維持した。
- `tests/dependency-security.browser.cjs`：第1段階19項目を維持。stage2モードで33項目へ拡張。編集UI、辞書、SRI不一致、file利用、保護付きViewer等を追加した。
- `tests/fetch-dependency-assets.py`：検証専用。npm tarball SHA-512、バージョン、CDNバイト一致、SHA-384／SHA-256計算を行う。アプリへのnpm管理導入ではない。
- `tests/dependency-assets.json`：検証専用の固定版・URL・ハッシュ・npm照合記録。
- `docs/dependency-inventory.md`：依存台帳。
- 本報告書。README、CHANGELOG、起動時リリースノート、APP_VERSIONは変更していない。

更新後index.html SHA-256：`9C191307E040214671A4DA5F681DBF905C94A97417BA155B46CE5DBF9BD682F3`

## C. Verification Results

環境：同梱Node.js／Python／Playwright、Microsoft Edge 155.0.4283.45（ヘッドレス）、ローカルHTTPとfile://、一時ブラウザープロファイル。結果JSON・取得物・比較HTML・生成HTML／PNG／PDFを次に保存した：

`C:\Users\kuwata\AppData\Local\Temp\mdworks-security-stage2-20261013`

### 最終結果

| 状態 | 試験 | 結果・試験の限界 |
|---|---|---|
| PASS | npm／CDN照合 | 7指定版のpackage.json・tarball integrity。10配布ファイルのバイト一致、SHA-384／SHA-256 |
| PASS | 構文・参照・版・CSP | 実行インラインscriptの構文、追加JSのnode --check、静的・動的URL、SRI、旧実行版の不在。CSP・sandboxは基準と同じ |
| PASS | 同梱ライブラリ | Marked 18.0.14とDOMPurify 3.4.17の公式ソース一致。MarkedのグローバルAPI・独自拡張が動作 |
| PASS | 台帳・変更範囲 | 台帳のURL・SRI・SHA-256が検証記録と一致。アプリは許可した対象箇所以外に差分なし |
| PASS | 第1段階の93件 | 既存88件＋拡張した静的5件。PASS 93、FAIL 0、SKIP 0 |
| PASS | 第1段階の19項目 | 更新後構成でPASS 19。Word、主要9図種、数式、HTML/SVGサニタイズ、出力、フォールバック・復旧等 |
| PASS | 第2段階実CDN総合 | PASS 33、FAIL 0。第1段階19項目を含む最終stage2実行 |
| PASS | Markdown比較 | 7代表文書のサニタイズ後HTMLが基準と一致。日本語・見出し・段落・表・リンク・画像・4種のタスク表記・脚注・ネスト・引用・コード・独自記法・図／数式ソース・XSSを含む |
| PASS | 正当な解析差異 | 素のmarked.parseで数値文字参照がA/Bへ復号される差異を確認。サニタイズ後の代表出力は一致。setext見出し・空のネスト引用後の例も比較JSONへ保存 |
| PASS | タスク・検索置換UI | -／*タスクのチェック切替、ネイティブUndo/Redo、Ctrl+Fから置換タブ、置換とUndo、見出しアウトライン |
| PASS | 既存Edge UI試験 | 複数行装飾、各UI経路、選択・スクロール・IMEイベント、Undo/Redo、プレビュー、AutoSave、History復元、ファイル往復 |
| PASS | 長文Markdown | 74,000文字・2,000見出し。最終実CDN試験時は基準約1,923ms、更新後約1,966ms。正しい見出し数と基準比2倍未満を確認。厳密な性能ベンチマークではない |
| PASS | Typo.js UI | hello／Hello／world、helo誤記、hello候補生成とクリック適用、日本語混在、ON/OFF、辞書再ロード |
| PASS | 長文スペルチェック | 2,000行の正常文書、誤検知0、最終試験の同期判定約149ms。候補大量生成や病的入力のDoS試験ではない |
| PASS | 辞書失敗・復旧 | aff／dicそれぞれ改ざん・CDN遮断・503応答の6ケースでdictReadyにならない。フラグ解除とON/OFFによる正常再取得を確認 |
| PASS | 新SRI5種の不一致 | Typo／Mermaidは配布バイト改変を拒否。Word3種は実CDNの正しいバイトに不一致integrityを指定してブラウザーの拒否・変換失敗・iframe解放を確認 |
| PASS | CDN失敗 | ホストのTypo／Mermaidリクエスト遮断、Word3種の実CDN404で安全な失敗。エディタの安全なMarkdown表示は継続 |
| PASS | KaTeX SRI | 既存JS/CSSの正しい取得、各配布バイト改変の拒否、LaTeX保持、検証付き再取得による復旧 |
| PASS | UTF-8日本語・file利用 | file://で辞書integrityが動作。日本語ファイルOpen・編集・ダウンロード保存・再Openが一致。Encodingグローバルなしで成功 |
| PASS | 出力6種 | 通常HTML、通常Viewer、制限付きViewer、パスワード付きViewerの生成・開封、Standalone App、印刷HTML／PDFを生成して実際に開いた。図・数式・フォント・XSS非実行・旧参照なしを確認 |
| PASS | 印刷メディア・PDF | EdgeのPDF出力成功。保護付きViewerの印刷禁止は既存仕様として維持。スクリーンショットを確認 |
| PASS | git diff --check | 比較専用の一時Gitリポジトリーで基準を登録し、アプリ・変更テスト・追加資料を確認。終了コード0 |
| NOT RUN | Firefox／Chrome | Playwright対応FirefoxとChrome実行ファイルが利用できない。Chromium系はEdgeで実行済み |
| NOT RUN | OSネイティブ保存・印刷ダイアログ／実プリンター | ヘッドレスでは操作できない。file保存試験は試験ページ内だけshowSaveFilePickerを無効にして既存ダウンロード経路を使用。アプリコードの保存方式は変更していない |
| NOT RUN | 全実在文書・全図設定・全数式 | 合成DOCXと代表Markdown・数式・図による試験。任意の文書の表示互換性を保証する試験ではない |
| NOT RUN | 危険なDoS／全上流攻撃PoC | 実施しない。病的入力・大量展開・Architecture固有PoC等の網羅的攻撃再現ではない |

通常HTML出力は既存どおり安全なMarkdown由来HTMLで、図・数式の専用描画を追加していない。描画済み図・数式はViewer・印刷を使用する。DOCXの表は既存Turndown設定でセル本文へ変換され、GFM表への機能追加はしていない。

Wordの60秒タイムアウト分岐は、無応答の小さなiframeと試験内だけ短縮したタイマーで検証した。CPU占有時の確実な中断を保証する試験ではない。Mermaidの400ms debounceは定数とコード不変性を確認している。

### 試験の修正と初期FAIL

初期の追加試験では、アプリに実装されていないCtrl+H経路、長文の絶対15秒基準、Word iframeリクエストの遮断方法、OS保存ダイアログ前提でFAILが出た。試験条件と原因を確認し、実装済みの検索→置換UI、基準版との性能比較、ブラウザーの実SRI不一致／実CDN404、既存のダウンロード保存経路で再検証した。最終33項目はすべて成功した。これらのFAILを理由としてアプリのUI・保存方式・安全設定を変更していない。

このEdge／Playwright構成ではopaqueなsandbox srcdocのCDN通信がルーティングAPIに捕捉されなかった。したがって「キャッシュ配布物を返す」試験でもWord iframeは実CDNを利用し得る。WordのSRI拒否は取得バイトの改変ではなくintegrityメタデータを不一致にする方法で確認した。完全なネットワーク遮断環境でWordライブラリを再配信できることの試験とは区別する。

### 実行コマンド

```powershell
& 'C:\Users\kuwata\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' tests/fetch-dependency-assets.py "$env:TEMP\mdworks-security-stage2-20261013"

$env:NODE_PATH = 'C:\Users\kuwata\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
$env:MDWORKS_ASSET_DIR = "$env:TEMP\mdworks-security-stage2-20261013"
$env:MDWORKS_BASELINE = "$env:MDWORKS_ASSET_DIR\index.before-stage2.html"
$env:MDWORKS_TEST_OUTPUT = $env:MDWORKS_ASSET_DIR
node --test --test-isolation=none tests/dependency-security.test.cjs tests/multiline-inline.test.cjs tests/android-save.test.cjs
node --check tests/dependency-security.test.cjs
node --check tests/dependency-security.browser.cjs
node tests/dependency-security.browser.cjs all
node tests/dependency-security.browser.cjs extra
node tests/multiline-inline.browser.cjs

# 実CDNの最終33項目：新しい実行でMDWORKS_ASSET_DIRを未設定にする
Remove-Item Env:MDWORKS_ASSET_DIR
$env:MDWORKS_TEST_OUTPUT = "$env:TEMP\mdworks-security-stage2-20261013\live-cdn"
node tests/dependency-security.browser.cjs stage2

# 元フォルダーに.gitがないため、比較専用リポジトリーで実行
git -C "$env:TEMP\mdworks-security-stage2-20261013\diff-check" -c core.autocrlf=false -c core.whitespace=cr-at-eol diff --check
```

最初の配布物取得は旧Turndown minパスが公式アーカイブにないため停止した。公式ファイル構成を調べ、検証スクリプト・アプリとも公式UMDパスへ修正して取得・照合を完了した。版を推測で代替していない。

### 公式情報

- [Marked 18.0.14リリース](https://github.com/markedjs/marked/releases/tag/v18.0.14)：文字参照・リスト・引用等の解析修正。[18.0.13](https://github.com/markedjs/marked/releases/tag/v18.0.13)の参照リンク検索改善も含む指定版を使用した。
- [Typo.js公式リポジトリー](https://github.com/cfinke/Typo.js)の公開APIと、[公式リリース一覧](https://github.com/cfinke/Typo.js/releases)を確認。GitHub Releaseはないため、1.3.2の存在・ファイル構成・ライセンスは公式npm配布物から検証した。取得したnpmメタデータは試験用一時フォルダーに保存した。
- 第1段階の4ライブラリの公式修正版との照合結果は維持している。今回のSRIはCDNバイトの改変検出を補強するもので、ライブラリ内部の安全性や全間接依存の無欠陥を保証するものではない。

## D. Remaining Risks

- Firefoxでの実機確認、OSネイティブ保存・印刷画面、代表文書の字体・位置・改ページは未確認。Edge HTTP／file、通常・保護付きViewerの自動試験は成功している。
- 通常のCtrl+H置換ショートカットはヘルプに表記されているが、現行イベントハンドラーにはない既存問題を発見した。今回の更新で修正せず、Ctrl+F→置換タブ／メニュー経由で動作を確認した。依存更新による回帰ではない。
- Word iframeの同期CPU占有、圧縮DOCXの展開量制限、Workerへの分離は今回対象外。60秒タイムアウトを強制中断と同一視しない。
- SRI未対応の対象ライブラリスクリプトは残っていない。辞書もSHA-384で保護した。Google Fonts等の固定版でない外部スタイル資源、全フォントハッシュ台帳、CSPのunsafe-inline見直しは別課題。
- 全間接依存の確定・監査、危険な攻撃の網羅的再現、全ブラウザーのfile利用は未実施。
- 過去に生成したHTML／Viewer／Standalone Appは自動更新されない。必要なファイルは更新済みエディタから再出力する。

## E. Release Readiness

**CONDITIONAL：実装・実行可能な自動検証は完了。重大な未解決の回帰やSRI未対応は確認されていないが、公開前の実機確認が残る。**

Marked 18.0.14、Typo.js 1.3.2、未使用encoding-japaneseの削除、対象5スクリプトのSRI、辞書integrity、依存台帳を実装した。第1段階の4版と安全設定を維持し、93件の自動試験・最終33項目の実CDNブラウザ試験が成功した。

APP_VERSION・README・CHANGELOG・起動時リリースノートは依頼どおり未更新。v1.6.7のリリース表記更新と公開は、別途の指示を待つ。

公開前に人間が確認する項目（優先順）：

1. FirefoxでHTTP／fileから起動し、Word、英語辞書・候補適用、Mermaid9図種、インライン／ブロック数式を確認する。CDN失敗からの再試行も確認する。
2. 普段使う日本語DOCX・Markdownで、脚注・タスク・ネスト・表・目次、数式位置・図の表示を確認する。OS保存ダイアログ、印刷画面、PDFの改ページを確認する。
3. 通常／制限付き／パスワード付きViewerとStandalone Appをダウンロードして開く。必要な既存出力ファイルを再生成する。
4. 上記結果を確認した後、別指示でAPP_VERSION・リリース資料をv1.6.7に更新し、最終HTMLのSHA-256を再計算する。
