# Changelog

All notable changes to this project will be documented in this file.

## 2026-05-18 - Hotfix

### Fixed

- Fixed an issue where `File > New` or `File > Close` could leave the previous file handle active.
- After creating or closing a document, `Save` now prompts for a new save location instead of overwriting the previously opened file.
- This prevents accidental overwriting of the previously opened file after starting a new or closed document.

## Earlier versions

- Initial public version.