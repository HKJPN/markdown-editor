# Security Policy
This document is provided in English first, followed by a Japanese translation.
## Supported Versions 

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| < Latest | ❌ No             |

Only the latest version receives security updates.

## Security model
MD//WORKS is designed as a local-first, single-file Markdown editor.
It does not require a server, account registration, or cloud storage, and document processing is intended to run locally in the user's browser. The project uses a small number of third-party JavaScript libraries for Markdown rendering, DOCX import, HTML sanitization, and export features. These dependencies are version-pinned and listed in this repository.

MD//WORKS is designed to minimize unnecessary network communication and server-  risk. However, it is an open-source personal project and has not undergone a formal third-party security audit.Dependency security updates are reviewed and applied on a best-effort basis. Users should independently verify whether the current version meets their own security requirements.

Users handling highly sensitive, confidential, regulated, or legally privileged documents should review the source code, dependency list, and security posture before use.

## Reporting a Vulnerability

If you find issues or potential weaknesses, please report them via GitHub Issues or contact us privately if needed. We will do our best to address it as an open-source community effort.

---

# セキュリティポリシー
英語版と日本語版の内容に相違がある場合は、英語版を優先します。
If there is any inconsistency between the English and Japanese versions, the English version takes precedence.  
## サポート対象バージョン

| バージョン | サポート状況 |
| ---------- | ------------ |
| 最新版 | ✅ 対象 |
| 最新版未満 | ❌ 対象外 |

セキュリティ更新は、原則として最新版のみを対象とします。

## セキュリティモデル

MD//WORKSは、ローカル環境での利用を前提とした単一HTML型のMarkdownエディタです。  
サーバー、アカウント登録、クラウドストレージを必要とせず、文書処理は利用者のブラウザ内で完結することを意図して設計されています。

本プロジェクトでは、Markdownのレンダリング、DOCXファイルのインポート、HTMLのサニタイズ、エクスポート機能のために、少数のサードパーティ製JavaScriptライブラリを使用しています。これらの依存ライブラリはバージョンを固定し、本リポジトリ内に一覧として記載しています。

MD//WORKSは、不要なネットワーク通信やサーバー側のリスクをできる限り抑えることを目指して設計されています。ただし、本ソフトウェアは個人が管理するオープンソースプロジェクトであり、正式な第三者セキュリティ監査は受けていません。

依存ライブラリのセキュリティ更新は、可能な範囲で確認し、必要に応じて適用します。利用者は、現在のバージョンが自身のセキュリティ要件を満たしているかを、必要に応じて個別に確認してください。

高度な機密情報、規制対象となる情報、法的秘匿特権の対象となる文書などを扱う場合は、利用前にソースコード、依存ライブラリ一覧、および本ソフトウェアのセキュリティ上の特性を確認してください。


## 脆弱性の報告

もし問題や潜在的な脆弱性を発見された場合は、GitHub Issues で報告をお願いします。公開での報告が適切でない内容については、必要に応じて非公開での報告をお願いします。オープンソースコミュニティの取り組みとして、コミュニティからの協力も得ながら、できる限り対応いたします。
