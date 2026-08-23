
# A Guide to Markdown for Scientific Writing

## Abstract

The primary advantage of using Markdown for scientific writing is that it allows you to focus on the logical structure and scientific content of your manuscript, without getting distracted by final layout and formatting.

While Markdown itself is a lightweight markup language, many Markdown editors and conversion tools support extended features like footnotes, mathematical equations, tables, and code blocks. By combining Markdown with conversion tools like Pandoc, you can draft research notes, technical reports, conference materials, and manuscript drafts in plain text, and later export them to formats such as Word, PDF, HTML, or LaTeX.

An effective workflow involves outlining your document with headings first, organizing the flow of your objectives, results, and interpretations. Only after the content and logical structure are solidified should you worry about applying specific journal formatting or finalizing the layout.

> **Important:** Some features—such as footnotes, tables, math equations, subscripts, and superscripts—are not part of the standard Markdown specification. They are extended syntax provided by specific editors or parsers. Consequently, the same Markdown file may render differently depending on the environment you use.

## Introduction

Have you ever lost valuable time during the writing process because a figure shifted, footnotes needed renumbering, or paragraph formatting unexpectedly changed? Most of these tasks have nothing to do with interpreting experimental results or building scientific arguments.

Word processors like Microsoft Word are excellent for creating the final, submission-ready document, as they allow you to edit in a "What You See Is What You Get" (WYSIWYG) environment. However, frequently adjusting layouts or changing formatting with a mouse during the drafting stage can severely disrupt your writing flow.

Writing in Markdown allows you to separate two distinct processes:

* **Drafting the content and building the document's logical structure.**
* **Styling the final layout and formatting.**

While writing, you simply use basic text symbols to indicate headings, emphasis, quotes, footnotes, tables, and code. The visual rendering and final layout are handled later by the editor’s preview function or a conversion tool like Pandoc.

## Why Use Markdown for Scientific Documents?

### 1. Maintain Your Writing Flow

You can add headings, emphasize terms, and insert footnotes without navigating complex menus. Keeping your hands on the keyboard helps you maintain your train of thought.

### 2. Automate Footnote Numbering

In Markdown environments that support footnotes, you can insert new footnotes in the middle of a paragraph or rearrange entire sections, and the system will automatically renumber them sequentially based on their appearance in the text.
*(Note: Footnote support is not universal. Verify that your specific editor or parser supports footnote syntax.)*

### 3. Focus on Scientific Content

By minimizing layout adjustments during drafting, you can direct your attention to the core tasks:

* Interpreting experimental data
* Verifying the alignment between hypotheses and results
* Constructing logical arguments
* Addressing limitations and alternative interpretations
* Refining your discussion

Markdown is not necessarily meant to replace Word or LaTeX as a final editing environment. A highly practical workflow is to draft the content and structure in Markdown, and then convert the finalized text into the Word, PDF, or LaTeX format required by your target journal.

Because Markdown is saved as plain text, it is also highly compatible with version control systems like Git, making it easy to track changes.

## 1. Managing Citations and Annotations

In scientific and technical writing, it is crucial to distinguish between direct quotes, bibliographic references, and author annotations.

Markdown uses "blockquotes" for quoted text and "footnotes" to separate supplementary information from the main text. Note, however, that blockquotes themselves do not have built-in features for managing citation metadata (like author, title, DOI).

### 1-1. Blockquotes

To display a quote from an external source, begin the line with a `>`.

**Input:**

```markdown
> Markdown allows authors to separate document structure from visual layout.

```

**Output:**

> Markdown allows authors to separate document structure from visual layout.

For multi-paragraph quotes, add a `>` at the beginning of each line or paragraph.

When quoting material in an academic context, ensure you provide the source immediately after the blockquote, in a footnote, or in the reference list.

### 1-2. Footnotes

In environments supporting footnotes, you can separate references, supplementary explanations, and drafting notes from the main text flow.

**Referencing a footnote in text:**

```markdown
Introducing specific transcription factors can induce pluripotency in somatic cells.[^takahashi2006]

```

**Defining the footnote:**

```markdown
[^takahashi2006]: Takahashi K, Yamanaka S. Cell. 2006.

```

Typically, `[^label]` indicates the reference point in the text, and `[^label]:` defines the footnote content.

### 1-3. Using Meaningful Labels

Footnote labels do not have to be numbers. During drafting, you can use descriptive tags.

