# Scientific Writing Guide with Markdown

When writing academic papers or technical reports, word processors like Microsoft Word can often distract you with layout adjustments. Markdown allows you to completely separate "content structure" from "visual presentation," enabling you to immerse yourself in typing without interrupting your thought process.

This manual covers advanced syntax particularly useful for life sciences and technical writing, along with how to maximize your efficiency using the editor's **formatting toolbar**.

---

## 1. Smart Citation & Annotation Management (Footnotes)

In academic writing, manually managing numbering for a vast number of previous studies or references is highly tedious. Markdown's footnote feature handles this by automatically generating sequential numbers.

### Write Without Interruption Using "Temporary Labels"
The identifier inside the footnote brackets does not have to be a number; you can use **any alphabet or descriptive word**. During your first draft, simply drop in a temporary keyword and let the system handle the numbering logic.

**[Input Example]**
```markdown
An important factor has been suggested in the cellular reprogramming process[^takahashi2006].
Furthermore, utilizing the latest screening methods has enabled efficient identification[^screening_method].
We will proceed with further validation[^todo_memo].

[^takahashi2006]: Takahashi & Yamanaka (2006) Cell...
[^todo_memo]: Add further discussion here later.
[^screening_method]: Detailed protocol regarding the XX method.

```

**[Rendered Preview]**
In the preview screen, your temporary labels are ignored and automatically replaced with clean, sequential numbers (**1, 2, 3...**) **based on the order they appear in the text**. Even if you rearrange paragraphs later, the numbers will automatically recalculate, ensuring no broken references.

---

## 2. Scientific & Chemical Notations (Subscript/Superscript) & Text Formatting

Frequently used notations in life sciences—such as chemical formulas, ionic charges, and statistical significance (p-values)—can be written entirely from the keyboard. You can also use the toolbar buttons for quick formatting.

### Subscript (`~`)

Enclosing text with tildes (`~`) renders it as a subscript. Primarily used for chemical formulas.

* **Input:** `H~2~O` ➔ **Output:** H₂O
* **Input:** `CO~2~ Incubator` ➔ **Output:** CO₂ Incubator

### Superscript (`^`)

Enclosing text with carets (`^`) renders it as a superscript. Used for ions, powers, or units.

* **Input:** `Ca^2+^` ➔ **Output:** Ca²⁺
* **Input:** `p < 0.05^*^` ➔ **Output:** p < 0.05*

### 💡 Leverage Toolbar Shortcuts

Select your text and click a toolbar button to instantly insert Markdown tags:

* **Italics for Gene Names/Scientific Names:** Select text and click **`[I]`** to wrap it in asterisks (`*Scientific Name*`).
* **Bold for Statistical Significance or Key Terms:** Select text and click **`[B]`** to wrap it in double asterisks (`Bold Text`).

---

## 3. Creating Advanced Data Tables

Tables are essential for comparing experimental conditions or organizing analytical data. While you can type pipes (`|`) and hyphens (`-`) manually, the **`[⊞ Table]`** button makes it effortless.

### Insert a Table Template with One Click

Click the **`[⊞ Table]`** button on the toolbar to instantly generate a standard table template at your cursor:

```markdown
| Header | Header |
| --- | --- |
| Cell | Cell |

```

Simply replace the placeholder text with your experimental data.

### Controlling Column Alignment

You can align text (Left, Center, Right) by altering the hyphens (`-`) and colons (`:`) in the second row. Right-alignment is highly recommended for numerical data to improve readability.

* `:---`  (Left-align)
* `:---:` (Center-align)
* `---:`  (Right-align: Ideal for numbers)

**[Input Example (After editing)]**

```markdown
| Group | Concentration (µM) | Cell Viability (%) | Significance |
| :--- | ---: | ---: | :---: |
| Control (Vehicle) | 0.0 | 100.0 | - |
| Treatment A | 10.5 | 82.4 | N.S. |
| Treatment B | 50.0 | 45.1 | **\*** |

```

*Note: Use the **live preview** side-by-side to immediately catch and fix any structural issues, such as missing pipes.*

---

## 4. Mathematical Expressions (Math / LaTeX)

Complex equations required for papers and reports can be beautifully rendered using LaTeX notation. Choose between embedding them inline or displaying them as standalone blocks.

### Inline Math (Embedded within sentences)

Surrounding an expression with a single dollar sign (`$`) naturally embeds the equation into your text flow.

* **Input:** `Einstein's mass-energy equivalence is represented by $E = mc^2$.`
* **Output:** Einstein's mass-energy equivalence is represented by $E = mc^2$.

### Display Math (Standalone blocks)

Surrounding an expression with double dollar signs (`$$`) centers the equation in a dedicated, prominent block—ideal for complex formulas, integrals, or matrices.

**[Input Example]**

```markdown
The probability density function of a normal distribution is defined as:

$$
f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
$$

```

**[Rendered Preview]**
The probability density function of a normal distribution is defined as:

$$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

---

## 5. Code Snippets for Data Analysis & Tech Docs

Perfect for documenting RNA-Seq pipelines or sharing statistical analysis scripts (R, Python, etc.).

### Inline Code (For programming terms within text)

To clearly distinguish function names or filenames within a sentence, enclose them in single backticks (```).

* **Input:** `We executed the script via main.py and verified outputs via the print() function.`
* **Output:** We executed the script via `main.py` and verified outputs via the `print()` function.
* **💡 Shortcut:** Highlight your text and click the **`[` `]`** button on the toolbar.

### Code Blocks (Multi-line Source Code)

For longer snippets, wrap your code in triple backticks (`````). Click the **`[{ } Code]`** button to insert the template instantly.

### Syntax Highlighting

Adding the language name (e.g., `python`, `r`, `bash`) immediately after the opening triple backticks enables automatic code color-coding, drastically improving readability.

**[Input Example]**

```markdown
```python
import pandas as pd
import matplotlib.pyplot as plt

# Load data and calculate mean cell viability
data = pd.read_csv("cell_data.csv")
mean_survival = data['survival_rate'].mean()
print(f"Mean Survival: {mean_survival}%")
```



**[Rendered Preview]**
The preview window automatically highlights keywords (`import`), strings, and comment lines based on the specified language's rules.
