# Changelog

All notable changes to this project will be documented in this file.
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
