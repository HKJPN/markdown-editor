# Basic Examples of Math Formulas

This editor allows you to write math formulas using LaTeX syntax.
Enclose inline formulas with `$ ... $` and display formulas (centered on a new line) with `$$ ... $$`.

## How to Write

- Inline: `$E = mc^2$` → $E = mc^2$
- Display:

```

$$E = mc^2$$

```

## Spacing & Alignment

Regular spaces are ignored in math mode. Use specific commands instead.

- Small space: `$a \, b$` → $a \, b$
- Large space: `$a \quad b$` → $a \quad b$
- Multi-line alignment (align with `&`):

```

$$\begin{aligned}   f(x) &= (x+1)^2 \\        &= x^2 + 2x + 1   \end{aligned}$$

```

## Basic Operators

- Addition / Subtraction: `$+, -$` → $+, -$
- Multiplication: `$\times$` or `$\cdot$` → $\times, \cdot$
- Division: `$\div$` or fraction `$\frac{a}{b}$` → $\div, \frac{a}{b}$
- Equality / Inequality: `$=, \neq$` → $=, \neq$
- Greater / Less than: `$>, <$` → $>, <$
- Greater / Less than or equal to: `$\geq, \leq$` → $\geq, \leq$
- Approximation / Congruence / Proportional: `$\approx, \equiv, \propto$` → $\approx, \equiv, \propto$

## Exponents & Roots

- Superscript (Exponent): `$x^2$` → $x^2$
- Subscript (Index): `$x_1$` → $x_1$
- Both at once: `$x_i^2$` → $x_i^2$
- Square root: `$\sqrt{x}$` → $\sqrt{x}$
- n-th root: `$\sqrt[n]{x}$` → $\sqrt[n]{x}$

## Fractions & Binomials

- Fraction: `$\frac{numerator}{denominator}$` → $\frac{numerator}{denominator}$
- Binomial coefficient: `$\binom{n}{k}$` → $\binom{n}{k}$

## Fonts & Styles

- Bold (Vectors, Matrices, etc.): `$\mathbf{A}, \boldsymbol{x}$` → $\mathbf{A}, \boldsymbol{x}$
- Calligraphic (Big O notation, etc.): `$\mathcal{O}(N \log N)$` → $\mathcal{O}(N \log N)$
- Roman (Non-italicized text like units or differential d): `$\mathrm{d}x, \mathrm{Hz}$` → $\mathrm{d}x, \mathrm{Hz}$

## Greek Letters

- Lowercase: `$\alpha, \beta, \gamma, \delta, \epsilon, \pi, \sigma, \theta, \phi, \psi, \omega$`
- Uppercase: `$\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Phi, \Psi, \Omega$`
- For uppercase letters like `A, B, E`, simply type `A, B, E` instead of `\Alpha`.

## Sets & Logic

- Element of / Not an element of: `$\in, \notin$` → $\in, \notin$
- Subset / Superset: `$\subset, \subseteq, \supset, \supseteq$` → $\subset, \subseteq, \supset, \supseteq$
- Union / Intersection: `$\cup, \cap$` → $\cup, \cap$
- Empty set / Infinity: `$\emptyset, \infty$` → $\emptyset, \infty$
- For all / Exists: `$\forall, \exists$` → $\forall, \exists$
- Not / And / Or: `$\neg, \land, \lor$` → $\neg, \land, \lor$
- Implies / Equivalent: `$\implies, \iff$` → $\implies, \iff$
- Number sets: `$\mathbb{R}, \mathbb{Z}, \mathbb{N}, \mathbb{Q}, \mathbb{C}$` → $\mathbb{R}, \mathbb{Z}, \mathbb{N}, \mathbb{Q}, \mathbb{C}$

## Geometry & Vector Calculus

- Degrees: `$90^\circ$` → $90^\circ$
- Angle / Triangle: `$\angle \mathrm{ABC}, \triangle \mathrm{ABC}$` → $\angle \mathrm{ABC}, \triangle \mathrm{ABC}$
- Perpendicular / Parallel: `$\perp, \parallel$` → $\perp, \parallel$
- Nabla (Del operator): `$\nabla$` → $\nabla$

## Brackets & Delimiters

- Standard brackets: `$(x), [x], \{x\}$` (Escape curly braces using `\{ \}`)
- Auto-sizing (for fractions, etc.): `$\left( \frac{a}{b} \right)$`
- Absolute value / Norm: `$|x|, \|x\|$`

## Sums, Products & Limits

- Sum: `$\sum_{i=1}^{n} x_i$`
- Product: `$\prod_{i=1}^{n} x_i$`
- Limit: `$\lim_{x \to 0} f(x)$`

## Calculus

- Integral: `$\int_{a}^{b} f(x) \, \mathrm{d}x$`
- Double / Contour integral: `$\iint, \oint$`
- Derivative: `$\frac{\mathrm{d}y}{\mathrm{d}x}, \frac{\partial f}{\partial x}$`

## Functions & Operators

Always prepend with a backslash (`\`).

- Trigonometric: `$\sin \theta, \cos \theta, \tan \theta$`
- Logarithms / Exponentials: `$\log x, \ln x, \exp x$`

## Arrows & Relations

- Arrows: `$\to, \rightarrow, \Rightarrow, \Leftrightarrow$`

## Matrices & Cases

- Matrix:

```

$$\begin{pmatrix}   a & b \\   c & d   \end{pmatrix}$$

```

- Cases (Piecewise functions):

```

$$\vert{}x\vert{} = \begin{cases}   x & (x \geq 0) \\   -x & (x < 0)   \end{cases}$$

```

## Ellipses & Accents

- Ellipses: `$\dots, \cdots, \vdots, \ddots$`
- Accents / Vectors: `$\vec{a}, \bar{x}, \hat{x}, \tilde{x}$`
- Text within formulas: `$\text{where } x>0$`

## Practical Examples

**Quadratic Formula:**

```

$$ax^2 + bx + c = 0 \implies x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

```

**Euler's Identity:**

```

$$e^{i\pi} + 1 = 0$$

```

**Probability Density Function of Normal Distribution:**

```

$$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)$$

```
