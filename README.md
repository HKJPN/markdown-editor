# 🚀 MD//WORKS v1.5.5 —Standalone Markdown Editor for AI-assisted writing
**Languages:**  [🇯🇵 日本語](README-ja.md) or [🇺🇸 English](README.md) 
<img width="869" height="720" alt="1_5_5rayoute" src="https://github.com/user-attachments/assets/5200e876-6cfc-4071-8a3e-d92a96c4ef2d" />

**MD//WORKS is the only editor that transforms your document into a secure, portable application. No installation. No cloud. All you need is a browser, yet everything runs entirely locally. Unlike tools like TiddlyWiki or ZIP archives, your document can be opened and edited anywhere effortlessly. 

💡 **Supercharge Your Writing with Browser AI:** Seamlessly connect with Chrome Gemini or Brave Leo from the sidebar for instant **proofreading and translation**.  Utilizing Brave Leo unlocks **multi-tab context processing** (Windows & iPad), letting you synthesize data from multiple store pages or reference PDFs at once—something even MS Word can't do. For more information, see ["11. AI-Assisted Writing" in the manual](docs/manual.md#11-ai-assisted-writing).

# 🚀 Live Demo

👉 **https://hkjpn.github.io/markdown-editor/**

Try it instantly in your browser.  
- [Quick Start ](docs/quick-start.md)
- [User Manual ](docs/manual.md)
- [Security / Privacy](SECURITY.md)

---
## ✨ What’s New in v1.5.4

* **Centralized Esc key handling:** Unified the behavior of the Escape key for a more consistent user experience.
* **Help menu & Documentation modal:** Added a new Help menu and an in-app documentation modal for easier access to guides.
* **'Select All' in Preview:** You can now use `Ctrl+A` / `Cmd+A` within the preview screen.
* **Rich text copying:** Added support for copying rich text directly from the preview.
* **Improved navigation accuracy:** Enhanced the precision of automatic scrolling to search results and outline jumps.

### **🔒 Release File Hashes (Checksums)**
To ensure security and file integrity, all official releases starting from v1.5.4 include **SHA-256 hash values** in the release notes. You can verify that your downloaded file has not been tampered with by using standard OS commands (such as `Get-FileHash` in Windows PowerShell).

## ✨ Upcoming Features

* **Invisible character display:** Add display options for full-width spaces, tabs, trailing spaces, and line breaks.
* **Advanced Tab controls:** Add Tab input, multi-line indentation, and `Shift+Tab` outdent support.
* **Zen Mode & Fullscreen:** Add fullscreen controls and Zen Mode for a more focused writing experience.
* **UI improvements:** Improve title-bar button icons and active-state visual feedback.
* **Security hardening:** Add minor security updates, including CSP improvements, safer Word import messaging, and SVG data URL restrictions.
* **Storage clarity:** Clarify that Auto Save is encrypted to protect against plain-text local storage extraction, while Private Storage remains available for additional passphrase-based protection.
* **Expanded help:** Expand the Keyboard Shortcuts documentation to include Tab operations, document navigation, and text selection shortcuts.


---

# Features

### 📝 Word (.docx) Import

Bring Word documents directly into your Markdown workflow.

- **UI**: Accessible via **File › Import Word**.
- Imports headings, paragraphs, lists, and simple tables
- Converts Word content into editable Markdown
- Handles complex tables and shapes as readable placeholders
- Prioritizes **content fidelity over visual mimicry**

Ideal for turning Word drafts, manuals, reports, and meeting notes into clean Markdown text.

---

### 📝 Full Transparency for Full Security

MD//WORKS is fully open-source—no exceptions. Although it runs in the browser as an HTML app, your documents are processed locally on your device. Editing, saving, exporting, and encryption are performed in the browser, and your document data is not uploaded to a server.

- No installation.
- No account.
- No analytics, no tracking. 

