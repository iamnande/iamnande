# wireframes

low-fi layout structures for each section of `/`.

---

## global: nav

```
+-------------------------------------------------------------------------------------+
|  [name / logo]        [philosophy]  [curriculum vitae ↓*]  [colophon]        [vcs]  |
+-------------------------------------------------------------------------------------+
```

`*` curriculum vitae has a tooltip on hover offering the pdf download.
`[vcs]` vcs icon/link, last right position links to the source repo.

on initial load: nav is transparent. text sits directly on the hero background.
on scroll: surface bar fades in behind the nav. sticky from that point forward.

---

## global: footer

```
+--------------------------------------------------+
|                                                  |
|                      [name]                      |
|                    [one-liner]                   |
|                                                  |
|   [philosophy]  [curriculum vitae]  [colophon]   |
|                                                  |
|              [↓ curriculum vitae pdf]            |
|                                                  |
+--------------------------------------------------+
```

persistent. quiet. centered. pdf download (resume) always reachable.

---

## hero

```
+--------------------------------------------------+
|                                                  |
|                                                  |
|                    [epigraph]                    |
|                [career one-liner]                |
|                                                  |
|                      [cta]                       |
|                                                  |
|                                                  |
|                      [ ↓ ]                       |
+--------------------------------------------------+
```

full-bleed. vertically and horizontally centered.

epigraph leads - larger, more breath. career line sits beneath at a quieter
scale. together they answer "who is this?" on two levels.

scroll indicator pinned to bottom-center of the viewport. animated with a
subtle pulse or gentle bounce. disappears rather quickly once the user scrolls.

---

## current role

```
+--------------------------------------------------+
|                                                  |
|            [label: where i am now]               |
|                                                  |
|        [company]   [title]   [tenure]            |
|                                                  |
|      [brief on what you're building / doing]     |
|                                                  |
+--------------------------------------------------+
```

compact. factual. not a resume entry - a statement of the times and tasks.

---

## work history

```
+--------------------------------------------------+
|                                                  |
|             [label: where i've been]             |
|                                                  |
|     [company] .................... [years]       |
|                    [role]                        |
|               [one-line impact]                  |
|                                                  |
|     [company] .................... [years]       |
|                    [role]                        |
|               [one-line impact]                  |
|                                                  |
|                      ...                         |
|                                                  |
+--------------------------------------------------+
```

timeline feel. scannable. impact over description.

---

## projects

```
+----------------------------------------------------+
|                                                    |
|            [label: things i'm building]            |
|                                                    |
|      +----------+  +----------+  +----------+      |
|      | [name]   |  | [name]   |  | [name]   |      |
|      | [tags]   |  | [tags]   |  | [tags]   |      |
|      | [blurb]  |  | [blurb]  |  | [blurb]  |      |
|      | [vcs?]   |  | [vcs?]   |  | [vcs?]   |      |
|      | [write?] |  | [write?] |  | [write?] |      |
|      +----------+  +----------+  +----------+      |
|                                                    |
+----------------------------------------------------+
```

card grid. max of 3 columns to start (base of 1 by viewport). 

what it is, why it matters, where to find it.

both link slots are optional - vcs when the repo exists, write-up when the
article does.

---

## contact

```
+--------------------------------------------------+
|                                                  |
|               [label: let's talk]                |
|                                                  |
|                  [one-liner]                     |
|                                                  |
|         [linkedin]   [github]   [email]          |
|                                                  |
+--------------------------------------------------+
```

minimal. links, not a form. form inputs are for things with structural bearing.

---

## /philosophy

```
+--------------------------------------------------+
|                                                  |
|   [title]                                        |
|                                                  |
|   [epigraph / pull quote]                        |
|                                                  |
|   [section heading]                              |
|   [body copy]                                    |
|                                                  |
|   [section heading]                              |
|   [body copy]                                    |
|                                                  |
|   ...                                            |
|                                                  |
+--------------------------------------------------+
```

left-aligned. long-form reading. content is the philosophy.md rendered
directly.

atkinson hyperlegible for body. generous line height and measure.

---

## /colophon

```
+--------------------------------------------------+
|                                                  |
|   [title]                                        |
|                                                  |
|   [epigraph / pull quote]                        |
|                                                  |
|   [section heading]                              |
|   [body copy]                                    |
|                                                  |
|   [section heading]                              |
|   [body copy]                                    |
|                                                  |
|   ...                                            |
|                                                  |
+--------------------------------------------------+
```

left-aligned. long-form reading. same treatment as philosophy.

---

## /curriculum-vitae

```
+--------------------------------------------------+
|                                                  |
|   [name]                                         |
|   [title / one-liner]                            |
|                                                  |
|   [section: experience]                          |
|   [company] .................... [years]         |
|   [role]                                         |
|   [impacts]                                      |
|                                                  |
|   [section: skills / focus areas]                |
|   [tag]  [tag]  [tag]  [tag]                     |
|                                                  |
|   [section: service]                             |
|   [entry]                                        |
|                                                  |
+--------------------------------------------------+
```

left-aligned. structured but not sterile. more detailed than the homepage
history section. pdf download available via nav tooltip and footer.
