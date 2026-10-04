# haitao-chen0248.github.io

Source for my personal website: **[haitao-chen0248.github.io](https://haitao-chen0248.github.io)**

Built with [Astro](https://astro.build) and a custom minimal theme. Light and dark modes follow the visitor's system setting, and a switch in the header lets visitors override it (the choice is remembered). No template, no client framework: pages are static HTML with a few lines of JavaScript (the click-to-play video embeds).

## Structure

| Path | What it holds |
| --- | --- |
| `src/config.ts` | Name, role line, research interests, profile links, top menu |
| `src/pages/index.astro` | Home page, including the intro paragraph |
| `src/content/publications.yaml` | Publications |
| `src/content/talks.yaml` | Talks |
| `src/content/news/*.md` | News, one Markdown file per item |
| `src/content/education.yaml` | Education and experience (home page) |
| `src/content/teaching.yaml` | Teaching |
| `src/assets/images/` | Photos and figures. Resized and converted to WebP at build time |
| `src/styles/global.css` | Color, type, and spacing tokens for the whole site (dark palette on `:root`, light palette under `[data-theme='light']`) |
| `src/components/` | Header, footer, publication entry, icons, video embed, etc. |
| `public/` | Files copied as-is: favicons, `robots.txt` |
| `.github/workflows/deploy.yml` | Builds and publishes the site on every push to `master` |
| `CLAUDE.md` | Project notes and design decisions for Claude Code |

Content files are checked against the schemas in `src/content.config.ts`, so a missing field or a bad date fails the build with a clear message.

## Updating content

**Order.** In every YAML file, the order of entries is the order on the page. Put new items at the top.

**Publication.** Add the figure to `src/assets/images/pubs/` (about 1200 px wide), then add an entry to `publications.yaml`:

```yaml
- id: short-unique-name
  title: Paper title
  authors: First Author, Haitao Chen, ..., Last Author   # "Haitao Chen" is bolded automatically; "*" marks co-first
  venue: Journal Name
  year: 2026
  note: Editors' Pick          # optional badge
  featured: true               # optional: also show on the home page
  image: ../assets/images/pubs/your-figure.jpg
  imageAlt: One-line description of the figure
  links:
    - { label: Journal, url: "https://doi.org/..." }
    - { label: Code, url: "https://github.com/..." }
  press:                       # optional
    - { label: Phys.org, url: "https://..." }
  bibtex: |                    # optional: adds a Cite button and joins /publications.bib
    @article{lastname2026keyword,
      author    = {Last, First and Chen, Haitao},
      title     = {Paper title},
      journal   = {Full Journal Name},
      volume    = {1},
      number    = {1},
      pages     = {1--10},
      year      = {2026},
      month     = {Jan},
      publisher = {Publisher Name},
      doi       = {10.xxxx/xxxxx}
    }
```

Keep the BibTeX format consistent: Google Scholar style keys (`lastname` + year + first title word), authors as `Last, First`, full journal names, and fields in this order: author, title, journal, volume, number, pages, year, month, publisher, doi. Leave out month or publisher when the source does not give them; skip abstracts and keywords.

**News.** Add a Markdown file to `src/content/news/`, named `YYYY-MM-short-name.md`:

```markdown
---
date: 2026-10
title: "Short headline for the News page"
summary: One sentence for the home page.
images:                        # optional, up to six; several photos play as a slideshow
  - src: ../../assets/images/news/your-photo.jpg
    alt: What the photo shows
---

Full text. **Bold**, *italics*, and [links](https://example.com) work.
```

The home page shows the three newest items.

**School logos.** Put `duke.png`, `rice.png`, `hust.png` (or `.svg`/`.jpg`/`.webp`) in `src/assets/images/logos/`. Each file is matched to the entry with the same `id` in `education.yaml`. An optional white version named `<id>-white.png` is used in dark mode; without one, the regular logo is shown in both themes. `logoScale` (0 to 1) in `education.yaml` shrinks a visually heavy logo, such as a solid shield. Until a logo file exists, the short name in `abbr` is shown instead.

**CV.** Put the PDF at `public/cv.pdf` (file name set in `src/config.ts`). A "CV" button then appears first in the home page links and in the footer; without the file, nothing is shown.

**Availability line.** The sentence under the intro (with a green dot and a "Get in touch" email link) is `status` in `src/config.ts`. Set it to `''` to hide it.

**Talk.** Add an entry to `talks.yaml`. `youtube` is the video ID (the part after `watch?v=`). `paper` (optional) is the `id` of the related entry in `publications.yaml` and adds a "Paper" link.

**Profile links, research interests, menu.** Edit `src/config.ts`. Each profile link's `icon` must match a name in `src/components/Icon.astro`; add new icons there as SVG paths.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321, reloads on save
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run check     # type-check pages and content
```

## Social share card

`src/pages/og.png.ts` renders the 1200×630 preview image shown when the site is shared on LinkedIn, Slack, WeChat, etc. It is built from `src/config.ts` (name, role, research interests) and the headshot, so it updates automatically. The image URL carries a version tag that changes with the card, so platforms that re-fetch previews pick up the new image.

After each deploy, the workflow checks that the card is live and adds a "Share preview" section to the run summary (Actions tab → latest run) with one-click LinkedIn Post Inspector and Facebook Sharing Debugger links. LinkedIn caches previews for about a week, so open the inspector link once after changing the card.

## Visit statistics

The site supports [GoatCounter](https://www.goatcounter.com), which is free for personal sites and uses no cookies, so no consent banner is needed.

The site code is set in `src/config.ts` (`goatcounter: 'haitaochen'`); the dashboard is at https://haitaochen.goatcounter.com.

Optional: to show the total visits in the footer, turn on "Allow adding visitor counts on your website" in GoatCounter's settings and set `showVisits: true`.

Visits are only counted on the published site, not during `npm run dev`.

## Google Search Console

1. Open https://search.google.com/search-console and add a **URL prefix** property: `https://haitao-chen0248.github.io/`.
2. Choose the **HTML tag** method, copy the `content="..."` value, set `googleSiteVerification` in `src/config.ts`, push, and click **Verify** once the deploy finishes.
3. In **Sitemaps**, submit `sitemap-index.xml`.
4. Optional: in **URL inspection**, enter the home page URL and click **Request indexing**.

## Deployment

GitHub Actions builds and publishes the site on every push to `master` (see `.github/workflows/deploy.yml`).

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## License

Code is MIT licensed (see [LICENSE](LICENSE)). Site content and images © Haitao Chen. All rights reserved.