Don’t take our word for it—review the code yourself. If you find issues or potential weaknesses, please report them via Issues or contact us privately if needed.

**For Privacy-Conscious Users:**

* **When leveraging AI:** If you use built-in browser AI assistants (like Gemini in Chrome or Copilot in Edge) for proofreading or summarization, your text is processed according to the respective provider's privacy policies. When handling highly sensitive or confidential information, please ensure the AI side panel is closed or disable the browser's page-context access.
* **For maximum privacy:** By using browsers without native AI integrations, such as **Firefox** or **Brave**, MD//WORKS acts as a 100% secure, offline-capable editor, completely eliminating any risk of unintended external data sharing.

---

### 📦 Save as App — Your Document, Your Editor, One File

The signature feature of MD//WORKS.

With **Save as App**, you can export your current document together with the full editor into a single `.app.html` file.

That file can be opened later in a browser — with your document already inside.

- One self-contained HTML file
- Works offline
- Portable via USB, email, or cloud storage
- No installation required
- Uses isolated autosave storage to avoid conflicts with the main editor

This makes MD//WORKS especially useful for internal sharing, field work, workshops, secure environments, and long-term document archiving.

---

### ✍️ Advanced Markdown Editing

- GitHub Flavored Markdown support
- One-click insertion for headings, bold, italic, lists, task lists, code blocks, links, tables, and horizontal rules
- **Bulk task toggling** across selected lines
- Clean monospace editor optimized for structured writing
- Visual highlights for tasks, search results, and spelling suggestions

It keeps Markdown visible and editable, while making common formatting tasks faster.

---

### 👀 Live Preview

Preview your Markdown instantly as you write.

- Real-time rendering powered by `marked`
- Sanitized output with `DOMPurify`
- Styled headings, tables, code blocks, quotes, and task lists
- Scroll-synchronized editor and preview panes
- Adjustable split view

Perfect for checking structure, readability, and final output while drafting.

---

### 🧭 Outline Navigation

Long documents are easier to manage with the built-in outline panel.

- **UI**: Open or close via **View › Outline**.
- Supports headings from `#` to `####`
- Jump instantly to any section
- Updates automatically while editing
- Useful for reports, manuals, articles, and release notes

---

### 🛟 Edit History & Recovery

Accidental edits happen. MD//WORKS helps you recover.

- **UI**: Accessible via **File › History (Recent Files)**.
- Stores up to 10 recent document states in browser storage
- Captures opened files, saved files, and pre-close text states
- Restore previous versions from the History menu
- Autosave and recovery prompt help prevent data loss

A lightweight safety net for everyday writing.

---

### 🧹 Markdown Formatter

Clean up messy Markdown with one click.

The built-in formatter helps keep documents consistent by:

- **UI**: Accessible via **Edit › Format Markdown**.
- Reducing excessive blank lines
- Adding missing spaces after heading markers
- Removing unnecessary trailing spaces
- Preserving valid Markdown line breaks

Useful when importing, pasting, or editing rough drafts.

---

### 🔍 Powerful Search & Replace

Find and revise text quickly, even in long documents.

- Find and replace
- Replace all
- Regular expression support
- Case-sensitive search
- Whole-word matching
- Automatically jumps to the nearest match from the cursor

A practical editing tool for writers who handle structured documents.

---

### 🔤 English Spell Check

MD//WORKS includes a lightweight English spell checker designed for Markdown documents.

- Inline spelling suggestions
- Ignores code, links, and Markdown formatting where possible
- Add words to a custom dictionary
- Ignore selected terms
- Background checking with visual wavy-line highlights

Best suited for English titles, abstracts, release notes, product copy, and bilingual documents.

---

### 🧘 Zen Mode

When you need to focus, enter Zen Mode.

- **UI**: Accessible via **View › Zen Mode**.
- Hides menus, toolbar, status bar, and preview
- Centers the editor
- Creates a distraction-free writing space
- Exit instantly with the `Esc` key

