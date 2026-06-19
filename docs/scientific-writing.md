# A Guide to Using Markdown for Scientific Writing　v.1.5.7

## Abstract

The primary advantage of using Markdown for scientific writing is that it allows you to focus on logical structure and content without being distracted by visual formatting.

MD//WORKS v1.5.7 supports essential academic writing features, including footnotes, superscripts, subscripts, basic tables, code blocks, an Outline view, and automatic Table of Contents (TOC) generation. By combining these tools, you can efficiently draft research notes, technical reports, conference materials, and manuscripts in plain text.

We recommend starting by outlining your document with headings and using temporary text labels for footnotes. Prioritize organizing your ideas and scientific narrative first; the final layout can be refined after the content and structure are established.

## Introduction

Have you ever lost valuable time while writing a paper or report because a figure shifted out of place, footnote numbers had to be manually reordered, or paragraph formatting unexpectedly changed? These tasks have little to do with scientific reasoning itself.

Word processors such as Microsoft Word are excellent for WYSIWYG—“What You See Is What You Get”—editing and preparing documents for final submission or printing. However, frequent mouse operations and layout adjustments can interrupt your train of thought during the drafting process.

The core philosophy of Markdown is the separation of two distinct tasks:

* **Writing content and structuring the document**
* **Adjusting the final visual layout**

While drafting, you use simple symbols to indicate headings, emphasis, footnotes, tables, and code. The rendering engine then handles their visual presentation.

> **Version note:** This guide describes features planned for MD//WORKS v1.5.7. The current stable release is v1.5.6. Footnote support will become available with the release of v1.5.7.

## Why Use Markdown for Scientific Documents?

### 1. Maintain Your Writing Flow

You do not need to navigate complex menus to emphasize text or insert a footnote. You can keep your hands on the keyboard and record the structure of your document with only a few keystrokes.

### 2. Automate Footnote Numbering

Even if you insert a new footnote in the middle of a paragraph or rearrange entire sections, footnote numbers are automatically reassigned according to their order of appearance in the text.

### 3. Stay Focused on the Science

By minimizing layout adjustments during drafting, you can devote more attention to interpreting experimental data, constructing logical arguments, and refining your discussion.

Markdown does not necessarily replace final editing tools. An effective workflow is to build the content and structure in Markdown first, and then convert or export the finished document to the required format, such as Word, PDF, HTML, or LaTeX.

---

## 1. Managing Citations and Annotations

In scientific and technical writing, it is important to distinguish between quoted material and your own supplementary explanations. Markdown provides blockquotes and footnotes for these purposes.

### 1-1. Blockquotes

To quote external literature or a statement, type `>` at the beginning of the line.

**Example:**

```markdown
> Markdown separates document structure from visual formatting.
```

For a multi-paragraph quotation, add `>` to the beginning of each quoted line.

```markdown
> Markdown separates document structure from visual formatting.
>
> This approach can help authors focus on content and logical structure.
```

The source of the quotation should be provided immediately after the blockquote or in a footnote.

### 1-2. Footnotes

Footnotes allow citations, supplementary explanations, and drafting notes to be kept separate from the main flow of the text.

Reference a footnote in the body of the document as follows:

```markdown
Specific transcription factors have been reported to be crucial in the cell reprogramming process.[^takahashi2006]
```

Then define the footnote content:

```markdown
[^takahashi2006]: Takahashi K, Yamanaka S. Cell. 2006.
```

### Flexible Placement of Footnote Definitions

A footnote definition such as `[^label]: ...` can be placed anywhere in the Markdown document, including immediately below the paragraph in which it is referenced.

When the document is previewed or exported, the footnote definitions are collected and displayed as a numbered footnote list at the end of the document.

### 1-3. Using Text Labels Instead of Numbers

Footnote labels do not have to be numbers. You can use meaningful words or letters while drafting.

```markdown
A novel screening method allows candidate compounds to be selected efficiently.[^screening_method]

Further discussion is required here.[^memo]

[^screening_method]: Describe the detailed screening protocol here.
[^memo]: Add further discussion or references later.
```

