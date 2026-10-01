# **🪄 Regex Recipes: The "Copy-Paste" Grimoire**

Welcome to the Dark Arts of Regular Expressions. Whether you want to clean up messy text or just look like a wizard to your coworkers, these recipes have you covered.

<!-- mdworks-toc:start -->

## Table of Contents

  - [1. The "Save My Sanity" Basics (Everyday Magic)](#1-the-save-my-sanity-basics-everyday-magic)
  - [2. The "Hold My Coffee" Advanced Tricks](#2-the-hold-my-coffee-advanced-tricks)
    - [Matching line breaks between MD//WORKS and GitHub `.md` files](#matching-line-breaks-between-mdworks-and-github-md-files)
  - [3. The Survival Cheat Sheet](#3-the-survival-cheat-sheet)
    - [Quantifiers (Greedy vs. Lazy)](#quantifiers-greedy-vs-lazy)
    - [The "A-Team" Character Classes](#the-a-team-character-classes)
    - [Boundaries (Putting things in their place)](#boundaries-putting-things-in-their-place)
    - [Replacement Sorcery](#replacement-sorcery)

<!-- mdworks-toc:end -->

## 1. The "Save My Sanity" Basics (Everyday Magic)

Don't think, just copy-paste.

* **Nuke Trailing Whitespace:** Search `\s+$` ➔ Replace with ` ` (Empty)
* *Why:* Because your linter won't stop complaining about invisible spaces.


* **Vaporize Empty Lines:** Search `^\n` or `^$\n` ➔ Replace with ` ` (Empty)
* **The "Show Me The Money" (Number Extractor):** `\d+`
* *Pro-tip:* Use `-?\d+(\.\d+)?` if you like decimals and negative numbers.


* **The "Sinful" HTML Stripper:** `<[^>]+>`
* *Note:* Yes, parsing HTML with regex is technically a sin that summons Cthulhu, but sometimes you just need a quick fix.


* **String Catcher:** `"[^"]*"`
* *Why:* Grabs everything inside double quotes without accidentally grabbing the rest of the file.



## 2. The "Hold My Coffee" Advanced Tricks

For when you need to flex your regex muscles.

* **Catching "the the" Typos:** Search `\b(\w+)\s+\1\b`
* *How it works:* We all do do this typo. The `\1` forces the engine to match whatever word it just found in the first group. Catch yourself red-handed!


* **The Markdown Link Heist:** Search `\[(.*?)\]\((.*?)\)` ➔ Replace `Text: $1, URL: $2`
* *How it works:* Steals the title and the URL right out of markdown formatting. Great for building quick lists.


### Matching line breaks between MD//WORKS and GitHub `.md` files

MD//WORKS displays an ordinary newline as a line break. In a `.md` file rendered on GitHub, an ordinary newline within the same paragraph is normally displayed as a space instead. GitHub Issue and pull-request comment fields can handle line breaks differently from repository `.md` files, so this recipe is specifically for repository files.

Use these recipes **only on ordinary body paragraphs**:

| Direction | Search | Replace |
| --- | --- | --- |
| MD//WORKS → GitHub `.md` | `([^\s\\])(\r?\n)(?=\S)` | `$1  $2` (two ASCII spaces between `$1` and `$2`) |
| GitHub `.md` → MD//WORKS | `([^\s\\])(\r?\n)(?=\S)` | `$1 ` (one trailing ASCII space) |

The first recipe turns an ordinary newline into Markdown's two-space hard break. The second joins source lines from a GitHub paragraph with one space, so MD//WORKS does not display an extra line break. It is not intended to remove a two-space hard break created by the first recipe; that line already represents an intentional visible break in both renderers. The pattern handles both LF and CRLF, skips blank lines, and leaves existing two-space or backslash hard breaks unchanged.

**Scope and workflow warning:** Do not run either replacement across an entire file containing headings, lists, blockquotes, tables, or code blocks. MD//WORKS cannot limit Find and Replace to a selection. In addition, **Replace** (one match) can fail with this lookahead pattern because the app reapplies the regex only to the matched text, without the lookahead character; **Replace All** evaluates the whole document but is unsafe for a mixed Markdown file. Instead, use an external editor that supports regex replacement within a selection: select only the body paragraph(s), then apply the appropriate Search and Replace values above. In the search pattern, `\1` would be a backreference to group 1; in the replacement field, use `$1` and `$2` for captured text.


* **The "Valid Time Only" Bouncer (HH:MM):** `\b([01][0-9]|2[0-3]):[0-5][0-9]\b`
* *How it works:* A lazy `\d{2}:\d{2}` lets fake times like `99:99` into the club. This pattern checks IDs at the door (strictly 00:00 to 23:59).


* **The "Karen" Filter (Negative Lookahead):** `^(?!.*ForbiddenWord).*$`
* *How it works:* "I want to speak to the manager of this log file." Extracts entire lines that specifically DO NOT contain your target word.


* **The Price Tag Sniper (Positive Lookbehind):** Search `(?<=Price: )\d+`
* *How it works:* Looks at "Price: 1000", totally ignores the word "Price:", and only targets the "1000". Stealthy.


* **The Commatizer (Lookaround Black Magic):** Search `(?<=\d)(?=(\d{3})+(?!\d))` ➔ Replace `,`
* *How it works:* Turns `1000000` into `1,000,000`. It looks like somebody sneezed on the keyboard, but it flawlessly finds the "gaps" between numbers and injects commas.



---

## 3. The Survival Cheat Sheet

Forgot what that weird symbol does? Here is a quick reminder.

### Quantifiers (Greedy vs. Lazy)

* Regex is inherently greedy. It wants to eat your whole string. Use `?` to make it lazy.
| Symbol | Meaning | Example / Result |
| :--- | :--- | :--- |
| `*` | 0 or more (Greedy) | `<.*>` on `<b>foo</b>` matches the WHOLE string `<b>foo</b>`. |
| `*?` | 0 or more (Lazy) | `<.*?>` on `<b>foo</b>` matches just `<b>`. |
| `+` | 1 or more | `a+` matches `aaa` as one giant block. |
| `?` | 0 or 1 | `https?` matches both `http` and `https`. |
| `{n,m}` | Min to Max | `\d{2,4}` matches between 2 and 4 digits. |

### The "A-Team" Character Classes

| Class | What it matches | Real World Use Case |
| --- | --- | --- |
| `\w` | `[A-Za-z0-9_]` | Grabbing variable names. |
| `\W` | NOT `\w` | Splitting text by punctuation/spaces. |
| `\d` | `[0-9]` | Phone numbers, IDs, dates. |
| `\D` | NOT `\d` | Stripping numbers out of a name field. |
| `\s` | Whitespace | Spaces, tabs, and newlines. |
| `\S` | NOT `\s` | Quick n' dirty URL/Email extraction (`\S+@\S+`). |

### Boundaries (Putting things in their place)

| Anchor | Meaning | Real World Use Case |
| --- | --- | --- |
| `^` | Start of line | `^#` finds Markdown headers. |
| `$` | End of line | `;$` finds missing semicolons (or existing ones). |
| `\b` | Word Boundary | `\bcat\b` finds "cat", but ignores "category" or "bobcat". |

### Replacement Sorcery

*Careful: This is for the replacement field, not the search field!*

| Token | Result |
| --- | --- |
| `$1`, `$2`, ... | Capturing groups. Swap parts around like `$2 - $1`. (`\1` is a search-pattern backreference, not a replacement token.) |
| `$&` | The whole match. E.g., wrap words by searching `\w+` and replacing with `[$&]`. |
| `\n`, `\r`, `\t`, `\\` | Newline, carriage return, tab, and a literal backslash. |

MD//WORKS replacement strings do **not** support `\0`, `\1`, `\2`, `\U`, `\L`, `\u`, `\l`, or `\E`. Use `$&` or `$1`, `$2`, ... where applicable; case conversion is not available in the replacement field.