For drafting, thinking, and finishing.

---

### 📤 Export Options

MD//WORKS supports practical export formats for everyday use.

- Save as Markdown `.md`
- Export styled HTML
- Print or save as PDF
- Save as standalone `.app.html`

---

### 🌍 Language Support

MD//WORKS automatically detects your browser language and switches the interface accordingly.

- English UI
- Japanese UI
- Automatic release note display after updates

---

## 💻 Supported Environments

MD//WORKS runs in modern browsers such as Chrome, Edge, Firefox and Safari.

No installation required. Just open the HTML file and start writing.

---

## 🔒 Safety & Reliability

Built for local, reliable writing.

- Autosave with recovery prompt
- Unsaved-changes warning
- Content Security Policy enabled
- Sanitized preview rendering
- Standalone files use separated local storage

Your writing stays local unless you choose to export or share it.

---

## 🧭 How It Compares

**MD//WORKS is not trying to replace IDEs, knowledge bases, or collaborative writing platforms.**  
It occupies a different space: a focused, portable Markdown editor for people who want to write, protect, recover, and carry their work with minimal friction.

| Capability | VS Code | Obsidian | Typora | MD//WORKS |
|---|---:|---:|---:|---:|
| True portability / single-file app | ❌ | △ | ❌ | ✅ |
| Editor + document bundled together | ❌ | △ | ❌ | ✅ |
| Encrypted single-file export | ❌ | ❌ | ❌ | ✅ |
| Local-only encryption / no server required | △ | △ | △ | ✅ |
| Draft recovery & writing safety | △ | △ | ❌ | ✅ |
| Distraction-free writing | △ | △ | ○ | ✅ |
| Offline / restricted-environment usability | △ | ○ | ○ | ✅ |
| Plugin & extension ecosystem | ✅✅✅ | ✅✅ | △ | ❌ |

### What Makes MD//WORKS Different

VS Code, Obsidian, and Typora are excellent tools, but they are built around different assumptions.

- **VS Code** is a powerful development environment.
- **Obsidian** is a knowledge base and note-linking system.
- **Typora** is a polished Markdown writing app.
- **MD//WORKS** is designed around a different idea:  
  **write, protect, and carry your work as a single self-contained file.**

With **Save as App** and **Private App export**, MD//WORKS turns a Markdown document into a portable HTML application.  
The goal is not to add more complexity, but to make important writing easier to move, archive, reopen, and protect — without depending on a cloud service.
---

## 🚫 What MD//WORKS Is Not

MD//WORKS is not:

- A plugin-based platform
- A knowledge graph system
- A code IDE
- A cloud collaboration editor
- A replacement for full publishing or layout software

These are deliberate design choices.

MD//WORKS focuses on being lightweight, portable, and safe for everyday writing — rather than becoming a large, highly customizable platform.

---

## ✅ Who MD//WORKS Is For

MD//WORKS is designed for:

- Writers drafting articles, technical documents, manuals, or manuscripts
- Engineers writing specs, RFCs, release notes, or design documents
- Researchers and business users converting Word drafts into clean Markdown
- Anyone who values portability, offline access, and draft recovery
- Users working in restricted environments where installation or cloud tools are difficult

It is especially useful when you want to open one file, write immediately, preview your work, and save the entire writing environment together with the document.

---

## ⚠️ Who May Prefer Another Tool

MD//WORKS may not be the best fit for users who need:

- Heavy customization through plugins
- Large multi-document knowledge bases
- Backlink graphs or personal knowledge management
- IDE-style development workflows
- Real-time collaborative editing
- Advanced desktop publishing features

For those workflows, tools like VS Code, Obsidian, Typora, or collaborative document platforms may be better suited.

MD//WORKS is intentionally simpler:  
**a focused Markdown writing workspace that can travel with your document.**
---

## 📄 License

MIT License
