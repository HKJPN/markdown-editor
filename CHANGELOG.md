# Changelog

All notable changes to this project will be documented in this file.

## 2026-06-26 - v1.5.7 - -Hotfix v1.5.7candidate
- Fixed regex replacement so escape sequences such as `\n` and `\t` are interpreted correctly.

## 2026-06-23 - v1.5.7candidate - Viewer Export and Export UI Improvements

- Added Viewer, Restricted Viewer, and Password-protected Viewer exports.
- Organized export formats in a dedicated Export dialog.
- Consolidated the legacy plain HTML export into Viewer.
- Improved the menu-bar latest-version notification.


## 2026-06-17 -v1.5.6- TOC and Editing Stability Improvements

- Added Table of Contents (TOC) generation.
- Improved paste handling stability for large text.
- Adjusted menu layout for iPad Safari fullscreen mode.
- Added sup and sub tag support in markdown preview.
- Added Scientific Writing Guide and iPad manual.

## 2026-06-05 -v1.5.5- Writing Comfort and File Handling Improvements

- Invisible characters can now be shown.
- Tab editing has been improved.
- Fullscreen  mode has been added.  
- File handling has been improved.
- Storage protection and safety have been improved. 

## 2026-05-25 -v1.5.4 - Usability and Navigation Improvements

- **Centralized Esc key handling:** Unified the behavior of the Escape key for a more consistent user experience.
- **Help menu & Documentation modal:** Added a new Help menu and an in-app documentation modal for easier access to guides.
- **'Select All' in Preview:** You can now use `Ctrl+A` / `Cmd+A` within the preview screen.
- **Improved navigation accuracy:** Enhanced the precision of automatic scrolling to search results and outline jumps.

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
