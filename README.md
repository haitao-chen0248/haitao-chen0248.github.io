# Haitao Chen's Homepage

Source of my personal academic website, [haitao-chen0248.github.io](https://haitao-chen0248.github.io).

Built with [Astro](https://astro.build): static pages, no client framework, light and dark themes.

## Quick start

Requires Node.js 22.12 or newer (the deploy builds with Node 24, set in `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run check     # type-check pages and content
```

## Use it for your own site

1. Set `site` in `astro.config.mjs` to your URL.
2. Replace every value in `src/config.ts`. Your `name` there is the one bolded in author lists.
3. Replace `src/assets/images/headshot.jpg` and the intro paragraph in `src/pages/index.astro`.
4. Replace the entries in `src/content/` and the images in `src/assets/images/`.

## Structure

| Path | Contents |
| --- | --- |
| `src/config.ts` | Name, role, home page title and description, research interests, profile links, menu |
| `src/pages/` | Pages; `index.astro` holds the intro |
| `src/layouts/` | Page shell: `<head>` metadata, header, footer |
| `src/content/` | Publications, talks, news, education, teaching |
| `src/assets/images/` | Headshot and figures, converted to WebP at build time |
| `src/components/` | Header, footer, publication entry, icons, video embed |
| `src/utils/` | Shared helpers: dates, sorting, profile links, share card version |
| `src/styles/global.css` | Color, type, and spacing tokens for both themes |
| `public/` | Files served as-is: favicons, `robots.txt`, `cv.pdf` |

Content is validated against `src/content.config.ts`, so a missing field or a bad date fails the build.

## Content

Entries appear in file order, so put new ones at the top.

**Publication** (`src/content/publications.yaml`):

```yaml
- id: short-unique-name
  title: Paper title
  authors: First Author, Your Name, ..., Last Author   # "*" marks co-first authors
  venue: Journal Name
  year: 2026
  note: Editors' Pick                  # optional badge
  featured: true                       # optional: also list on the home page
  image: ../assets/images/pubs/figure.jpg
  imageAlt: One-line description of the figure
  links:
    - { label: Journal, url: "https://doi.org/..." }
  bibtex: |                            # optional: adds a Cite button and joins /publications.bib
    @article{...}
```

**News**: one Markdown file per item in `src/content/news/`, named `YYYY-MM-name.md`. The home page shows the three newest.

```markdown
---
date: 2026-10
title: "Headline"
summary: One sentence for the home page.
images:                                # optional, up to six; several play as a slideshow
  - src: ../../assets/images/news/photo.jpg
    alt: What the photo shows
---

Full text in Markdown.
```

**Talk** (`talks.yaml`): `youtube` is the video ID; `paper` is a publication `id` and adds a Paper link.

**Teaching** (`teaching.yaml`): course, term, role, instructor, an image, and optional links.

**Education** (`education.yaml`): put the logo at `src/assets/images/logos/<id>.png`, with an optional `<id>-white.png` for dark mode. `logoScale` (0 to 1) shrinks a heavy logo; `abbr` is shown until a logo exists.

**CV**: put the PDF at `public/cv.pdf` and a CV link appears on the home page and in the footer.

**Availability line**: `status` in `src/config.ts`; set it to `''` to hide it.

**Share card**: `/og.png` is generated from the name, role, interests, and headshot, so it updates on its own.

## License

Code is MIT licensed (see [LICENSE](LICENSE)). Site content and images © Haitao Chen, all rights reserved.