```markdown
The new screening method efficiently isolated candidate compounds.[^screening_method]

This result requires further discussion.[^discussion_memo]

[^screening_method]: Add screening conditions and selection criteria here.
[^discussion_memo]: Check related previous studies and add to the discussion.

```

When rendered, labels like `screening_method` will automatically be converted to sequential numbers (1, 2, 3...) based on their order in the document.

> **Note:** Markdown's footnote feature is not a full reference management system. If you need to switch citation styles, manage DOIs, auto-generate bibliographies, or integrate with BibTeX/CSL, consider using tools like Zotero or Pandoc.

## 2. Inserting Images and Links

### 2-1. Images and Figures

To insert experimental graphs, microscopy images, or diagrams, use an exclamation mark `!`, square brackets `[]`, and parentheses `()`.

```markdown
![Graph showing cell survival rate after 48 hours of treatment](./images/fig1_survival_rate.png)

```

The text inside the square brackets is the "alt text" (alternative text). Instead of just writing "Graph" or "Figure 1", briefly describe what the image shows for accessibility.

### 2-2. Mermaid Diagrams

Mermaid is well suited to experimental designs, sample-processing flows, analysis pipelines, state transitions, system architectures, and the order of processing among participants. Use short, clear node names; do not distinguish states by color alone; and split complex diagrams into smaller ones.

It is not suitable for visualizations that must accurately show quantitative relationships in measured data, such as scatter plots, graphs with error bars, or heatmaps. Create these reproducibly with R, Python, or dedicated statistical software, and insert the resulting figure as an image.

Do not make an important conclusion depend on the diagram alone. Explain the diagram's purpose and main flow in the text immediately before or after it.

A standard Mermaid code block cannot by itself manage formal figure numbers, captions, or cross-references from the text. As with the guidance in "Images and Figures," documents prepared for submission require support from the output tool or a final editing step.

### 2-3. Hyperlinks

For links to external databases, public datasets, or online tools, wrap the display text in square brackets and the URL in parentheses.

```markdown
Raw data is available from the [NCBI Gene Expression Omnibus](https://www.ncbi.nlm.nih.gov/geo/).

```

## 3. Scientific and Chemical Symbols

In papers and documents for life sciences, medicine, chemistry, and physics, superscripts and subscripts are essential for chemical formulas, electrical charges, units, and exponents. However, formatting for **superscripts** and **subscripts** is not a standard feature in common Markdown flavors. If you want to ensure your text displays correctly across various platforms, we recommend using HTML tags rather than the Pandoc-compatible syntax (`~` and `^`). Please note that the following examples may not render properly depending on your environment.

### 3-1. Subscripts

Wrap the text in `<sub> </sub>`. Or warp the text in `~`


**Input:**

```markdown
H<sub>2</sub>O, CO<sub>2</sub>, A<sub>260</sub>/A<sub>280</sub>

H~2~O, CO~2~, A~260~/A~280~

```

**Output:**
H<sub>2</sub>O, CO<sub>2</sub>, A<sub>260</sub>/A<sub>280</sub>

H~2~O, CO~2~, A~260~/A~280~


### 3-2. Superscripts

Wrap the text in `<sup>　</sup>`. Or wrat the text in `^`

**Input:**

```markdown
Ca<sup>2+</sup>, 10<sup>6</sup> cells, cm<sup>2</sup>

Ca^2+^, 10^6^ cells, cm^2^

```

**Output:**
Ca<sup>2+</sup>, 10<sup>6</sup> cells, cm<sup>2</sup>

Ca^2+^, 10^6^ cells, cm^2^


## 4. Text Emphasis

### 4-1. Italics

Wrap the text in a single asterisk `*` or underscore `_`.

```markdown
*Escherichia coli*

```

**Output:** *Escherichia coli*

