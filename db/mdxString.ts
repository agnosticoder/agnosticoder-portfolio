const mdxString = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5

www.example.com

:dog:
:cat:

**Heading 5 Bold: The quick brown fox jumps over the lazy dog.**

*Italic: The quick brown fox jumps over the lazy dog.*

**_Bold and Italic: The quick brown fox jumps over the lazy dog._**

> BlockQuote: The quick brown fox jumps over the lazy dog.

> The quick brown fox jumps over the lazy dog.
> 
> The quick brown fox jumps over the lazy dog.
> 
> The quick brown fox jumps over the lazy dog.

> The quick brown fox jumps over the lazy dog.
>> The quick brown fox jumps over the lazy dog.
>>> The quick brown fox jumps over the lazy dog.
> **The quick brown fox** *jumps over the lazy dog.*

Monospaced

\`\`The quick brown fox jumps over the lazy dog\`\`

<ins>The quick brown fox jumps over the lazy dog.</ins>

Boxed

<table><tr><td>The quick brown fox jumps over the lazy dog.</td></tr></table>

Subscript <sub>The quick brown fox jumps over the lazy dog.</sub>
Superscript <sup>The quick brown fox jumps over the lazy dog.</sup>

A class method is an instance method of the class object. When a new class is created, an object of type \`Class\` is initialized and assigned to a global constant (Mobile in this case).

\`\`\`
public static String monthNames[] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
\`\`\`

\`\`\`java
public static String monthNames[] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
\`\`\`

<p align="center">
<img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" height="100" border="10"/>
</p>

<h3 align="center"> My latest Medium posts </h3>

<table>
<tr>
<td width="33%">
The quick brown fox jumps over the lazy dog.
</td>
<td width="33%">
The quick brown fox jumps over the lazy dog.
</td>
<td width="33%">
The quick brown fox jumps over the lazy dog.
</td>
</tr>
</table>

[The-Ultimate-Markdown-Cheat-Sheet](https://github.com/lifeparticle/Markdown-Cheatsheet)

![alt text](https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80)

<img src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif" />

Ordered List
1. One
2. Two
3. Three

Ordered List with sub-list
1. First level
    1. Second level
        - Third level
            - Fourth level
2. First level
    1. Second level
3. First level
    1. Second level


Unordered list:
* 1
    * Second level
        * third level
* 2
* 3

Task List
- [x] Fix Bug 223
- [ ] Add Feature 33
- [ ] Add unit tests

---

`.trim();

export default mdxString;