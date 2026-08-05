# Changelog

All notable changes to this project will be documented in this file.

## 2026-08-06 - v1.6.2　Official Release

## 2026-07-31 - v1.6.2　LaTeX Math Rendering

- Added Preview support for inline math using `$...$` and display math using `$$...$$` in LaTeX notation.
- Extended equation rendering to Viewer, Restricted Viewer, Password-protected Viewer, Standalone App, and Password-protected App.
- Bundled Marked 18.0.7 and DOMPurify 3.4.12 directly into the app, allowing regular Markdown Preview to remain available even when MD//WORKS is opened offline for the first time.
- When KaTeX cannot be loaded, equations remain visible in their original LaTeX notation and automatically switch to formatted math after the internet connection is restored.

## 2026-07-29 -v1.6.1  Official Release
- Added support for reopening Password-protected Apps directly from File > Open.

## 2026-07-24 - v1.6.1 Deep Edit Mode
- Added Deep Edit Mode to record and review the editing process as a chronological log.

## 2026-07-21 - v1.6.0.1  Security and dependency updates

Updated the external libraries used for Markdown preview, HTML sanitization, and Word import.

- Marked: 18.0.3 → 18.0.6
- DOMPurify: 3.4.5 → 3.4.12
- Mammoth: 1.11.0 → 1.12.0
- Turndown: 7.2.4（unchanged)


## 2026-07-16 - v1.6.0　Official Release
### Line Wrapping
* Toggle text wrapping via **[View] > [Wrap Lines]**.
* Support horizontal scrolling for long lines (e.g., code, logs).
* Auto-scrolls horizontally to show search results in No Wrap mode.

### "Replace All" Improvements
* Added a progress indicator for large bulk replacements.
* Improved processing speed and stability in long documents.
* Fixed a bug where `Ctrl+Z` (Undo) selected the entire text.


## 2026-07-10 - v1.5.9　Official Release
* Fixed update verification process.

## 2026-07-10 - v1.5.9 candidate- Stabilize search result scrolling#2

* **Stabilize search result scrolling** :Fixed search match scroll position when long lines exist like base64. 

## 2026-07-07 - v1.5.9 candidate- Stabilize search result scrolling

* **Stabilize search result scrolling** :Fixed intermittent failure to scroll the editor to the current search match. 

## 2026-07-07 - v1.5.9 candidate- Line Numbers and Print/PDF Improvements

* **Added optional logical line numbers in the editor.**  
* **Added a subtle current-line highlight.**  
* **Reorganized Print / Save as PDF into a modal.**  
* **Improved Preview printing stability.**  
* **Added a warning for Preview printing of HTML source.**  
* **Improved editor line-number alignment.**

## 2026-06-30 - v1.5.8 candidate - Academic Writing and Workflow Improvements

* **Added footnote support:** Use `[^1]` syntax for citations and notes.
* **3-step preview cycle:** Easily switch between split, focus, and editor-only views.
* **Expanded super/subscript support:** Added Pandoc-compatible syntax (`^superscript^` and `~subscript~`).
* **Update notifications:** Added a version status icon to the menu bar.
* **Blank new documents:** Removed initial sample text to let you start writing immediately.

## 2026-06-29 - v1.5.7.1
- Added a dedicated app icon.
- Added a new section on how to install the editor as an app in the manual.

## 2026-06-26 - v1.5.7 - Hotfix v1.5.7candidate
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