*(Biological genus and species names are generally italicized. Check your target journal's specific nomenclature guidelines for gene and protein symbols.)*

### 4-2. Bold

Wrap the text in double asterisks ``.

```markdown
**Key findings**

```

**Output:** **Key findings**

### 4-3. Inline Code

Wrap file names, function names, or variables in single backticks ```.

```markdown
The analysis was performed using `main.py`.

```

## 5. Basic Data Tables

Markdown tables are useful for summarizing experimental conditions or results.

```markdown
| Experimental Group | Conc. (µM) | Survival (%) | p-value | Sig. |
| --- | ---: | ---: | ---: | :---: |
| Control | 0.0 | 100.0 | — | — |
| Treatment A | 10.5 | 82.4 | 0.083 | ns |
| Treatment B | 50.0 | 45.1 | <0.001 | *** |

```

**Output:**

| Experimental Group | Conc. (µM) | Survival (%) | p-value | Sig. |
| --- | --- | --- | --- | --- |
| Control | 0.0 | 100.0 | — | — |
| Treatment A | 10.5 | 82.4 | 0.083 | ns |
| Treatment B | 50.0 | 45.1 | <0.001 | *** |

Add a colon `:` to the separator line to align columns (left `:---`, right `---:`, center `:---:`). Standard Markdown tables are not suited for merged cells or complex annotations; use HTML or LaTeX for advanced tables.

## 6. Code Blocks for Technical Documents

If your research involves statistical analysis or data processing, you can record your scripts directly in the document. Wrap multiple lines of code in triple backticks and specify the language.

```markdown
```python
import pandas as pd

data = pd.read_csv("cell_data.csv")
mean_survival = data["survival_rate"].mean()

print(f"Mean survival: {mean_survival:.1f}%")
```

```

Specifying a language (like `python`, `r`, `bash`) enables syntax highlighting in compatible editors.

## 7. Mathematical Equations

In Markdown environments supporting MathJax, KaTeX, or Pandoc, you can render equations using  [LaTeX notation](<BasicExamplesMathFormulasE.md>).

### Inline Math

Wrap the equation in single dollar signs `$`.

```markdown
Mass-energy equivalence is expressed as $E = mc^2$.

```

**Output:**
Mass-energy equivalence is expressed as $E = mc^2$.

### Display Math

For standalone equations on their own line, use double dollar signs `$$`.

```latex
$$
f(x)
=
\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\left(
-\frac{(x-\mu)^2}{2\sigma^2}
\right)
$$

```

This renders the probability density function of a normal distribution with mean $\mu$ and variance $\sigma^2$.

## 8. Example Writing Workflow

1. **Create the Skeleton:** Write only the main headings (e.g., Abstract, Introduction, Methods, Results, Discussion).
2. **Bullet the Main Points:** Under each heading, list the results, rationale, and interpretations using bullet points.
3. **Expand into Sentences:** Turn the bullet points into full paragraphs without worrying about fonts, margins, or exact figure placements.
4. **Use Temporary Footnotes:** Leave descriptive labels (e.g., `[^find_reference]`) for missing citations or facts to verify later.
5. **Organize Citations:** Finalize your bibliographic data manually or via a reference manager (Zotero, BibTeX).
6. **Final Export:** Convert the Markdown document to Word, PDF, or LaTeX (e.g., via Pandoc) and perform a final visual check to ensure everything meets the journal's formatting guidelines.

---

## Appendix: MD//WORKS Support Status and Version Info

The writing methods described in this guide can be easily applied using **MD//WORKS**, our dedicated Markdown editor.MD//WORKS v1.5.8 or later supports standard Markdown specifications as well as most of representative extended syntax:

* Headings
* Bulleted and numbered lists
* Bold and italics
* Subscripts and superscripts
* Blockquotes
* Links and images
* Inline code and fenced code blocks
* Basic Markdown tables
* Table of Contents (generated from headings)
* Footnote preview rendering
* Automatic footnote numbering
* Descriptive text labels in footnotes
* [LaTeX math](<BasicExamplesMathFormulasE.md>) rendering

### Future Extensions Under Consideration

Future updates, including a "Deep Editing Mode" for long-form writing, may explore:

* Advanced table creation
* Figure/table captions and auto-numbering
* Cross-referencing within the document
* BibTeX/CSL integration and reference management

## Conclusion

The greatest advantage of Markdown in scientific writing is maintaining your focus on logical structure and content, free from the constant interruptions of layout adjustments.

By combining the right editor, reference manager, and conversion tools, you can build a lightweight, flexible writing environment that handles everything from lab notes to final manuscript drafts. Just remember to verify your tool's specific flavor of Markdown and always review your final exported document.

## References

Krewinkel A, Winkler R. Formatting Open Science: Agilely Creating Multiple Document Formats for Academic Manuscripts with Pandoc Scholar. *PeerJ Computer Science*. 2017;3:e112. doi:10.7717/peerj-cs.112.

Baumer B, Çetinkaya-Rundel M, Bray A, Loi L, Horton NJ. R Markdown: Integrating a Reproducible Analysis Tool into Introductory Statistics. *Technology Innovations in Statistics Education*. 2014;8(1).
