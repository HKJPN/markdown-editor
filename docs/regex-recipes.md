# **🪄 Regex Recipes: The "Copy-Paste" Grimoire**

Welcome to the Dark Arts of Regular Expressions. Whether you want to clean up messy text or just look like a wizard to your coworkers, these recipes have you covered.

<!-- mdworks-toc:start -->

## Table of Contents

  - [1. The "Save My Sanity" Basics (Everyday Magic)](#1-the-save-my-sanity-basics-everyday-magic)
  - [2. The "Hold My Coffee" Advanced Tricks](#2-the-hold-my-coffee-advanced-tricks)
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


* **The Markdown Link Heist:** Search `\[(.*?)\]\((.*?)\)` ➔ Replace `Text: \1, URL: \2`
* *How it works:* Steals the title and the URL right out of markdown formatting. Great for building quick lists.


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
| `\1`, `\2` | Capturing groups. Swap parts around like `\2 - \1`. |
| `\0` or `$&` | The whole match. E.g., wrap things in brackets: `[\0]` |
| `\U\1\E` | SCREAMING CASE. Turns group 1 into UPPERCASE. |
| `\l\1` | lowercase. Just the first letter. Good for camelCasing. |