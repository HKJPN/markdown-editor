# MD//WORKS Editor User Manual

MD//WORKS Editor is a Markdown editor that runs entirely from a single HTML file.  It supports document creation, Markdown preview, file saving, exporting to HTML or PDF, saving as a standalone HTML file, and integration with browser-based AI tools. MD//WORKS works seamlessly across different OSs and browsers, but we've put together a [special manual](https://github.com/HKJPN/markdown-editor/blob/main/docs/ipad-manual.md) for iPad users to help with things like handwriting and AI.

## Image Annotations Used in This Manual

This manual uses visual annotations to indicate important areas of the screen.  
Red frames indicate where to click or select, blue frames indicate information to check, and circled numbers indicate the order of operations.

## Shortcut Notation in This Manual

This manual lists Windows / Linux and Mac shortcuts together.  
Example: **Ctrl+S / ⌘S**

When a shortcut includes Shift, the Mac notation uses **⇧**.  
Example: **Ctrl+Shift+S / ⌘⇧S**

Depending on your browser or operating system, some shortcuts may conflict with standard browser shortcuts. If a shortcut does not work as expected, use the menu bar instead.

---

## 1. Starting the App and Understanding the Screen Layout

### 1-1. Starting the App**

MD//WORKS does not require installation; you can use it simply by opening the Editor's HTML file in a browser. It can also be launched directly from the [MD//WORKS Editor website](<https://hkjpn.github.io/markdown-editor/>). If unsaved data from a previous session remains, a restoration prompt may appear. If you wish to restore the data, select "Restore" on the confirmation screen.

Although installation is not required, you can convert it into an app using the following steps. Even after turning it into an app, you can switch back and forth with your browser as needed. 

>💡 For other browsers, please refer to Appendix 4.

**1-1-1. Steps to Create an App and Switch with Browser Tabs (For Chrome)**

