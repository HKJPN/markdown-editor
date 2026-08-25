# MD//WORKS Quick Start Guide
## 1. Introduction

MD//WORKS is a browser-based Markdown editor. Create, preview, save, and export Markdown documents as HTML or PDF files. You can also package the document and the editor together as a single self-contained HTML file, and use browser-based AI tools for writing support.

## 2. Getting Started
No installation needed. Get started immediately with the live demo:
👉 https://hkjpn.github.io/markdown-editor/

## 3. Basic Operations

### Create a New Document
You can create a new document from **File > New**.

### Open a File
You can open `.md`, `.txt`, `.markdown`, `.html`, or `.htm` files from **File > Open**. Supported Viewer and Standalone App HTML files are detected and restored automatically.

### Save
You can save your document as a Markdown file using **Save** or **Download**. The **Unsaved** indicator means that changes have not yet been written to a file; browser draft protection does not replace saving the `.md` file. If you cannot find a saved file, check your browser's Downloads folder.

### Preview
Click the **Preview button** to check how your Markdown will be rendered. LaTeX equations and Mermaid diagrams are also supported. Their renderers are loaded from an external CDN, so an internet connection is required the first time each renderer is used; if loading fails, the original source remains visible.

### Wrap Lines
Use **View > Wrap Lines** to switch between wrapped text and horizontal scrolling. Keep it on for regular writing, and turn it off when editing code, CSV, logs, or long Base64 lines.

### Deep Edit Mode
Use the **DEEP** button or **View > Deep Edit Mode** to record a temporary log of your editing process. Review it from **View > Deep Edit Log**. The on/off setting is retained for the next session, but the recorded log itself is cleared when the page is reloaded.

## 4. Editing Features

- Headings
- Automatic Table of Contents
- Bold and italic text
- Bullet lists
- Numbered lists
- Task lists
- Blockquotes
- Code blocks
- Tables
- Links and images
- Footnotes
- Superscript and subscript
- LaTeX equations
- Mermaid diagrams
- Wrap Lines

## 5. AI Writing Assistant
Use your browser's built-in AI for writing support, such as proofreading and clarifying text. Follow the steps below for your browser:

* **For Chrome:**
Log in to your Google account and click the **Ask Gemini** button.
* **For Brave:**
No login required. Simply click the **Leo** icon in your browser.

## 6. Importing Word Files

You can import `.docx` files and convert them into Markdown format.  
Some complex layouts may be simplified during conversion.

## 7. Standalone Save

Use **File > Export...** to choose Viewer, Restricted Viewer, Password-protected Viewer, Standalone App, or Password-protected App. Viewer formats are read-only in the browser; Standalone App formats include the editor and remain editable.

## 8. FAQ

### Do I need to install anything?
No. MD//WORKS runs in your browser.

### Is my data uploaded to the cloud?
No. All editing and saving operations are completed within your browser. Your documents are not uploaded to the cloud. By using browsers that prevent AI integrations, MD//WORKS acts as a 100% secure offline-capable editor. See ["12. AI-Assisted Writing" in the manual](https://github.com/HKJPN/markdown-editor/blob/main/docs/manual.md#for-strict-security-and-corporate-policies) for more detail.

### Which browsers are recommended?
MD//WORKS has been tested on Chrome, Brave, Firefox, Safari, and Edge. The editor automatically detects the browser environment and adjusts available features accordingly. For AI-assisted writing on desktop, Chrome and Brave are recommended. On iPad, the standard Safari browser does not support AI-assisted writing in this workflow, but this can be enabled by using Brave.

### Can I edit multiple documents at the same time?
Yes. In v1.6.3 and later, each browser tab is treated as an independent workspace. Draft text, file names, and work history are separated by tab. A duplicated tab inherits the history up to the point of duplication, and subsequent history is recorded independently.
