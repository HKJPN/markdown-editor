# 🚀 MD//WORKS v1.5.2 — Standalone Markdown Editor
**Languages:**  [🇯🇵 日本語](README-ja.md) or [🇺🇸 English](README.md) 
<img width="854" height="720" alt="1_5_2の画面cut" src="https://github.com/user-attachments/assets/17e1489b-cd58-42da-ab69-13293177e271" />


## **MD//WORKS** is the only editor that transforms your document into secure, portable application. No installation. No cloud. All you need is a browser but everything runs locally.
Write Markdown, preview it live, import Word documents, recover previous drafts, and even save the entire editor together with your document as a single portable HTML app.

With its unique **Save as App** feature, MD//WORKS lets you carry not just your text — but your complete writing environment — anywhere.

---
## ✨ What’s New in v1.5.2

We’re introducing a set of thoughtfully designed color themes, allowing you to tailor your workspace to your environment, mood, and workflow.

#### Available Themes

*   **🌙 Midnight (Default)**  
    A refined dark theme designed for focus and clarity—perfect for developers and long writing sessions.

*   **📄 Paper**  
    A clean, bright interface that mimics real paper—ideal for drafting, reviewing, and print-oriented writing.

*   **☕ Warm**  
    A gentle sepia tone that reduces eye strain—crafted for extended sessions and late-night creativity.

***

### ⚡ Effortless Switching

*   Access themes instantly from the **\[View] menu → Theme section**
*   Switch with a single click—no disruptions to your workflow

***

### 🧠 Smart Persistence

Your preferred theme is automatically saved in your browser, so every time you return, MD//WORKS looks exactly the way you like it.

Even better, this design is **fully isolated**—your preferences will **never interfere with standalone exported files**, ensuring portability and consistency across environments.

***

## **Upcoming feature**

The next version of MD//WORKS will include **Private App export**,  
enabling encrypted single-file HTML documents using AES-GCM and local-only processing.

- AES-GCM 256-bit encryption 
- PBKDF2 key derivation (310,000 iterations) 
- Fully local encryption / no server required

**A new way to write, protect, and carry your work — all in one file.**

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