1. Open the [MD//WORKS Editor website](<https://hkjpn.github.io/markdown-editor/>) in the Chrome browser on your PC/Mac.
2. Select the menu (︙) in the top right corner of the screen > "Cast, save, and share" > "Install page as app".
3. Click "Install" on the confirmation screen, and a dedicated MD//WORKS icon will be created on your desktop or taskbar.
4. By simply clicking this icon, it will launch immediately as an independent window so you can begin editing.
5. When you want to use browser AI or similar features, select **"Open in Chrome"** from the menu (︙) in the top right corner. This will move you to a standard browser tab while retaining the text you are currently editing.
6. To return to the app mode and focus on writing again, click the "Open in app" button displayed at the far right of the browser's address bar.
<br><img src="./images/icon2s.png" alt="Image:icon" width="90">

> 💡 **If using a downloaded HTML file locally:** The install button will not appear in the address bar. Instead, open the Chrome menu (︙), go to **Save and share** > **Create shortcut**, check the **Open as window** box, and click **Create**.

### 1-1-2. Uninstall

If you are running the app from the HTML file or directly from the [MD//WORKS Editor website](https://hkjpn.github.io/markdown-editor/), uninstallation is not required. You can completely remove it simply by deleting the HTML file and clearing your browser cache.

If you installed it as a Chrome App, open the standalone app window, click the menu icon (︙) in the top-right corner, and select **"Uninstall MD//WORKS"**.
> *Note: If you are unable to uninstall it this way, please refer to Appendix 3.*

### 1-2. Supported Environments

MD//WORKS is compatible with almost all environments that can run a modern web browser. Please refer to [save behavior by OS and browser](#save-behavior) for detailed differences in saving behavior across various OS and browser combinations. For best results, use the latest version of a modern desktop browser such as Chrome, Brave, Edge, Firefox or Safari.

* **Device Requirements:** PC (Windows/Linux), Mac, iPad, Android tablets, Chromebook, etc., capable of running a modern web browser.
* **Screen Size:** A tablet-sized screen or larger is required. Almost all features can also be used on iPhones and Android smartphones by switching to landscape mode or using an external display.

>💡 **Pro Tip: Use Separate Browsers for Simultaneous Editing**
>
>When editing multiple documents side-by-side, we recommend using different browsers (e.g., Chrome, Brave) and visually distinguishing them with the theme colors described later. This prevents draft history conflicts between browsers, ensuring more stable operation and easier visual identification on your screen. This approach works effectively across Windows, Mac, and tablet environments.

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

---

## 2. Creating and Opening Files

![Image: File menu showing New (Ctrl+N / ⌘N), Open (Ctrl+O / ⌘O), and Import Word (.docx)](<./images/FileNewOpenWord-en.jpg>)


### 2-1. Creating a New File

To create a new Markdown document, select **File > New (Ctrl+N / ⌘N)** from the menu bar.

If you have unsaved work, save it before creating a new file.  
Depending on the current state of the document, you may also be prompted to save the current content to History before proceeding.

### 2-2. Opening an Existing File

To continue editing a Markdown file saved on your computer, select **File > Open (Ctrl+O / ⌘O)** from the menu bar or click the **Open** button on the title bar.

Supported text-based file types include `.md`, `.txt`, and `.markdown`.

### 2-3. Importing Word Files

You can import an existing Word document (`.docx`) and convert it to Markdown for editing.  
Select **File > Import Word (.docx)** from the menu bar, then choose the Word file you want to import.

The maximum file size is **10 MB**.

> **Note:** Word import is designed to convert document structure into Markdown. Detailed layout elements such as fonts, margins, complex charts, footnotes, and intricate tables may not be reproduced exactly. After importing, review the result in the Preview area.

> **Note:** Importing a Word file replaces the current draft. Save any important work with **File > Save (Ctrl+S / ⌘S)** before importing.

---

## 3. Entering Text



Type your content in the **Editor Area**, located in the center or on the left side of the screen.  
MD//WORKS Editor uses Markdown syntax for document creation.

### 3-1. Basic Input Example

```markdown
# Heading 1

This is the main text.

## Heading 2

- Bullet point
- Bullet point

You can also use **bold** and *italics*.
```

### 3-2. Inserting Images



You can insert small local images by dragging and dropping them into the editor area.

When inserted, the image is embedded as data within the Markdown document.  
To protect local storage capacity, image insertion is subject to the following limits:

| Item | Details |
| --- | --- |
| Maximum size | Under 300 KB |
| Supported formats | PNG, JPEG, WebP, etc. |
| Unsupported formats | SVG |

For security reasons, SVG images are not supported. Convert SVG files to PNG, JPEG, or WebP before inserting them.

> We have provided [image2md.py](https://github.com/HKJPN/images2md/tree/main) and [images2rhtml.py](https://github.com/HKJPN/images2rhtml/tree/main) as separate command-line tools for importing large numbers of images. Please utilize these tools when you need to import multiple photos at once, such as when creating reports or handouts for presentations.

| Tool | Output | Best Suited For |
| --- | --- | --- |
| **MD//WORKS** | Markdown / Viewer/ <br>Restricted Viewer HTML / Standalone App, etc. | Compiling a small number of images, editing related footnotes, and exporting a file with/without password protection later. |
| **`images2md.py`** | Markdown | Compiling a large number of images and then adding text, videos, PDFs, meeting minutes, etc., for further editing. |
| **`images2rHTML.py`** | Restricted Viewer HTML | Quickly compiling and distributing numerous image materials while restricting general copying, printing, and unintended modifications, with the option for detailed editing later. |

> 💡 **Pro Tip:** You can bypass the 300 KB image limit by using tools like `images2md.py` or `images2rHTML.py`. However, to maintain stable performance, please ensure the total file size does not exceed 20MB when re-importing into MD//WORKS.

### 3-3. Local Files and Relative Links
	
MD//WORKS Editor allows you to display and play local files such as images, videos, audio, and PDFs in the preview screen by specifying them with "relative paths." Images can also be embedded using Base64. This section explains how to display files using relative links and how to embed them.

>  **⚠️Note**:On mobile operating systems like iPadOS, local relative links do not function due to strict OS security restrictions. Please use the direct embedding method instead.

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

Example: `code`

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
### 4-5. Superscript and Subscript
In life sciences, chemistry, and physics documents, subscripts and superscripts are frequently used for chemical formulas, charges, units, and exponents. Try pasting the following into the editor and checking how it looks in the preview panel:

```markdown
H<sub>2</sub>O, CO<sub>2</sub>, A<sub>260</sub>/A<sub>280</sub>
Ca<sup>2+</sup>, 10<sup>6</sup> cells, cm<sup>2</sup>

```

Subscripts and superscripts are not supported in standard Markdown. However, by using HTML tags as shown above, you can maintain compatibility and ensure they display correctly across most environments.


### 4-6. Inserting Footnotes

You can add notes, supplementary explanations, or references to your text. This feature is available only via direct Markdown typing. For details on formatting footnotes in scientific reports, please refer to the [Guide to Markdown for Scientific Writing](https://github.com/HKJPN/markdown-editor/blob/main/docs/scientific-writing.md).

* **In the body text:** Insert a footnote reference like `[^note]` or `[^1]` where you want the footnote to appear. (Labels can contain alphanumeric characters, hyphens, and underscores.)
* **Footnote definition:** Type `[^note]: Your footnote text here` anywhere in the document (placing them at the end of the document is recommended).

**💡 How they are displayed**<br>
In the Preview panel and exported files (such as Viewers), footnotes are automatically sequentially numbered (1, 2...) based on their first appearance in the body text, regardless of the label used. They are collected at the bottom of the page, creating bi-directional links that allow you to jump between the reference and the footnote content.

---

## 5. Verifying with Preview

The Preview feature allows you to see exactly how the Markdown text entered in the editor will look when rendered. In addition to basic styling like headings and bold text, you can check elements that tend to have complex structures—such as tables, footnotes, superscripts, and subscripts. Verifying your document in Preview makes it easy to spot syntax errors or layout glitches.

### 5-1. Displaying the Preview

Each time you click/tap one of the following, the display cycles through three steps: "Split View (Editor & Preview)" → "Focus Preview" → "Editor Only".

- The **Preview** button on the title bar
- **View > Preview** in the menu bar

#### 5-1-1. Split View (Editor & Preview)

The Markdown editor is displayed on the left side of the screen, and the Preview is displayed on the right side.
As you edit the text on the left, the changes are reflected in the Preview in real time, allowing you to write while instantly checking the final output. This is especially useful when adjusting tables, footnotes, and images. You can adjust the width of the panes by dragging the splitter between the editor and the preview.

#### 5-1-2. Focus Preview

This mode expands the Preview to full width, allowing you to focus on reading the document. By opening the Outline panel and selecting a heading, you can quickly jump to that specific section. This view is ideal for reviewing the entire document, proofreading, collaborative reading, or giving simple presentations.

To return to the editor from Focus Preview, use one of the following methods:

- Click/tap **Preview** again on the title bar or menu bar.
- Click/tap the **Return to Editor** button on the screen.

### 5-2. Content Verifiable in Preview

The Preview panel mainly supports rendering and verifying the following elements:

- Headings
- Bold, Italic, and Strikethrough text
- Superscripts and Subscripts
- Bulleted and Numbered lists
- Task lists (Checklists)
- Tables
- Blockquotes
- Footnotes
- Inline code and Code blocks
- Hyperlinks
- Images


---

## 6. Saving Files



You can save your document as a standard Markdown file.

### 6-1. Saving as a Markdown File

1. Click the **Save** button on the title bar.  
   Alternatively, select **File > Save (Ctrl+S / ⌘S)** from the menu bar.
2. Choose a destination folder if prompted.
3. The document is saved as a Markdown file.

You can also use the shortcut shown above.  
To save the file under a different name, use **File > Save As (Ctrl+Shift+S / ⌘⇧S)**.

### 6-2. Renaming the File



Click the file name field in the title bar to rename the document.  
For example, you can change `untitled.md` to `meeting-note.md` or `manual-draft.md`.

### 6-3. Checking Save Status

![Image: Saved / Unsaved indicator highlighted](<./images/SaveUndUnsavedStatus.jpg>)

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

> **Important:** Auto encrypted and Private Storage protect browser-based drafts and history. They do not replace saving your document as a file. To keep your work permanently, save it as a `.md` file with **File > Save (Ctrl+S / ⌘S)**.

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

<a id="save-behavior"></a>
### 6-7. Saving behavior depends on your browser

MD//WORKS Editor is designed to work across a wide range of environments, including Windows, macOS, iPadOS, Android, ChromeOS, and Linux. The behavior for saving and **overwriting files** varies depending on your device and browser combination. This is due to browser-specific security specifications (File System Access API support).

| OS / Platform       | Chrome / Edge                                                                                               | Brave                                                                             | Firefox                                                                                   | Safari                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------- |
| **Windows / Linux** | **Direct overwrite is supported** after the initial save.                                                   | Overwrite manually using **“Download As”** to **a folder of your choice**. | Downloads as a new file with a **numbered suffix**. | —                          |
| **macOS**           | **Direct overwrite is supported** after the initial save.                                                   | Overwrite manually using **“Download As”** to **a folder of your choice** . | Downloads as a new file with a **numbered suffix**. | Same as **Firefox**.       |
| **iPadOS**          | Saves as a new file with a numbered suffix to **a folder of your choice** via the **Files app.**| Same as **Chrome / Edge**.                                                        | Same as **Chrome / Edge**.                                                                | Same as **Chrome / Edge**. |
| **Chromebook**      | Direct overwrite is **supported** after the initial save.                                                   | Overwrite manually using **“Download As”** to **a folder of your choice**. | Downloads as a new file with a **numbered suffix**. | —                          |
| **Android Tablet**  |🚫 `.md` downloads are not supported. Use the `.txt` extension instead.                                     | Downloads as a new file with **a numbered suffix.** | Same as **Brave**.                                                                        | —                          |
> **To Firefox, Safari, and Mobile Users:**
> Due to browser security restrictions, direct overwrite saving to local files is unavailable. Each time you click the save button, the file will be downloaded with a version history number appended (e.g., `filename(1).md`). This allows you to keep track of previous save versions for the same file.

---

## 7. Exporting to HTML and PDF


In addition to saving as a standard Markdown file, MD//WORKS Editor allows you to export your documents in multiple formats depending on your needs.

### 7-1. Document Sharing and Protection via Flexible Export Features

MD//WORKS features the ability to export your documents as a single HTML file. This enables secure document sharing, collaborative writing, and long-term archiving in a format tailored to your purpose, without relying on the recipient's system environment.

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

<img src="images/exportmodalE.JPG" width="350" align="right">

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
Choose **Save as PDF** as the destination to generate a PDF file. **Turning off the Headers and footers option** in the advanced settings allows you to save it as a plain PDF file.

When creating PDFs for submission or distribution, always open the exported PDF and check for layout issues, missing tables, image problems, or awkward page breaks.

---

## 8. Search, Replace, and Final Touches
MD//WORKS Editor provides tools to search and replace text strings across your document, as well as an automatic table of contents generator. These features are highly useful when editing long drafts, meeting minutes, specifications, or research notes.

### 8-1. Finding Text



To search within the document, select **Edit > Find (Ctrl+F / ⌘F)** from the menu bar.

#### Steps

1. Click **Edit** on the menu bar.
2. Select **Find**.
3. Enter the text you want to find.
4. Matching text is highlighted in the editor.
5. Use the **↑ / ↓** buttons to move between results.

### 8-2. Replacing Text



To replace text, select **Edit > Replace (Ctrl+H / ⌘H)**.

#### Steps

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



Select **Edit > Format Markdown** to clean up excessive blank lines and trailing spaces.  
Running this before sharing, submitting, or exporting helps keep the document clean and consistent.

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



The View menu lets you toggle Outline, Show Invisibles, Theme, Fullscreen, Spell (EN), and Zen Mode.

### 9-1. Using Outline



Select **View > Outline** to display a list of headings in the document.

Outline extracts Markdown headings such as `#`, `##`, and `###`.  
In long documents, click a heading to jump directly to that section. This makes it easier to review structure and navigate quickly.

### 9-2. Showing Invisible Characters



Select **View > Show Invisibles** to reveal characters that are normally hidden.

Examples include:

| Character | Use case |
| --- | --- |
| Full-width spaces | Checking accidental spaces or inconsistencies |
| Tabs | Checking indentation |
| Trailing spaces | Identifying causes of Markdown formatting issues |
| Line breaks | Confirming paragraph and list spacing |

In Markdown, spaces and line breaks can affect the rendered result.  
This feature is useful when fine-tuning the document layout.

### 9-3. Changing Themes



Change the interface theme from the **View** menu.

| Theme | Description |
| --- | --- |
| Midnight | Dark theme designed for focused editing |
| Paper | Bright theme suitable for document writing and review |
| Warm | Soft sepia theme for long-form writing |

Choose a theme based on your working environment: **Paper** for reviewing, **Warm** for long writing sessions, and **Midnight** for focused editing.

![Image: Theame](<./images/theame.jpg>)

### 9-4. Fullscreen Mode



Use **View > Fullscreen** or the fullscreen icon on the title bar to expand the browser to fullscreen mode.

This is useful when you want a wider workspace or need to review the document before a presentation.

### 9-5. Using Spell (EN)



Enable the English spell checker with **View > Spell (EN)** or the **Spell (EN)** button on the title bar.

When Spell (EN) is enabled, possible English spelling errors are detected. You can review suggestions, ignore words, or add words to the dictionary.

This feature is intended for English text only and does not provide proofreading for other languages.

### 9-6. Focusing with Zen Mode



Select **View > Zen Mode** to hide menus, toolbars, and panels, creating a distraction-free writing environment.

Zen Mode is useful for long drafting sessions, manuscript writing, and focused proofreading.  
To exit, click the **✕** button in the upper-right corner of the screen.

---

## 10. Help and Keyboard Shortcuts



The Help menu provides access to Quick Start, Keyboard Shortcuts, the GitHub page, and app information.  
Because the help content is embedded in the app, it can be viewed offline.

### 10-1. Quick Start



Select **Help > Quick Start** for a brief overview of MD//WORKS Editor.

Quick Start covers:

* Entering Markdown
* Using the toolbar for formatting
* Previewing documents
* Saving files
* Exporting as a standalone app
* Finding and replacing text
* Formatting Markdown
* Working offline

### 10-2. Keyboard Shortcuts


Select **Help > Keyboard Shortcuts** to view available shortcuts.

Common shortcuts include:

| Action | Shortcut |
| --- | --- |
| New File | Ctrl+N / ⌘N |
| Open | Ctrl+O / ⌘O |
| Save | Ctrl+S / ⌘S |
| Save As | Ctrl+Shift+S / ⌘⇧S |
| Undo | Ctrl+Z / ⌘Z |
| Redo | Ctrl+Y / ⌘⇧Z |
| Cut | Ctrl+X / ⌘X |
| Copy | Ctrl+C / ⌘C |
| Paste | Ctrl+V / ⌘V |
| Select All | Ctrl+A / ⌘A |
| Find | Ctrl+F / ⌘F |
| Replace | Ctrl+H / ⌘H |
| Close the front panel or modal | Esc |

When the Preview area is selected, you can use **Ctrl+A / ⌘A** to select all preview content. Rich copy is also supported.

### 10-3. GitHub / About MD//WORKS



To view the source code or release notes, select **Help > GitHub**.  
To check the app version and core concepts, select **Help > About MD//WORKS**.

---

## 11. AI-Assisted Writing<img src="images/BgemniE.jpg" alt="Image: askGemini" width="180"> ![Image: LeoImage](<images/Leoimage.png>)

MD//WORKS is not only a plain text and Markdown editor. It can also be used together with browser-based AI assistants, such as Gemini in Chrome and Leo in Brave, to support a wider range of writing tasks.

AI features are not built directly into MD//WORKS itself. However, when used alongside a browser AI assistant, MD//WORKS can help with routine tasks such as proofreading, translation, checking terminology consistency, and correcting inconsistent wording. It can also be useful for more structural tasks, such as reviewing the organization of a Markdown document, explaining code, or organizing reference notes while writing.

By offloading these supporting tasks to AI, you can reduce the cognitive burden of writing and focus more on the creative and substantive aspects of your work. This chapter explains how to prepare your browser AI environment, how to use it effectively, and what to keep in mind when using AI assistants with MD//WORKS.

### 11-1. Preparing to Use AI Writing Assistance

MD//WORKS can be used with several browser-based AI assistants. This section explains the basic setup for using Gemini in Google Chrome and Leo in Brave Browser.

#### 11-1-1. Google Chrome: Using Gemini

1. **Sign in to your Google Account**  
   Make sure you are signed in to your Google Account in Chrome.

2. **Open Gemini**  
   Launch Gemini from the browser side panel, the toolbar button, or the “Ask Gemini” option. If you are launching MD//WORKS from the app, select 'Open in Chrome' from the menu (︙) in the top right corner of the screen, return to the browser tab, and then launch it from 'Ask Gemini'."

3. **Ask Gemini to review or summarize your document**  
   With MD//WORKS open, you can ask Gemini to proofread, summarize, translate, or review your document. You can work with the entire document, or select only a specific section. In many cases, simply selecting text with the cursor is enough to limit the scope of the AI request, without copying and pasting the text manually.

> Note: The availability and behavior of Gemini in Chrome may vary depending on your Chrome version, Google Account, region, plan, and organizational settings.

#### 11-1-2. Brave Browser: Using Leo

1. **Open Leo from Brave Browser**  
   No login is required. Click the AI chat icon on the right side of the address bar, or open it from the “…” menu.

2. **Ask Leo to review or summarize your document**  
   With MD//WORKS open, you can ask Leo to proofread, summarize, translate, or review the current document. You can also select a specific section and ask Leo to work only on that part. As with Gemini, this can often be done by selecting the relevant text directly, without manual copy and paste.

> In our testing, Leo worked smoothly with MD//WORKS, including on mobile environments such as iPad. It was able to read the page structure with a level of accuracy close to the desktop version, even when the HTML structure was relatively complex or imperfect. Brave may therefore be a useful option when you want AI assistance without relying on a Google account, or when you want a more privacy-oriented browser environment.

#### 11-1-3. Local AI

In **Firefox**, it is also possible to build a fully local AI environment that summarizes web pages or proofreads text **without sending data over the internet**. For details, see **[Appendix 1: Using a Local LLM with Firefox AI Chat](#appendix-firefox-llm)**.

### 11-2. Example Use Cases

For everyday proofreading, summarizing, terminology checks, and basic structural reviews, a lightweight model is often more practical than a high-end model. It usually responds faster and allows you to stay focused on writing.

For regular writing tasks, it is recommended to use a lightweight model such as Gemini Flash by default, and switch to a frontier model only when more advanced review is needed. Examples include reviewing the structure of a long document, comparing subtle differences between Japanese and English wording, or checking whether a technical explanation is clear and accurate.

Below are some example prompts.

#### For Papers, Articles, and Technical Documents

* Identify inconsistent terminology or wording in this document.
* Summarize the entire document in about 300 Japanese characters.
* Review the selected section and rewrite any unnatural expressions in a more academic and objective tone.
* Check the selected English text for grammar mistakes.
* Extract only the headings from this chapter.
* Would the structure be clearer if Section C were moved after Section D?
* Review the order of the chapters and suggest a more readable structure.
* Organize these reference notes and check whether each source supports the corresponding claim in the main text.

#### For Simple Coding Support

* Create a regular expression pattern to replace all half-width parentheses in this document with full-width Japanese parentheses.
* Convert the experimental process described in the selected text into a Mermaid flowchart.
* Add explanatory comments to each line of the selected Python code.
* Explain the cause of the error in this R code and suggest how to fix it.
* Explain what this JavaScript function does in a way that a beginner can understand.
* Rewrite the following specifications as an implementation prompt for Codex.

### 11-3. Important Notes When Using Browser AI

When you use a browser-based AI assistant, the entire visible document or the selected area may be processed by the AI service. If you are working with confidential information, personal data, or internal company documents, always check what information is being shared and how your browser or organization manages AI access.

For documents that should not be shared with AI services, consider using a browser or environment where AI access can be disabled or strictly controlled.

If you do not want Gemini in Chrome to access the content of your MD//WORKS tab, avoid sharing that tab with Gemini, or use a browser such as Firefox where AI access can be blocked or more tightly controlled.

### 11-4. Differences Between Browser AI Assistants

The following comparison is based on our own testing with MD//WORKS. The behavior of each AI assistant may change depending on the browser version, AI service updates, account settings, subscription plan, and organizational policy.

| Item | Copilot in Edge  | Gemini in Chrome | Brave Browser / Leo  | Firefox AI Controls ) |
| :--- | :--- | :--- | :--- | :--- |
| **AI integration with MD//WORKS** | 🚫 Mainly copy-and-paste based, even when the sidebar is available | ✅ **Can analyze the overall document structure or selected areas** | ✅ **Can analyze the overall document structure** | 🚫 Mainly copy-and-paste based, even when the sidebar is available |
| **Real-time Context Awareness** | 🚫 **Limited**<br>Requires manual trigger; context updates only when panel is refreshed or explicitly instructed | ✅ **Full Real-time**<br>Directly monitors DOM & selection; updates instantly as you type or select | ⚠️ **Snapshot-based**<br>Captures state when opened; does not auto-sync with ongoing typing without reopening | 🚫 **None**<br>Relies on copy-paste or manual page summary|
| **AI support on iPad** | 🚫 Not available | 🚫 Not available | ✅ **Available** | 🚫 Not available |
| **Model selection** | 🚫 Not available | 🚫 Not available (Limited to Pro and Flash) | ✅ **Available** | ✅ Available when using a local or configurable AI setup |
| **Security / privacy orientation** | Best suited for managed Microsoft 365 environments | Depends on Google Workspace and account settings | Minimizes unnecessary data sharing and offers privacy-oriented controls | ✅Can **block AI** access; **local LLM** usage is also possible |
| **Recommended use** | Organizations that prioritize **Microsoft 365 governance** | Writing, proofreading, and review using **powerful AI models** | Writing, proofreading, **mobile use**, and **model selection** | Users who want **strict AI control**, AI blocking, or a fully local AI option |

#### For Users Who Want a Smooth and Easy AI Writing Environment

Our testing confirms that MD//WORKS features high compatibility and seamless performance with Google Chrome’s Gemini and Brave’s Leo. Due to the differences in how they recognize context (Real-time Context Awareness), we recommend choosing the right tool for your specific task:

* **Gemini in Chrome (for real-time assistance):** Updates instantly as you type or select text, making it ideal for targeted rewriting, fine-tuning expressions, and partial edits while you actively write.
* **Leo in Brave Browser (for overall reviews):** Analyzes a snapshot of the document when the sidebar is opened. This makes it perfect for full-document proofreading, summarization, consistency checks, and structural reviews once a draft is complete. It also offers stable performance on mobile devices like iPads.

#### For Strict Security and Corporate Policies

If your organization requires strict adherence to data protection policies, Copilot in Edge is highly recommended for environments governed by Microsoft 365. Alternatively, Firefox offers the ability to completely block AI access or run a fully local LLM for maximum privacy.

### 11-5. AI Sidebar and Full-Screen Mode Behavior

When using the AI sidebar, switching to full-screen mode is highly recommended to maximize your workspace. However, depending on your browser, you may experience better stability by using your browser's native full-screen shortcut rather than the "Full Screen" button within MD//WORKS. For more details, please refer to [Appendix 2: Full-Screen Behavior and Browser Compatibility](#appendix-2-fullscreen-browser-compatibility).

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

### 12-2. Pressing the Home / End keys in the editor does not move the cursor to the beginning or end of the document.

In the editor, the Home / End keys are assigned to **move the cursor to the beginning or end of the current line** to allow for smoother text input and editing. (Note: In the Preview screen, they will move to the beginning or end of the entire document.)

To move to the beginning or end of the entire document, please use the following shortcuts:

* **Ctrl + Home** – Go to the beginning of the document
* **Ctrl + End** – Go to the end of the document
* For Mac / iPad: **⌘ + ↑** / **⌘ + ↓**

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

First, check your browser’s default Downloads folder.  
Saving and export operations follow your browser’s download settings. Also confirm that the name in the file name field matches the downloaded file.

Remember that **Auto encrypted** only protects drafts and history stored in the browser. It does not create a `.md` file on your computer. To keep a regular file, use **File > Save (Ctrl+S / ⌘S)**.

### 12-5. The title bar shows “Unsaved”



**Unsaved** means the document has been modified since the last save.  
Before ending your work session, save the document using the **Save** button or **File > Save (Ctrl+S / ⌘S)**.

After the file is saved, the indicator returns to **Saved**.

### 12-6. I cannot paste from the menu

Browser security restrictions may block paste operations from custom menus.  
If this happens, use the keyboard shortcut **Ctrl+V / ⌘V**.

### 12-7. I cannot insert an image

If drag-and-drop image insertion does not work, check the following:

| Item to check | Solution |
| --- | --- |
| The image is too large | Compress it to under 300 KB |
| The image is an SVG file | Convert it to PNG, JPEG, or WebP |
| The file is not an image | Use a valid image file |

To protect local storage capacity and improve security, MD//WORKS Editor does not accept images over 200 KB or SVG files.

### 12-8. Preview is not displayed

If Preview does not appear, make sure it is enabled by clicking the **Preview** button on the title bar or selecting **View > Preview**.

On narrow screens, Preview may appear as a full-width pane or may be out of view.  
When Preview is active, you can drag the central divider to adjust the width of the editor and preview panes.

### 12-9. Search returns no results

If search returns no results, check the search options, such as **Case Sensitive**, **Whole Word**, and **RegExp**.

The issue may also be caused by full-width/half-width character differences or invisible spaces. Turn on **View > Show Invisibles** to inspect the text if necessary.

### 12-10. “Invalid regular expression” appears



When **RegExp** is enabled, your search input is interpreted as a regular expression.  
If the syntax is invalid, an error appears.

If you do not intend to use regular expressions, turn off **RegExp**.

### 12-11. Spell (EN) is not working

Spell (EN) is designed for English text only and does not proofread other languages.

Make sure Spell (EN) is enabled and that the document contains English text.  
Depending on your network environment, the dictionary data may take a few seconds to load.

### 12-12. I forgot my Private Storage passphrase

If you forget your Private Storage passphrase, drafts and history protected by Private Storage cannot be recovered.

For important documents, do not rely solely on Private Storage. Save a separate Markdown file (`.md`) to your computer.

### 12-13. I forgot my Private App passphrase

HTML files created with **File > Save as Private App** cannot be decrypted without the correct passphrase.

If the passphrase is forgotten, the document cannot be recovered.  
Before exporting a Private App, save the original Markdown document securely on your computer.

### 12-14. My Standalone HTML app does not open correctly

If a Standalone App or Private App does not open correctly, check the following:

| Item to check | Solution |
| --- | --- |
| Browser is outdated | Open the file with the latest version of Chrome, Edge, or Firefox |
| Private App passphrase is incorrect | Enter the correct passphrase |
| File is corrupted | Export the file again from the original source |
| Corporate device restrictions are blocking it | Try another browser or a non-restricted device |

Creating and decrypting Private Apps works best in the latest desktop versions of Google Chrome or Microsoft Edge.

### 12-15. PDF export does not work correctly

PDF export (**File > Print / Save as PDF**) relies on the browser’s print function.  
Make sure the print destination is set to **Save as PDF**, and check the paper size and margins.

For submission-ready PDFs, always open the generated file and confirm that the layout is correct.

---

<div id="appendix-firefox-llm"></div>

# Appendix

## Appendix 1: How to Use a Local LLM with Firefox's AI Chat Feature

This section explains the steps to connect Firefox with a local LLM server running on your PC, allowing you to summarize and chat with web pages entirely within a secure, local environment.

---

### 1. Launching the Local LLM Server (Preparation)

First, start the server (interface) to run the LLM locally on your PC.

* **Tools Required:**
  * [llama.cpp](https://github.com/ggml-org/llama.cpp) (Download the pre-built binary matching your operating system)
* **Model Required:**
  * Model files in **GGUF format**, such as `gpt-oss-20b` or `GPT-OSS Swallow`.
* **Example Launch Command:**
  * Open your terminal (or Command Prompt) and run the following command to start the server on port `8080`:

```bash
llama-server --model /path/to/your-model.gguf --port 8080

```

> 💡 **Note:** Adjust the launch options (such as GPU offloading via `-ngl`) as needed based on your hardware capabilities and desired processing speed.


### 2. Configuring Advanced Settings in Firefox

After starting the server, modify Firefox's advanced settings so it can securely recognize your local LLM server (localhost).

1. Type **`about:config`** in the Firefox address bar and press Enter.
2. If a warning screen appears, click **"Accept the Risk and Continue"**.
3. Type **`browser.ml.chat.hideLocalhost`** in the search bar at the top.
4. The default value is set to `true` (hidden). Click the toggle button on the right (or double-click the row) to change it to **`false`** (visible).


### 3. Basic Usage

Once the configuration is complete, you can start using your local LLM.

1. Open the "AI Chatbot" panel from the Firefox **sidebar**.
2. **"localhost"** will now appear under the chat provider options. Select it and click "Continue."
3. Click the **"Summarize page"** button at the bottom left of the chat window. The content of your active web page will be sent to your local LLM, and a summary will be generated automatically.

---
<a id="appendix-2-fullscreen-browser-compatibility"></a>

## Appendix 2: Full-Screen Behavior & Browser Compatibility**
**Current Limitation on Brave, Edge, and Firefox**
When the app's "Full Screen" button is activated, the **AI Sidebar (Leo)** and other browser UI elements are hidden on **Brave, Microsoft Edge, and Firefox**.

*   **Cause**: This is due to the standard **Web Fullscreen API** behavior, where the browser hides its UI layer (address bar, tabs, sidebars) to maximize the content area. On these browsers, the AI Sidebar is implemented as part of this UI layer.
*   **Workaround**: To keep the sidebar visible, please use the **browser's native full-screen mode** instead of the app's button:
    *   **Windows**: Press `F11`
    *   **macOS**: Press `Control + ⌘ + F`
    *   *In this mode, the browser UI (including the sidebar) remains visible.*

**Note on Chrome (Gemini) Behavior**
Currently, **Google Chrome (with the Gemini sidebar)** behaves differently: even when the app enters full-screen mode, the sidebar remains visible. This suggests that Chrome's implementation of the sidebar differs from the standard UI layer used by Brave, Edge, and Firefox.

**Future Work**
We are monitoring browser updates. If the behavior on Brave, Edge, or Firefox changes to match Chrome's implementation in the future, this workaround may no longer be necessary.

---

## Appendix 3: Uninstalling the Chrome App

If you installed the editor as a Chrome App, uninstalling it directly from the app window might occasionally fail. **If the app does not uninstall properly or if the shortcut icon remains**, please try one of the manual removal methods below:

## **A. Remove from the Chrome App List**
  1. Open your Chrome browser, type `chrome://apps` in the address bar, and press **Enter**.
  2. Right-click the **MD//WORKS** icon (Mac users: `Control`-click or two-finger tap).
  3. Select **"Remove from Chrome"** and confirm the deletion on the prompt screen.

## **B. Remove Using Standard OS Features**
  You can also uninstall it just like any standard desktop software.
  * **Windows:** Go to **Settings** > **Apps** > **Installed apps**, locate **MD//WORKS**, click the three-dot menu (**...**), and select **Uninstall**.
  * **Mac:** 1. Open **Finder** and navigate to the **Applications** folder.
    2. Open the **Chrome Apps** folder.
    3. Drag the **MD//WORKS** icon to the **Trash** (or right-click and select **Move to Trash**).

---

## Appendix 4: How to Install as an App and Uninstall on Various Browsers

If you are using a browser other than Chrome, you can also install it as an app (launching in an independent window) as long as your environment, such as a PC/Mac, supports it.

### Appendix 4-1. **■ For Brave**

* **Installation:** Click the "Install" icon displayed at the right end of the address bar, or select the menu (≡) at the top right of the screen > "Save and share" > "Install page as app".
* **Uninstallation:** Select "Uninstall MD//WORKS" from the top right menu (︙) of the app window, or enter `brave://apps` in the browser's address bar and delete it from the list.

### Appendix 4-2. **■ For Safari (Mac / iPadOS)**

* **Installation (Mac):** With MD//WORKS open in Safari, select "File" > "Add to Dock" from the menu bar. You will then be able to launch it as an independent web app from the Dock (*macOS Sonoma or later).
* **Installation (iPad / iPhone):** Select the Share button (the square icon with an upward arrow) at the top or bottom of the screen > "Add to Home Screen".
* **Uninstallation:** For Mac, long-press the icon in Launchpad to delete it, or delete it from the "Applications" folder. For iPads and iPhones, long-press the icon on the home screen and select "Remove App" or "Delete Bookmark".

### Appendix 4-3. **■ For Microsoft Edge**

* **Installation:** Select the menu (…) at the top right of the screen > "Apps" > "Install this site as an app".
* **Uninstallation:** Uninstall from "App settings" in the top right menu (…) of the independent app window, or enter `edge://apps` in the browser's address bar and select "Remove" from the list.

---

Google, Google Chrome, and Gemini are trademarks of Google LLC. All other company, product, and service names mentioned are trademarks or registered trademarks of their respective owne.
