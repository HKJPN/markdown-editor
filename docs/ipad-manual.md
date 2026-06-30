# MD//WORKS Editor User Manual (iPad)

MD//WORKS Editor is a Markdown editor that runs entirely from a single HTML file. It supports document creation, Markdown preview, file saving, exporting to HTML or PDF, saving as a standalone HTML file, and integration with browser-based AI tools. On iPad, setting the theme to "Midnight" makes handwriting input with Apple Pencil even more comfortable. Also, by utilizing the 'Files' app, file saving and sharing is as convenient as on a Mac or PC, and even safer due to the automatic backup history.

## Image Annotations Used in This Manual

This manual uses visual annotations to indicate important areas of the screen.  
Red frames indicate where to click or select, blue frames indicate information to check, and circled numbers indicate the order of operations.

## Shortcut Notation in This Manual

When a shortcut includes Shift, the Mac/iPad notation uses **⇧**.  
Example: **⌘⇧S**

Depending on your browser or iPadOS settings, some shortcuts may conflict with standard browser shortcuts. If a shortcut does not work as expected, use the menu bar instead.

---

## 1. Starting the App and Understanding the Screen Layout

### 1-1. Starting the App

No installation is required; you can launch the editor directly in your browser from the following site: 👉 [MD//WORKS Editor](https://hkjpn.github.io/markdown-editor/)
You can also start it by opening a locally saved HTML file in your browser. (However, launching from the website above is recommended to ensure you are using the latest features and fixes.)

After the file opens, you can begin typing Markdown in the editor area.  
If draft data from a previous session is available, you may be asked whether you want to restore it. Choose the restore option if you want to recover the previous draft.

> 💡 **iPad Tip:** Select "Add to Home Screen" from Safari's Share button (the square with an upward arrow) to add an icon to your home screen. From then on, you can launch it just like a regular app.<br><img src="./images/icon2.png" alt="Image:icon" width="90">

### 1-2. Supported Environments

MD//WORKS Editor works comfortably in the following iPad environments:

* **Supported Devices (Guideline)**
  * iPad (6th generation or later)
  * iPad Pro (1st generation or later)
  * iPad mini (5th generation or later)
  * *Compatible with iPad Air and other models with equivalent or better performance.*

* **Recommended Browsers**
  * Safari, Chrome, Brave, Firefox
  * *For security, please use an iPadOS with the latest security updates applied.*

* **Supported Accessories (Optional)**
  * Apple Pencil (or compatible stylus)
  * External Keyboard (Magic Keyboard, etc.)
  * Mouse or Trackpad
 
  > 💡 **Enhance your workflow with multiple browsers**: To create a desktop-like environment on your iPad, try installing another browser like Brave or Chrome in addition to Safari. Using Split View, you can use one browser for research while writing in the editor on the other, or effortlessly edit two different documents side-by-side.

### 1-3. Screen Layout

![Image: Overall screen layout with numbers ① to ⑥ indicating each area](<./images/overall-screen-layout.jpg>)

* **① Menu Bar**  
  Provides access to the File, Edit, View, Help, and Latest Version Notification menus. Use it to create new files, save, export, switch views, and access help.

* **② Title Bar**  
  Displays the app name, file name, save status, and primary action buttons.  
  You can quickly open files, save, toggle Preview, enter fullscreen mode, or enable Spell (EN).

* **③ Toolbar**  
  Lets you insert headings, bold text, italics, strikethrough, superscript, subscript, lists, numbered lists, tasks, quotes, code, links, and tables with a single click.  
  This is useful even if you are not familiar with Markdown syntax.

* **④ Editor Area**  
  The main area for writing and editing text in Markdown format.  
  Use this area to enter text, create headings and lists, and insert images.

* **⑤ Preview Area**  
  Renders your Markdown as formatted output.  
  You can edit on the left while checking the rendered result on the right. Toggle the preview using the **Preview** button on the title bar or **View > Preview**.

* **⑥ Status Bar**  
  Displays the current line count, word count, character count, Spell (EN) status, and storage protection mode.  
  Storage protection modes include **Auto encrypted** and passphrase-protected **Private Storage**.

> 💡 **When using Safari:** Tap the "aA" button on the left side of the browser's URL bar to adjust settings, such as hiding the toolbar for a wider screen or adjusting the page zoom level between 85% and 100%.

---

## 2. Creating and Opening Files

![Image: File menu showing New (Ctrl+N / ⌘N), Open (Ctrl+O / ⌘O), and Import Word (.docx)](<./images/FileNewOpenWord-en.jpg>)

### 2-1. Creating a New File

To create a new Markdown document, select **File > New (⌘N)** from the menu bar.

If you have unsaved work, save it before creating a new file.  
Depending on the current state of the document, you may also be prompted to save the current content to History before proceeding.

### 2-2. Opening an Existing File

To resume editing an existing Markdown file (`.md`, `.txt`, `.markdown`, etc.), follow these steps:

**① Action to open a file**
Open the file selection screen using either of the following methods:
* **From the menu bar:** Tap **File > Open** (Keyboard shortcut: `⌘O`)
* **From the title bar:** Tap the **Open** button

**② Select from the "Files" app**
The standard iPad "Files" app will open; select your target file from here.

> 💡 **Using Cloud Storage:** Because it integrates with the "Files" app, you can directly open files saved not only on your local iPad storage but also in cloud storage services like **iCloud Drive** or **OneDrive**.

### 2-3. Importing Word Files

You can import an existing Word document (`.docx`) and convert it to Markdown for editing.  
Select **File > Import Word (.docx)** from the menu bar, then choose the Word file you want to import.

The maximum file size is **10 MB**.

> **Note:** Word import is designed to convert document structure into Markdown. Detailed layout elements such as fonts, margins, complex charts, footnotes, and intricate tables may not be reproduced exactly. After importing, review the result in the Preview area.

> **Note:** Importing a Word file replaces the current draft. Save any important work with **File > Save (⌘S)** before importing.

---

## 3. Entering Text

Type your content in the **Editor Area**, located in the center or on the left side of the screen.  
MD//WORKS Editor uses Markdown syntax for document creation.

> 💡 **Moving the cursor with the software keyboard:** Long-press the "Space" key on the iPad keyboard to turn the entire keyboard into a trackpad. You can then slide your finger to move the cursor quickly and accurately.
>
> 💡 **Use the floating keyboard for more space**: Pinch in on the keyboard with two fingers to make it float. You can move it anywhere, which is ideal for keeping the editor visible or swipe-typing while holding an Apple Pencil.

### 3-1. Basic Input Example

Here is a basic Markdown example. Paste it into the editor to see how it renders in the preview pane.

```markdown
# Heading 1


This is the main text.

## Heading 2

- Bullet point
- Bullet point

You can also use **bold** and *italics*.
```

### 3-2. Inserting Images

You can insert small local images by dragging and dropping them into the editor area. On iPad, it is highly convenient to use the Split View feature to open the "Photos" or "Files" app on one half of the screen, then long-press an image and drag-and-drop it directly into the editor area.

When inserted, the image is embedded as data within the Markdown document.

To protect local storage capacity, image insertion is subject to the following limits:

| Item | Details |
| --- | --- |
| Maximum size | Under 300 KB |
| Supported formats | PNG, JPEG, WebP, etc. |
| Unsupported formats | SVG |

For security reasons, SVG images are not supported. Convert SVG files to PNG, JPEG, or WebP before inserting them.

> For bulk image imports on iPad, we've provided a separate command-line tool called [images2md.py](https://github.com/HKJPN/images2md/tree/main). Use it alongside MD//WORKS to quickly add multiple photos at once for presentations or reports. However, to maintain stable performance, please ensure the total file size does not exceed 20MB when re-importing into MD//WORKS.

### 3-3. Local Files and Relative Links
	
MD//WORKS Editor allows you to display and play local files such as images, videos, audio, and PDFs in the preview screen by specifying them with "relative paths." Images can also be embedded using Base64. This section explains how to display files using relative links and how to embed them.

> ⚠️ **Note**:On mobile operating systems like iPadOS, local relative links do not function due to strict OS security restrictions. Please use the direct embedding method instead.

#### 3-3-1. Opening the App from a Local Folder

Relative links will function correctly by placing the MD//WORKS HTML file, your Markdown file, and all related media files within the same folder structure.

**【Example of Folder Structure】**

```text
project/
├─ MD-WORKS.html (App Main File)
├─ manual.md
├─ images/
│  └─ figure01.png
├─ videos/
│  └─ demonstration.mp4
└─ audio/
   └─ explanation.mp3

```

**【Example of Markdown Syntax】**

```markdown
![Image Description](images/figure01.png)

[Open Video](videos/demonstration.mp4)

[Open Audio](audio/explanation.mp3)

<video controls src="videos/demonstration.mp4"></video>

```

With this configuration, you can smoothly view images, navigate through file links, and play compatible videos inline within the preview screen.


> 💡 **When utilizing a large amount of local media (images, videos, audio, PDFs):**
> This structure is highly recommended when you have a large number of media files or large file sizes, as it keeps MD//WORKS running lightweight and smoothly.



#### 3-3-2. Opening Local Files from MD//WORKS on the Web

When using the web version of MD//WORKS hosted on a website and selecting a Markdown file from your local computer to edit, images and other media files in the same folder will not be loaded automatically. This is a standard behavior driven by web browser security specifications (same-origin policy) and is not a malfunction of the application.

> 💡 **For a small number of images or small image sizes (up to a few tens of MBs in total):**
> Even if files cannot be automatically loaded from the folder, you can directly embed (drag and drop) images into your Markdown by referring to "3-2. Inserting Images". Images embedded in the created Markdown file have the advantage of being stably displayed inline in any environment.


### 3-4. Checking Input Status

The current line count, word count, and character count are shown in the status bar at the bottom of the screen.
![Image: statusbar](<./images/statusbar-ja.JPG>)

---

## 4. Formatting Text

You can format text either by typing Markdown syntax directly or by using the toolbar.

The toolbar makes it easy to insert headings, bold text, lists, quotes, code blocks, links, and tables without memorizing Markdown syntax.

### 4-1. Creating Headings

Use the **H1 / H2 / H3** buttons on the toolbar to create headings.

| Button | Description | Markdown example |
| --- | --- | --- |
| H1 | Heading 1 | `# Heading` |
| H2 | Heading 2 | `## Heading` |
| H3 | Heading 3 | `### Heading` |

### 4-2. Applying Bold, Italics, and Strikethrough

Select the text you want to format, then click the corresponding toolbar button.

| Button | Description | Markdown example |
| --- | --- | --- |
| B | Bold | `**Bold**` |
| I | Italics | `*Italics*` |
| S | Strikethrough | `~~Strikethrough~~` |

To format text as inline code, wrap it in backticks.

```markdown
Example1：<code>code</code>
Example2: `code`

```

### 4-3. Creating Lists, Tasks, and Quotes

You can create bulleted lists and checklists for task management. You can apply these settings by selecting one or multiple lines simultaneously and clicking the list, number, or task buttons on the toolbar. Clicking the button multiple times will reapply or clear the formatting. You can also create blockquotes.

```markdown

- Bullet point
- Bullet point

1. Numbered item
2. Numbered item

- [ ] Open task
- [x] Completed task

> Blockquote

```

### 4-4. Inserting Code, Links, and Tables

Code blocks and tables are especially useful when writing technical notes or specifications.

```markdown
| Item | Details |
|---|---|
| File format | Markdown |
| Extension | .md |

```
### 4-4. Superscript and Subscript
In life sciences, chemistry, and physics documents, subscripts and superscripts are frequently used for chemical formulas, charges, units, and exponents. Try pasting the following into the editor and checking how it looks in the preview panel:

```markdown
H<sub>2</sub>O, CO<sub>2</sub>, A<sub>260</sub>/A<sub>280</sub>
Ca<sup>2+</sup>, 10<sup>6</sup> cells, cm<sup>2</sup>

```

Subscripts and superscripts are not supported in standard Markdown. However, by using HTML tags as shown above, you can maintain compatibility and ensure they display correctly across most environments.

---

## 5. Checking Your Document with Preview

The Preview feature allows you to see exactly how the text entered in the editor will be displayed. While most Markdown syntax is simple, checking complex elements like tables with the Preview feature helps prevent formatting errors.

### 5-1. Toggling Preview

To show or hide Preview, use either of the following methods:

* Click the **Preview** button on the title bar.
* Select **View > Preview** from the menu bar.

When Preview is enabled, the preview pane appears on the right side of the screen.

Edits made in the Markdown editor on the left are reflected in the preview on the right.

### 5-2. What You Can Check in Preview

Preview lets you check the appearance of:

* Headings
* Bold, italics, and other text formatting
* Bulleted and numbered lists
* Checklists
* Tables
* Blockquotes
* Code blocks
* Images

The Preview area is for checking the final appearance of the document.

Text editing is performed in the Editor Area on the left.

---

## 6. Saving (Sharing) Files

You can save your document as a standard Markdown file.

### 6-1. Saving as a Markdown File

1. Tap the **Share** button on the title bar.
Alternatively, select **File > Share (⌘S)** from the menu bar.
2. Choose a destination folder in the "Files" app if prompted.
3. The document is saved as a Markdown file.

### 6-2. Renaming the File and Changing Folders (Save As)

Tap the file name field in the title bar to change the document name directly.
For example, you can change `untitled.md` to `meeting-note.md` or `manual-draft.md`. Afterwards, when you perform a save (share) operation, you can specify the destination folder in the iPad's "Files" app. This allows you to save it as a new file in any location, working similarly to "Save As" on a PC or Mac.

### 6-3. Checking Save Status

The title bar shows the current save status.

| Indicator | Meaning |
| --- | --- |
| Unsaved | The document contains unsaved changes |
| Saved | All changes have been saved |


If you edit the document after saving, the status changes to **Unsaved**.

Always check this status before closing the app or ending your work session.

### 6-4. Understanding Local Draft Protection

MD//WORKS Editor protects browser-stored drafts and history with **Auto encrypted** so they are not saved locally in plain text.

For stronger protection or to remove stored data, use the following features:

* **Private Storage**: Adds passphrase-based protection to drafts and history stored in the current browser.
* **Clear Local Data**: Available under **Storage Security** in the File menu. This removes all protected drafts and history stored in the browser.

> **Important:** Auto encrypted and Private Storage protect browser-based drafts and history. They do not replace saving your document as a file. To keep your work permanently, save it as a `.md` file with **File > Save (⌘S)**. **On iPad, if you move to another app or the Home screen while editing, the browser may release memory, which can cause the Auto encrypted restoration to fail.**

### 6-5. Private Storage vs. Private App Export

Both **Private Storage** and **Save as Private App** use passphrases, but they serve different purposes.

| Feature | Purpose | Protected data |
| --- | --- | --- |
| Private Storage | Protects drafts and history stored in the current browser | Local browser data |
| Save as Private App | Exports the current document as a passphrase-protected HTML file | The exported HTML file |

If you forget the passphrase, the protected data cannot be recovered.

For important documents, keep a separate Markdown backup (`.md`) in a secure location.

### 6-6. Restoring from History

Select **File > History** to view saved draft states.

Use this feature if you accidentally delete content or want to return to an earlier draft.

Running **Clear Local Data** also deletes History.

Do not rely on History as your only backup for important documents.

### 6-7. Saving behavior depends on your OS and browser

MD//WORKS Editor is designed to work across various environments. The behavior for saving and **overwriting files** varies depending on your device and browser combination.

| OS / Platform | Safari | Firefox | Brave | Chrome / Edge |
| ------------- | ------ | ------- | ----- | ------------- |
| **macOS** | Cannot overwrite directly.<br>Downloaded as a new file with a **numbered suffix**.  | Same as **Safari**.| Can be **manually overwritten** using "Save As" to any folder. | **Direct overwrite** is available after the initial save. |
| **iPadOS** | Cannot overwrite directly. Saved as a new file with a numbered suffix to **any folder** via the **Files app**. | | | |

> 💡 **iPad File Management Tip (Pseudo-Overwrite Save)**
> Due to iPad system constraints, "direct overwrite" is not possible. Instead, a new file with a numbered suffix (1, 2, etc.) is created each time you save. For PC-like file management, we recommend the following:
> 1. Create a **new folder in the "Files" app** with the exact same name as the file you intend to create.
> 2. Whenever you save (share) from the editor, always select that specific folder as your destination.
> 
> 
> By doing this, all your editing history naturally accumulates in chronological (numbered) order inside one folder. Not only is it easy to spot the latest version, but this functions as a powerful backup that allows you to revert to past versions at any time.

---

## 7. Exporting to HTML and PDF


In addition to saving as a standard Markdown file, MD//WORKS Editor allows you to export your documents in multiple formats depending on your needs.

### 7-1. Document Sharing and Protection via Flexible Export Features

MD//WORKS features the ability to export your documents as a single HTML file. This enables **secure document sharin**g, collaborative writing, and **long-term archiving** in a format tailored to your purpose, without relying on the recipient's system environment.

You can choose from the following two categories of export formats based on your needs:

**1. View-Only Formats (Viewer Formats: 3 types)**
Specialized for viewing documents. These formats are ideal for secure information disclosure, such as distributing presentation materials.

* **Standard:** A highly readable format featuring a built-in outline (table of contents).
* **Restricted:** Disables unauthorized text copying and printing operations.
* **Password-Protected:** Requires a password to view the document, ensuring the protection of sensitive information.

**2. Editable Formats (Standalone App Formats: 2 types)**
Packages the created document data and the application's editor features into a single output file.
Recipients of the file can instantly resume editing simply by opening it in a web browser—no dedicated software installation is required. Password protection is also available for this format.

**■ Recommended Formats by Use Case**

* **For presentation only:** We recommend the "Restricted Viewer Format" for distributing materials such as handouts.
* **For collaborative editing:** Use the "Standalone App Format" when requesting the recipient to add or edit content (Standalone Save).

<img src="images/exportmodalE.JPG" width="300" align="right">

| Format | Editable <br>in MD//WORKS | Password Protection | Copy / Print |
| --- | --- | --- | --- |
| Viewer | 🚫 No | 🔓 None | 🖨️ Allowed |
| Restricted Viewer | ✔ Yes | 🔐 Yes | 🛡️ Restricted |
| Password-protected <br>Viewer | ✔ Yes | 🔐 Yes | 🖨️🔓 <br>Allowed after <br>unlocking |
| Standalone App | ✔ Yes | 🔓 None | 🖨️ Allowed |
| Password-protected <br>App | ✔ Yes | 🔐 Yes | 🖨️🔓 <br>Allowed after <br>unlocking |

<br clear="all">

> For important documents intended for long-term storage, please ensure you keep the original Markdown file, the password, and the HTML file of the MD//WORKS version used as a precaution. For more details, please refer to 'Troubleshooting: Long-term access and compatibility of encrypted files'.


### 7-2. Printing or Saving as PDF

Select **File > Print / Save as PDF** to open the browser print dialog based on the rendered preview.  
Choose **Save as PDF** as the destination to generate a PDF file. 

When creating PDFs for submission or distribution, always open the exported PDF and check for layout issues, missing tables, image problems, or awkward page breaks.

> 💡 When exporting a PDF from the iPad's default browser, "Safari", browser specifications will cause a warning to appear asking for automatic printing permission, and the URL will be forcibly printed on the page. If you wish to create a plain PDF without headers and footers (URL text), please open this editor using a different browser app, such as Firefox or Brave, and perform the export.

---

## 8. Search, Replace, and Final Touches
MD//WORKS Editor provides tools to search and replace text strings across your document, as well as an automatic table of contents generator. These features are highly useful when editing long drafts, meeting minutes, specifications, or research notes.

### 8-1. Finding Text

To search within the document, select **Edit > Find (⌘F)** from the menu bar.

1. Click **Edit** on the menu bar.
2. Select **Find**.
3. Enter the text you want to find.
4. Matching text is highlighted in the editor.
5. Use the **↑ / ↓** buttons to move between results.

### 8-2. Replacing Text

To replace text, select **Edit > Replace (⌘H)**.

1. Select **Edit > Replace**.
2. Enter the text you want to find in the upper field.
3. Enter the replacement text in the lower field.
4. Click **Replace** to replace one match at a time.
5. Click **Replace All** to replace all matches at once.

### 8-3. Using Search Options

The Find and Replace panel provides the following options:

| Option | Description |
| --- | --- |
| RegExp | Enables regular expression search |
| Case Sensitive | Matches uppercase and lowercase letters exactly |
| Whole Word | Matches complete words only |

### 8-4. Formatting Markdown

Select **Edit > Format Markdown** to clean up excessive blank lines and trailing spaces. Running this before sharing or exporting helps keep the document clean.

### 8-5. Inserting a Table of Contents
Selecting **Edit > Insert Table of Contents** automatically generates a clickable, linked table of contents based on the headings (`#` to `###` / H1 to H3) in your document.

> 💡 **Tip: Choosing the Right Tool**
> For navigating your document while editing in MD//WORKS, we recommend using the **Outline View** on the right side of the screen.
> This "Insert Table of Contents" feature is designed for the **final polishing stage** of your document—such as right before handing a Markdown file over to someone else or exporting it to HTML/PDF.

### Usage and Important Notes
* **Inserting for the First Time**
  Place your cursor exactly where you want the table of contents to appear (e.g., right after the document title or before the main body text) and then run the command.

* **Updating the Table of Contents**
  If a table of contents previously inserted by MD//WORKS already exists in the document, running the command will **automatically locate and update the existing table of contents with the latest heading structure**, regardless of where your cursor is placed (it will not create a duplicate).

* **Manually Editing the Table of Contents**
  The generated table of contents is inserted as regular text, so you can freely modify it. However, please note that if you run **Edit > Insert Table of Contents** again to refresh it, **any manual edits you made within the table of contents will be overwritten and reset** based on the latest headings. If you need to make manual fine-tunings, it is highly recommended to do so at the very end, just before exporting.

> 📄 **Note on Links in Exported PDFs**
> When saving your document as a PDF, the table of contents can still function as in-page clickable links depending on your viewing environment (this has been verified using the standard "Microsoft Print to PDF" feature on Windows). Since behavior may vary depending on the browser or PDF viewer used, we recommend testing the links once before distributing your file.

---

## 9. Changing View Settings

The View menu lets you toggle Preview, Outline, Show Invisibles, Theme, Fullscreen, Spell (EN), and Zen Mode.

### 9-1. Toggling Preview

Select **View > Preview** to show or hide the preview pane. You can also use the **Preview** button on the title bar.

### 9-2. Using Outline

Select **View > Outline** to display a list of headings in the document. In long documents, click a heading to jump directly to that section.

### 9-3. Showing Invisible Characters

Select **View > Show Invisibles** to reveal characters that are normally hidden (like Full-width spaces, Tabs, Trailing spaces, and Line breaks).

### 9-4. Changing Themes

Change the interface theme from the **View** menu.

| Theme | Description |
| --- | --- |
| Midnight | Dark theme designed for focused editing/developers |
| Paper | Bright theme suitable for document writing and review |
| Warm | Soft sepia theme for long-form writing |

>💡 **Tip for Apple Pencil** : The dark "Midnight" theme works exceptionally well with the Scribble (handwriting input) feature. Since you can clearly see the exact moment the pen's stroke changes color on the screen, it is easy to grasp the timing of when your handwriting is converted into text, allowing you to write at a smooth and steady pace.

![Image: Theame](<./images/theame.jpg>)


### 9-5. Fullscreen Mode

Use **View > Fullscreen** or the fullscreen icon on the title bar to expand the browser to fullscreen mode.

> 💡 **iPadOS Fullscreen Specification**<br>
> Due to browser security restrictions on iPad (Safari, etc.), **fullscreen mode is automatically canceled if the software keyboard appears on the screen.**  We recommend tapping the "aA" button on the left side of the Safari browser's URL bar to hide the toolbar and maximize your screen space.
> 
> 

### 9-6. Using Spell (EN)

Enable the English spell checker with **View > Spell (EN)** or the **Spell (EN)** button on the title bar. This feature is intended for English text only and does not provide proofreading for Japanese or other languages.

### 9-7. Focusing with Zen Mode

Select **View > Zen Mode** to hide menus, toolbars, and panels, creating a distraction-free writing environment.

---

## 10. Help and Keyboard Shortcuts

The Help menu provides access to Quick Start, Keyboard Shortcuts, the GitHub page, and app information. Because the help content is embedded in the app, it can be viewed offline.

### 10-1. Quick Start

Select **Help > Quick Start** for a brief overview of MD//WORKS Editor.

### 10-2. Keyboard Shortcuts

Select **Help > Keyboard Shortcuts** to view available shortcuts.

| Action | Shortcut |
| --- | --- |
| New File | ⌘N |
| Open | ⌘O |
| Save | ⌘S |
| Save As | ⌘⇧S |
| Undo | ⌘Z |
| Redo | ⌘⇧Z |
| Cut | ⌘X |
| Copy | ⌘C |
| Paste | ⌘V |
| Select All | ⌘A |
| Find | ⌘F |
| Replace | ⌘H |
| Close the front panel or modal | ⌘ + . or Esc |

### 10-3. GitHub / About MD//WORKS

To view the source code or release notes, select **Help > GitHub**. To check the app version and core concepts, select **Help > About MD//WORKS**.

---

## 11. AI-Assisted Writing

MD//WORKS is not only a text and Markdown editor but can also be used alongside browser-based AI assistants to support your writing. While AI features are not built directly into the app, integrating tools like Leo in Brave Browser can drastically reduce the cognitive burden of routine proofreading, summarizing, and structure reviews.

### 11-1. Preparing to Use AI Writing Assistance

You can use various browser AI tools. For iPad users, we highly recommend using **Leo in Brave Browser**.

#### 11-1-1. Brave Browser: Using Leo

1. No login is required. Tap the AI chat icon in the "..." menu to open the Leo AI chat tab.
2. Leo will analyze the content you were editing in MD//WORKS. You can limit the scope of the AI's analysis simply by selecting the text with your cursor, without needing to copy and paste.

> **Feature:** You can use Leo without a Google account while maintaining privacy. It has been confirmed to perform on iPad and mobile environments with almost the same DOM parsing accuracy as the desktop versions, steadily reading text even through complex page structures.

### 11-2. Example Use Cases

For everyday proofreading, summarizing, terminology checks, and basic structural reviews, a lightweight model is often more practical than a high-end model. Switch to frontier models only when highly advanced analysis is required.

#### For Papers, Articles, and Technical Documents

* Review the entire document and list any inconsistent terminology or spelling variations that need fixing.
* Summarize the entire document in about 300 words.
* Review the specified section (e.g., `# Chapter 3`) for awkward phrasing and revise it into a more academic and objective tone.
* Check the specified section (e.g., `# Section 3-1`) for any English grammatical errors.
* Extract only the headings from the specified chapter.
* Regarding sections `# A` through `# D`, would it be clearer if `# C` came last?
* Review the order of the chapters and suggest a more readable structure.
* Organize my reference notes and verify if they align with the claims made in the main text.

#### For Simple Coding Support

* Create a regular expression pattern to batch-replace all half-width parentheses with full-width parentheses in this document.
* Convert the experimental process described in the specified section (e.g., `# Chapter 3`) into a Mermaid flowchart.
* Check the specified lines (e.g., `Lines 120-135`) or code block for any inconsistencies in the multilingual message `I18N`.
* Identify the cause and suggest a fix for the error that occurs when running the R code block at the specified lines (e.g., `# Line 3000`).
* Explain the processing logic of the specified JavaScript function so that even a beginner can understand it.
* Organize the following specifications as an implementation prompt to be passed to Codex.

 
### 11-3. Important Notes When Using Browser AI

When you use a browser-based AI assistant, the entire visible document or the selected area may be processed by the AI service. If you are working with confidential information or internal company documents, always check what information is being shared and how your browser manages AI access.

### 11-4. Differences Between Browser AI Assistants

The following comparison illustrates how different AI browsers interact with MD//WORKS across operating systems (Based on June 2026 data).

| Item | Copilot in Edge | Gemini in Chrome | Brave Browser (Leo) | Firefox AI controls |
| --- | --- | --- | --- | --- |
| **AI integration with MD//WORKS** | 🚫 Mainly copy-and-paste based | ✅ **Analyzes document structure / selection** | ✅ **Analyzes document structure** | 🚫 Mainly copy-and-paste based |
| **Real-time Context Awareness** | 🚫 **Limited** | ✅ **Full Real-time** | ⚠️ **Snapshot-based** | 🚫 **None** |
| **AI support on iPad** | 🚫 Not available | 🚫 Not available | **✅ Available** | 🚫 Not available |
| **Model selection** | 🚫 Not available | 🚫 Not available (Pro/Flash only) | **✅ Available** | **✅ Available** |
| **Security / privacy** | Best for MS 365 environments | Depends on Google Workspace settings | Minimizes data sharing | Block AI |
| **Recommended use** | Organizations utilizing **MS365** | Writing with **frontier models** | Proofreading, **mobile/iPad use**, model selection | Users who want **strict AI control** |

#### For users looking for smooth mobile integration

In our testing, **Leo in Brave Browser** provides the most seamless and effective experience for iPad users. Because it captures a snapshot of your document structure when opened, it is perfect for full-document proofreading, summarization, and consistency checks on your iPad.

---

## 12. Troubleshooting

This section covers common issues and how to resolve them.

### 12-1. Cannot Save Directly to the Cloud

**Cause**

MD//WORKS intentionally does not support direct cloud integration. This is a deliberate design choice to ensure the long-term safety, privacy, and reliability of your data:

* **Privacy:** All processing remains strictly within your browser. By not connecting to external servers, the risk of data leaks is eliminated.
* **Longevity:** Avoiding reliance on external cloud APIs prevents the application from breaking if those services suddenly change or shut down.
* **Reliability:** Official desktop sync apps are much more stable and less prone to file corruption from network errors compared to direct browser uploads.

**Workaround**

To sync your documents to the cloud, please save your files directly into your local cloud sync folder (such as OneDrive, Google Drive, iCloud, or Dropbox) on your device. Your cloud provider's desktop application will automatically and safely handle the synchronization.

### 12-2. Pressing the ⌘ + ↑ / ⌘ + ↓ keys does not move the cursor

In the editor, the Home/End equivalent keys are mapped to smoothly edit text. To move to the absolute beginning or end of the document on iPad, use:

* **⌘ + ↑** – Go to the beginning of the document
* **⌘ + ↓** – Go to the end of the document

### 12-3. Long-term access and compatibility of encrypted files

MD//WORKS uses widely adopted encryption methods and standard browser APIs. Encrypted files are therefore expected to remain accessible for the foreseeable future. However, permanent compatibility cannot be guaranteed because browser specifications, security requirements, operating systems, and device environments may change over time.

The single-file HTML edition of MD//WORKS does not require installation or continued access to a specific online service. The exact version of the application used to create an encrypted file can be stored as a local file.Keeping the corresponding MD//WORKS HTML file together with the encrypted document reduces the risk of future application updates affecting compatibility. Decryption is performed locally in the browser, so access does not depend on the continued operation of an external decryption server or cloud service.

For important long-term records, keep the following files and information together:

* The encrypted Viewer or App file
* The original Markdown file
* The MD//WORKS HTML file or release package used to create the encrypted file
* The version number of MD//WORKS
* The SHA-256 hash of the MD//WORKS file, when available
* A record of how and where the password is securely managed

Do not store the password in plain text in the same location as the encrypted file.

### 12-4. I saved the document, but I cannot find the file

Check your browser’s default Downloads folder or the "Files" app destination you selected.

Remember that **Auto encrypted** only protects drafts stored in the browser; it does not permanently create a `.md` file. Always use **File > Save (⌘S)**.

### 12-5. The title bar shows “Unsaved”

This means the document has been modified since the last save. Save the document before ending your session.

### 12-6. I cannot paste from the menu

Browser security restrictions may block paste operations from custom menus. Use the keyboard shortcut **⌘V**.

### 12-7. I cannot insert an image

Ensure the image is under 300 KB and is a PNG, JPEG, or WebP. SVG files and large files are restricted for security and storage reasons.

### 12-8. Preview is not displayed

Ensure Preview is toggled on. If the screen is narrow, use the central divider to adjust pane widths.

### 12-9. Search returns no results

Check search options like "Case Sensitive" or "Whole Word". Ensure there are no invisible spaces causing mismatches by toggling **View > Show Invisibles**.

### 12-10. “Invalid regular expression” appears

If you do not intend to use regular expressions, turn off the **RegExp** search option.

### 12-11. Spell (EN) is not working

Ensure the document contains English text. This feature is intended for English spelling only.

### 12-12. I forgot my Private Storage passphrase

Drafts protected by Private Storage cannot be recovered without the passphrase. Always keep manual `.md` backups.

### 12-13. I forgot my Private App passphrase

HTML files exported as Private Apps cannot be decrypted without the correct passphrase.

### 12-14. My Standalone HTML app does not open correctly

Ensure your browser is up-to-date and no corporate restrictions are blocking the file.

### 12-15. PDF export does not work correctly

Ensure your print destination is set to "Save as PDF". Always review the output file layout manually.

---

*Google, Google Chrome, and Gemini are trademarks of Google LLC. All other company, product, and service names mentioned are trademarks or registered trademarks of their respective owners.*

```

```
