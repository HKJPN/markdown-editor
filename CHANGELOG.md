# Changelog

All notable changes to this project will be documented in this file.

## 2026-05-19 -Hotfix v1.5.3.2

- Fixed an issue of PDF printing.

## 2026-05-19 -Hotfix v1.5.3.1

Updated the external libraries used for Markdown preview, HTML sanitization, and Word import.

- Marked: 12.0.1 → 18.0.3
- DOMPurify: 3.0.9 → 3.4.5
- Mammoth: 1.8.0 → 1.11.0
- Turndown: 7.1.3 → 7.2.4

Also fixed the CDN path for the Marked 18 UMD bundle.

## 2026-05-18 -v1.5.3

### v1.5.3 - Save as Private App

- You can now save the encrypted HTML documents using save as Privete App.
- The exported app opens directly in a browser, with no installation or server required.
- AES-GCM 256-bit encryption
- PBKDF2 key derivation (310,000 iterations)

## 2026-05-18 - Hotfix v1.5.2

### Fixed

- Fixed an issue where `File > New` or `File > Close` could leave the previous file handle active.
- After creating or closing a document, `Save` now prompts for a new save location instead of overwriting the previously opened file.
- This prevents accidental overwriting of the previously opened file after starting a new or closed document.

## Earlier versions

- Initial public version.
