# 🚀 MD//WORKS v1.6.1 —Standalone Markdown Editor for AI-assisted writing![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
**Languages:**  [🇯🇵 日本語](README-ja.md) or [🇺🇸 English](README.md) 
**100% Local, yet AI-Ready:** MD//WORKS is entirely local and **cloud-free**. Keep your data fully secure on your device, while still leveraging your browser's native **AI sidebars** for **seamless assistance** without copy-pasting. Of course, it also offers full support for local LLMs.

<img src="./docs/images/rayoutE1_9.jpg" alt="rayoutE1_9.jpg" width="100%"><br>
**Deep Edit Mode - Your editing, remembered:** Not just what you wrote, but what you deleted. Batches typing every 5 seconds, tracks large deletions, pastes, replace-all, and formatting with heading context. 500 events max, memory-only, never sent, Base64 omitted. The DEEP badge glows quietly while it listens.  You can also leverage AI to analyze your editing process from an objective, third-person perspective (Planned for v1.6.1 or later).
For more information about AI integration, see ["11. AI-Assisted Writing" in the manual](https://github.com/HKJPN/markdown-editor/blob/main/docs/manual.md#11-ai-assisted-writing-).
<img src="./docs/images/deepEditModeE.jpg" alt="deepEditModeE.jpg" width="100%"><br>

Choose a theme based on your working environment: **Midnight** for focused editing, **Paper** for reviewing, and **Warm** for long writing sessions.
<img src="./docs/images/theame.jpg" alt="theame.jpg" width="100%"><br>




# Live Demo

Try it instantly in your browser. 👉 **https://hkjpn.github.io/markdown-editor/**

- [🚀 Quick Start ](docs/quick-start.md)
- [📖 User Manual (General) ](docs/manual.md)
- [📱 User Manual for iPad](docs/ipad-manual.md).
- [🎓Scientific Writing Guide](docs/scientific-writing.md)
- [🛡️Security / Privacy](SECURITY.md)


You are also free to host MD//WORKS on your own website under the MIT License. However, for security and performance reasons, we strongly recommend keeping your deployment updated to the latest version.

---

## 🎉 What's New in v1.6.1 

### 🧠 Deep Edit Mode
See not only what you wrote, but how you got there. Deep Edit Mode records deleted ideas, revisions, and trial-and-error as a separate chronological log, helping you reflect on your writing and thinking process.

### 📁 Improved File Opening
Password-protected Apps can now be reopened directly from **File > Open**. All supported MD//WORKS files can be opened from the same menu, while standalone Apps continue to support self-extraction.

### 📝 From Markdown to Word
Added a new manual section explaining how to use `.md` files in Microsoft Word, including copying formatted content from Preview and converting documents to `.docx` with Pandoc.

---

## ✨ Upcoming Features

* **Math Equations**: We plan to support complex mathematical formulas used in fields like mathematics and engineering.
* **PWA Support**: We plan to support Progressive Web Apps (PWA), allowing you to install the editor directly on your device for a faster, seamless, native-app-like experience.

## 💡 **Handy Companion Tools**
We've also provided two standalone command-line tools that instantly compile large batches of images into a single file. This significantly streamlines your MD//WORKS workflow when creating image-heavy reports or handouts.

- [images2md.py](https://github.com/HKJPN/images2md/tree/main): Generates **a standard Markdown file**.
- [images2rhtml.py](https://github.com/HKJPN/images2rhtml/tree/main):  Generates **a restricted HTML file** (disables printing and text copying in standard browsers, but remains fully editable directly within MD//WORKS).

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

### 🧠 Deep Edit Mode

See not only what you wrote, but how your ideas developed along the way.

* **UI**: Start recording from the **DEEP** button or **View › Deep Edit Mode**
* Records edits as a chronological log stored separately from the document
* Captures continuous writing, deleted passages, paste operations, Replace All, Undo, and Redo
* Also records document-opening actions, Word imports, and history restoration
* Keeps removed ideas and revisions available for later review
* Logs remain in memory only and are not included in saved or exported documents

Ideal for reviewing revisions, understanding your writing process, and using browser-based AI to analyze how a document evolved—not just the final result.

---

### 📝 Full Transparency for Full Security

MD//WORKS is fully open-source—no exceptions. Although it runs in the browser as an HTML app, your documents are processed locally on your device. Editing, saving, exporting, and encryption are performed in the browser, and your document data is not uploaded to a server. 
- No installation.
- No account.
- No analytics, no tracking. 

**For Privacy-Conscious Users:**

* **When leveraging AI:** If you use built-in browser AI assistants (like Gemini in Chrome or Brave Leo) for proofreading or summarization, your text is processed according to the respective provider's privacy policies. When handling highly sensitive or confidential information, please ensure the AI side panel is closed or disable the browser's page-context access.
* **For maximum privacy:** By using browsers without native AI integrations such as **Firefox**, MD//WORKS acts as a 100% secure, offline-capable editor, completely eliminating any risk of unintended external data sharing. See ["11. AI-Assisted Writing" in the manual](docs/manual.md#11-ai-assisted-writing) for more detail.

---

### 📦 Flexible Export: Total Control Over Sharing & Protection
MD//WORKS lets you export your document as a single HTML file tailored to your needs. Share, collaborate, and archive seamlessly across any environment.

- 👀 **Viewer Formats** (3 Types): Built for Reading
Includes a standard outline-enabled viewer, a Restricted mode to block copying/printing, and a Password-Protected mode for confidential data. Ideal for safe document distribution.

- ✍️ **Standalone App** Formats (2 Types): Built for Editing
Packages your text and the editor into one file. Recipients can instantly pick up where you left off right in their browser, with zero installation (Password protection available).

>💡 Pro Tip
>Use "Restricted Viewer" for read-only handouts. Want the recipient to collaborate? Send the "Standalone App." Choose the perfect format for any situation.

| Format | Editable in <br>MD//WORKS | Password <br>Protection | Copy / Print |
| --- | --- | --- | --- |
| Viewer | 🚫 No | 🔓 None | 🖨️ Allowed |
| Restricted Viewer | ✔ Yes | Viewing: 🔓 Not required/<br>Restoring: 🔐 Required | 🛡️ Restricted |
| Password-protected Viewer | ✔ Yes | 🔐 Yes | 🖨️🔓 <br>Allowed after unlocking |
| Standalone App | ✔ Yes | 🔓 None | 🖨️ Allowed |
| Password-protected App | ✔ Yes | 🔐 Yes | 🖨️🔓 <br>Allowed after unlocking |




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

### 📤 Print-Ready PDF Export
Ensures clean and stable output with custom print-optimized CSS.

---

### 🌍 Language Support

MD//WORKS automatically detects your browser language and switches the interface accordingly.

- English UI
- Japanese UI
- Automatic release note display after updates

---

## 💻 Supported Environments

- **Browsers:** Works on all modern browsers (Chrome, Edge, Brave, Firefox, Safari, etc.).
- **Zero Installation:** Just open the HTML file in your browser and start typing.
- **Cross-Device:** Fully supported on desktops and tested for compatibility on tablets including the iPad.
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

## 🧭 Differences from Other Editors

**MD//WORKS is not intended to replace IDEs, knowledge bases, or collaborative editing tools.** Instead, MD//WORKS targets a completely different area. It is a lightweight, portable Markdown editor dedicated to writing, protecting, restoring, and easily carrying your work.


| Feature | VS Code | Obsidian | Typora | MD//WORKS |
| :--- | :---: | :---: | :---: | :---: |
| Combines editor and document into one | - | - | - | ✅ |
| **Restrict** editing, printing, and copying <br>in Viewer mode | - |  -  | - | ✅ |
| **Encrypted file export** | via Extension | via Plugin | - | ✅ |
| Draft restoration / Safety during writing | Partial | Partial | - | ✅ |
| **AI-assisted writing** | via Extension | via Plugin | - (Copy/paste) | 🤝 <br>**Browser Integration** \* <br>No extensions, No plugins needed|
| Usability offline / in restricted environments | Partial | ✅ | ✅ | ✅ |
| Variety of plugins / extensions | Extensive | Rich | Limited | - |

\* **AI-assisted writing:** Integrates with your browser's standard AI sidebar. You can share selected text or the entire document with the AI without any copy-pasting. AI sharing can also be restricted via browser settings.

### The MD//WORKS Philosophy

VS Code, Obsidian, and Typora are all excellent tools, but each serves a different primary purpose:

* **VS Code** is a powerful development environment.
* **Obsidian** is a knowledge base designed for connecting and managing information.
* **Typora** is a highly refined Markdown writing app.
* **MD//WORKS** is designed with a different philosophy. It is a Markdown editor that offers **AI-assisted writing** while allowing you to **protect** your work and **carry it as a single file** containing both the text and the editing environment.


**The goal is not to add more complexity, but to make important writing easier to move, archive, reopen, and protect — without depending on a cloud service.**

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

**MIT License**
