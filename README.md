# Haitao Chen's Homepage

Source of my personal academic website, [haitao-chen0248.github.io](https://haitao-chen0248.github.io).

Built with [Astro](https://astro.build): static pages, no client framework, light and dark themes.

## Quick start

Requires Node.js 24 (set in `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run check     # type-check code and validate content (the deploy runs it first)
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
| `src/layouts/` | Page shell: `<head>` metadata and structured data, header, footer, page-change and pointer-light scripts |
| `src/content/` | Publications, talks, news, education, service, teaching |
| `src/assets/images/` | Headshot, photos, and figures, converted at build time to AVIF with a WebP fallback (school logos: WebP; publisher logos: SVG, as they are) |
| `src/components/` | Header, footer, page and section titles, publication entry, photo slideshow, responsive photo (`Photo`), video embed, icons |
| `src/utils/` | Shared helpers: dates, sorting, author lists, line breaking, profile links, share card version |
| `src/styles/global.css` | Color, type, and spacing tokens for both themes |
| `public/` | Files served as-is: favicons, `robots.txt`, and the CV (`HaitaoChen_CV.pdf`) |

Content is validated against `src/content.config.ts`, so a missing field or a bad date fails the build.

## Content

In the YAML files, entries appear in file order, so put new ones at the top. News is sorted by date.

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
  links:                               # the first link is also used for the title and figure
    - { label: Journal, url: "https://doi.org/..." }
  press:                               # optional: "In the press" links
    - { label: Outlet, url: "https://..." }
  bibtex: |                            # optional: adds a Cite button and joins /publications.bib
    @article{...}
```

**News**: one Markdown file per item in `src/content/news/`, named `YYYY-MM-name.md`. The home page shows the three newest. News titles are not links; put links in the text. Photos go under `images:`; an image in the text stops the build, as it would not be processed.

The first photo of the newest item with photos loads first, as the page's largest image. Several photos play as a slideshow, which can also be swiped on phones.

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

**Talk** (`talks.yaml`): `youtube` is the video ID; `paper` is a publication `id` and adds a Paper link; `note` adds a badge, as on publications. The title links to the video, or to the paper when there is no video. The video's poster is `src/assets/images/talks/<id>.jpg`, named after the talk `id` (save YouTube's from `https://i.ytimg.com/vi/<youtube>/maxresdefault.jpg`); stored with the site, it also shows where YouTube's images are blocked. Without one, YouTube's poster is used.

**Teaching** (`teaching.yaml`): course code, title, term, role, description, instructor, an image with alt text, and optional links. The first link is also used for the title and image.

**Education** (`education.yaml`): put the logo at `src/assets/images/logos/<id>.png` (or `.jpg`, `.webp`, `.svg`), with an optional `<id>-white` version for dark mode. `logoScale` (0 to 1) shrinks a heavy logo; `abbr` (or the initials) is shown until a logo exists.

**Service** (`service.yaml`): a role, its years, and a description for each entry, listed under Service at the bottom of the home page. Venues are grouped by publisher, a card each, and each journal or conference links to its home page (`url`); put the publisher's logo at `src/assets/images/publishers/<logo>.svg` (or `.png`), or the card shows the publisher's name. In dark mode the logo sits on a dark plate if it has a white version, `<logo>-white.svg` (the dark-text parts recolored to `#f5f5f7`); without one it stays on a white plate. The Optica logo is from optica.org. The ACS (2026), SPIE, and IEEE logos are SVG files the site owner supplied, stripped of editor metadata; the IEEE one is cropped above its tagline, which is unreadable at card size.

```yaml
- id: peer-review
  role: Peer Reviewer
  years: 2025 – Present
  description: Independent reviewer for the journals and conference below.
  groups:                              # optional: a card per publisher
    - label: Optica Publishing Group
      logo: optica                     # optional: src/assets/images/publishers/optica.svg
      logoScale: 0.8                   # optional, 0 to 1: shrinks a heavy logo
      items:
        - name: Optics Letters
          url: https://opg.optica.org/ol/home.cfm   # optional
```

**CV**: put the PDF at `public/HaitaoChen_CV.pdf` (the name is `cv.file` in `src/config.ts`) and a CV link appears last among the links on the home page and in the footer.

**Availability line**: `status` in `src/config.ts`; set it to `''` to hide it.

**Share card**: `/og.jpg` is generated from the name, role, interests, and headshot, so it updates on its own.

**Liquid glass**: in Chrome, Edge, and other Chromium browsers, glass surfaces marked `data-liquid` (the "On this page" dock, the availability line, and the profile links) bend what lies behind them near their edges, with a slight color fringe (`src/components/LiquidGlass.astro`). The filter and its displacement map come from [liquid-glass-react](https://github.com/rdev/liquid-glass-react) (MIT; its license is in `src/assets/liquid/`). Other browsers show the plain frosted glass.

**Search engines**: every page describes the site owner as a person (`BaseLayout.astro`), and `/publications/` describes each paper as a scholarly article. Both are generated from `src/config.ts` and `publications.yaml`, so there is nothing to keep in sync by hand.

**Menu**: `nav` in `src/config.ts`. Home is the first item; the logo also links home.

**Link check**: on the 1st of each month a GitHub Action builds the site and checks every link in it; if any is broken, it opens an issue listing them (`.github/workflows/links.yml`). It can also be run by hand from the Actions tab.

**Dependency updates**: on the 1st of each month Dependabot opens pull requests that update the npm packages and the GitHub Actions (`.github/dependabot.yml`). Each one is built and checked automatically; merge it once the check passes, and the site redeploys. TypeScript major updates are skipped until `@astrojs/check` supports TypeScript 7 (see the note in `dependabot.yml`).

**Pinned fflate**: `overrides` in `package.json` raises `fflate` to 0.7.5, which fixes a security issue ([GHSA-px8p-9vwx-vf98](https://github.com/advisories/GHSA-px8p-9vwx-vf98)), because `satori` (which draws the share card) pins the vulnerable 0.7.3. Once `npm view satori dependencies.fflate` shows 0.7.5 or later, delete the `overrides` entry and run `npm install`.

## License

Code is MIT licensed (see [LICENSE](LICENSE)). Site content and images © Haitao Chen, all rights reserved.