In the preview, labels such as `screening_method` and `memo` are converted into sequential numbers—1, 2, 3, and so on—according to their order of appearance in the text.

This makes it possible to rearrange paragraphs without manually renumbering every footnote.

> **Note:** MD//WORKS automatically numbers footnotes, but it is not a full citation-management system. For workflows requiring CSL formatting, BibTeX synchronization, or automatic journal-specific reference styles, consider using it together with tools such as Zotero, BibTeX, or Pandoc.

---

## 2. Inserting Images and Links

Figures, diagrams, datasets, and external references are essential components of many scientific and technical documents.

### 2-1. Images and Figures

To insert an experimental graph, diagram, chart, or other image, use an exclamation mark, alternative text in square brackets, and the image path in parentheses.

```markdown
![Graph showing cell survival after 48 hours of treatment](./images/fig1_survival_rate.png)
```

The text inside the square brackets is alternative text. It helps describe the image when the image cannot be displayed and also improves accessibility.

Markdown itself does not provide a standardized figure-caption syntax. A simple caption can be written as ordinary text immediately below the image.

```markdown
![Graph showing cell survival after 48 hours of treatment](./images/fig1_survival_rate.png)

**Figure 1.** Cell survival after 48 hours of treatment.
```

### 2-2. Hyperlinks

To link to an external dataset, online tool, or reference source, place the display text in square brackets and the URL in parentheses.

```markdown
The raw dataset is available through [NCBI GEO](https://www.ncbi.nlm.nih.gov/geo/).
```

---

## 3. Scientific and Chemical Symbols

Life sciences and chemistry frequently require subscripts and superscripts for chemical formulas, ion charges, units, exponents, and statistical notation.

### 3-1. Subscripts

Wrap the text to be displayed as a subscript in tildes (`~`).

**Input:**

```markdown
H~2~O, CO~2~, A~260~/A~280~
```

**Output:**

H₂O, CO₂, A₂₆₀/A₂₈₀

### 3-2. Superscripts

Wrap the text to be displayed as a superscript in carets (`^`).

**Input:**

```markdown
Ca^2+^, 10^6^ cells, cm^2^, p < 0.05^*^
```

**Output:**

Ca²⁺, 10⁶ cells, cm², p < 0.05*

Superscript and subscript notation is best suited to relatively short expressions. Complex mathematical equations may require a dedicated LaTeX-rendering system.

---

## 4. Text Emphasis

Scientific writing often requires gene names, species names, important findings, filenames, functions, and variables to be visually distinguished.

### 4-1. Italics

Wrap text in single asterisks (`*`).

```markdown
*Escherichia coli*, *TP53*
```

Italics are commonly used for species names. Formatting conventions for gene and protein names differ by field and journal, so always confirm the relevant author guidelines.

### 4-2. Bold

Wrap text in double asterisks (`**`).

```markdown
**Significant findings**
```

Bold text is useful for emphasizing important findings or warnings, but excessive use can reduce readability.

### 4-3. Inline Code

Wrap filenames, functions, commands, or variables in single backticks.

```markdown
The analysis was performed using `main.py`, and the result was output using the `print()` function.
```

---

## 5. Creating Basic Data Tables

Markdown tables are useful for comparing experimental conditions and summarizing analytical results.

```markdown
| Experimental Group | Concentration (µM) | Cell Viability (%) | Significance |
| :--- | ---: | ---: | :---: |
| Control | 0.0 | 100.0 | — |
| Treatment A | 10.5 | 82.4 | N.S. |
| Treatment B | 50.0 | 45.1 | **\*** |
```

### Alignment Control

Use colons (`:`) in the separator row to control column alignment:

* `:---` — left aligned
* `---:` — right aligned
* `:---:` — centered

Right-aligning numerical data generally makes differences in decimal places and the number of digits easier to compare.

MD//WORKS v1.5.7 supports standard Markdown tables. More advanced features, such as merged cells, multi-row headers, table captions, table-specific footnotes, and detailed column-width control, are being considered for future versions.

---

## 6. Code Blocks for Technical Documents

