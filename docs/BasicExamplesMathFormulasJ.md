# 数式表示の基本例

本エディタでは LaTeX 記法を用いて数式を描画できます。
インライン数式（文中の数式）は `$ ... $`、ディスプレイ数式（独立した行の中央寄せ）は `$$ ... $$` で囲みます。

## 書き方

- インライン: `$E = mc^2$` → $E = mc^2$
- ディスプレイ:

```

$$E = mc^2$$

```

## 空白・位置合わせ

数式中では通常のスペースは無視されるため、専用のコマンドを使います。

- スペース（小）: `$a \, b$` → $a \, b$
- スペース（大）: `$a \quad b$` → $a \quad b$
- 複数行の位置合わせ（`&` で位置を揃えます）:

```

$$\begin{aligned}   f(x) &= (x+1)^2 \\        &= x^2 + 2x + 1   \end{aligned}$$

```

## 基本演算子

- 加算・減算: `$+, -$` → $+, -$
- 乗算: `$\times$` または `$\cdot$` → $\times, \cdot$
- 除算: `$\div$` または分数 `$\frac{a}{b}$` → $\div, \frac{a}{b}$
- 等号・不等号: `$=, \neq$` → $=, \neq$
- 大なり・小なり: `$>, <$` → $>, <$
- 以上・以下: `$\geq, \leq$` → $\geq, \leq$
- 近似・合同・比例: `$\approx, \equiv, \propto$` → $\approx, \equiv, \propto$

## 指数と根号

- 上付き（指数）: `$x^2$` → $x^2$
- 下付き（添え字）: `$x_1$` → $x_1$
- 上下同時: `$x_i^2$` → $x_i^2$
- 平方根: `$\sqrt{x}$` → $\sqrt{x}$
- n乗根: `$\sqrt[n]{x}$` → $\sqrt[n]{x}$

## 分数と比率

- 分数: `$\frac{分子}{分母}$` → $\frac{分子}{分母}$
- 二項係数: `$\binom{n}{k}$` → $\binom{n}{k}$

## 書体・フォント

- 太字（ベクトル・行列など）: `$\mathbf{A}, \boldsymbol{x}$` → $\mathbf{A}, \boldsymbol{x}$
- 筆記体（計算量のオーダーなど）: `$\mathcal{O}(N \log N)$` → $\mathcal{O}(N \log N)$
- ローマン体（単位や微分のdなど、斜体にしない文字）: `$\mathrm{d}x, \mathrm{Hz}$` → $\mathrm{d}x, \mathrm{Hz}$

## ギリシャ文字

- 小文字: `$\alpha, \beta, \gamma, \delta, \epsilon, \pi, \sigma, \theta, \phi, \psi, \omega$`
- 大文字: `$\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Phi, \Psi, \Omega$`
- `A, B, E` などは `\Alpha` のように書かず、そのまま `A, B, E` と入力します。

## 集合と論理

- 属する・属さない: `$\in, \notin$` → $\in, \notin$
- 包含: `$\subset, \subseteq, \supset, \supseteq$` → $\subset, \subseteq, \supset, \supseteq$
- 和集合・積集合: `$\cup, \cap$` → $\cup, \cap$
- 空集合・無限大: `$\emptyset, \infty$` → $\emptyset, \infty$
- 全称・存在: `$\forall, \exists$` → $\forall, \exists$
- 否定・かつ・または: `$\neg, \land, \lor$` → $\neg, \land, \lor$
- 含意・同値: `$\implies, \iff$` → $\implies, \iff$
- 数集合: `$\mathbb{R}, \mathbb{Z}, \mathbb{N}, \mathbb{Q}, \mathbb{C}$` → $\mathbb{R}, \mathbb{Z}, \mathbb{N}, \mathbb{Q}, \mathbb{C}$

## 幾何学・ベクトル解析

- 角度（度）: `$90^\circ$` → $90^\circ$
- 角・三角形: `$\angle \mathrm{ABC}, \triangle \mathrm{ABC}$` → $\angle \mathrm{ABC}, \triangle \mathrm{ABC}$
- 直交・平行: `$\perp, \parallel$` → $\perp, \parallel$
- ナブラ（微分演算子）: `$\nabla$` → $\nabla$

## 括弧と区切り

- 通常の括弧: `$(x), [x], \{x\}$`（波括弧は `\{ \}` とエスケープします）
- 大きさの自動調整（分数などを挟む場合）: `$\left( \frac{a}{b} \right)$`
- 絶対値・ノルム: `$|x|, \|x\|$`

## 総和・総積・極限

- 総和: `$\sum_{i=1}^{n} x_i$`
- 総積: `$\prod_{i=1}^{n} x_i$`
- 極限: `$\lim_{x \to 0} f(x)$`

## 微分・積分

- 積分: `$\int_{a}^{b} f(x) \, \mathrm{d}x$`
- 二重・周回積分: `$\iint, \oint$`
- 微分: `$\frac{\mathrm{d}y}{\mathrm{d}x}, \frac{\partial f}{\partial x}$`

## 関数と演算子

必ずバックスラッシュ（`\`）を付けて記述します。

- 三角関数: `$\sin \theta, \cos \theta, \tan \theta$`
- 対数・指数: `$\log x, \ln x, \exp x$`

## 矢印と関係

- 矢印: `$\to, \rightarrow, \Rightarrow, \Leftrightarrow$`

## 行列と場合分け

- 行列:

```

$$\begin{pmatrix}   a & b \\   c & d   \end{pmatrix}$$

```

- 場合分け:

```

$$\vert{}x\vert{} = \begin{cases}   x & (x \geq 0) \\   -x & (x < 0)   \end{cases}$$

```

## 省略記号と装飾

- 省略記号: `$\dots, \cdots, \vdots, \ddots$`
- 装飾: `$\vec{a}, \bar{x}, \hat{x}, \tilde{x}$`
- 数式内のテキスト: `$\text{ただし } x>0$`

## 実用的な数式例

**二次方程式の解の公式:**

```

$$ax^2 + bx + c = 0 \implies x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

```

**オイラーの等式:**

```

$$e^{i\pi} + 1 = 0$$

```

**正規分布の確率密度関数:**

```

$$f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)$$

```

```