If your research involves RNA-Seq pipelines, statistical scripts, image analysis, or other computational workflows, you can document the relevant code directly in Markdown.

Wrap multi-line code in triple backticks and specify the programming language after the opening backticks to enable syntax highlighting.

````markdown
```python
import pandas as pd

data = pd.read_csv("cell_data.csv")
mean_survival = data["survival_rate"].mean()

print(f"Mean survival: {mean_survival}%")
```
````

Common language identifiers include:

```text
python
r
bash
javascript
html
css
json
```

Language identifiers allow keywords, strings, numbers, and comments to be displayed in visually distinct styles.

When documenting code:

* Do not include passwords or API keys.
* Do not include confidential or personally identifiable data.
* Record the software and library versions used.
* Include important processing conditions and random seeds where reproducibility is required.
* Store very long programs in separate source files and include only the most relevant portions in the document.

---

## 7. Mathematical Equations

MD//WORKS v1.5.7 supports basic scientific notation using superscripts and subscripts.

```markdown
E = mc^2^
```

```markdown
H~2~O
```

Native LaTeX equation rendering using `$...$` for inline equations and `$$...$$` for display equations is being considered for v1.5.8 or a later release.

An example of LaTeX notation is shown below:

```markdown
$$
f(x) =
\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left(
-\frac{(x-\mu)^2}{2\sigma^2}
\right)
$$
```

In MD//WORKS v1.5.7, this syntax is not rendered as a formatted mathematical equation.

If complex equations are required now, consider:

* inserting equations as images;
* using Pandoc for final conversion;
* using a dedicated LaTeX environment; or
* waiting for a future version with mathematical rendering support.

---

## 8. Example Writing Workflow

1. **Create the skeleton**
   Write only the main headings first, such as `# Abstract`, `## Methods`, and `## Results`.

2. **List the main points**
   Add bullet points below each heading to establish the intended logical flow.

3. **Expand the points into prose**
   Convert the bullet points into complete sentences without worrying about final formatting.

4. **Use temporary footnote labels**
   Add labels such as `[^find_paper_later]` so that you can continue writing without interrupting your train of thought.

5. **Review the document structure**
   Use the Outline view and automatic TOC to verify the hierarchy and logical sequence.

6. **Prepare the final output**
   Convert or export the completed Markdown document into the format required for submission, publication, or distribution.

---

## 9. Features Available in MD//WORKS v1.5.7

* Headings
* Bulleted and numbered lists
* Bold and italic text
* Blockquotes
* Links and images
* Basic Markdown tables
* Inline code
* Code blocks with syntax highlighting
* Footnotes with automatic numbering
* Superscripts and subscripts
* Document Outline
* Automatic Table of Contents
* Viewer-based document distribution

### Features Being Considered for Future Releases

* LaTeX mathematical rendering
* Advanced tables
* Figure and table captions
* Cross-references
* Automatic numbering of figures, tables, and equations
* BibTeX and CSL integration

---

## 10. Conclusion

The main advantage of using Markdown for scientific and technical writing is that it allows authors to concentrate on logical structure and scientific content without being repeatedly interrupted by formatting and layout adjustments.

MD//WORKS v1.5.7 provides practical support for footnotes, superscripts, subscripts, basic tables, code presentation, document outlines, and automatic TOC generation.

Together, these features provide a lightweight environment for preparing research notes, technical reports, conference materials, and early manuscript drafts.

Start by building the document structure with headings, use meaningful temporary labels for footnotes, and prioritize the scientific narrative. The final visual appearance can be refined after the content is complete.

---

## 11. References

1. Krewinkel A, Winkler R. [Formatting Open Science: Agilely Creating Multiple Document Formats for Academic Manuscripts with Pandoc Scholar](https://doaj.org/article/16dc67bf1add495684b798be1d82c099). *PeerJ Computer Science*. 2017;3:e112.

2. Baumer B, Cetinkaya-Rundel M, Bray A, Loi L, Horton NJ. [R Markdown: Integrating a Reproducible Analysis Tool into Introductory Statistics](https://arxiv.org/abs/1402.1894). arXiv:1402.1894.
