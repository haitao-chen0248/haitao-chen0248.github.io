# CLAUDE.md

Context for Claude Code when working in this repository: Haitao Chen's personal academic website, published at https://haitao-chen0248.github.io.

## Working with Haitao

- Reply in Chinese, concisely. Write all code comments, commit messages, and docs in English.
- Every content claim must come from a source he provided (his old site, papers, BibTeX). Never invent publications, awards, dates, or bios.
- After each round of changes, propose a few concrete improvement ideas ("持续提出优化改进建议").
- Push to `master` deploys the site (see Deployment). Commit or push only when he asks.

## Stack and commands

Astro 7 static site, no UI framework, Node >= 22.12 (`.nvmrc`: 22).

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # into dist/
npm run preview
npm run check     # astro check: must report 0 errors before handing work back
```

## Layout

- `src/config.ts`: name, role, email, research interests, availability `status`, profile links, CV file name, GoatCounter code, Search Console token, top nav.
- `src/content.config.ts`: content schemas. YAML collections use the `orderedYaml` loader so the order in the file is the order on the page (`byFileOrder` in `src/utils/format.ts`). Newest entries go at the top.
- `src/content/`: `publications.yaml`, `talks.yaml`, `education.yaml`, `teaching.yaml`, `news/*.md`.
- `src/pages/`: `index`, `publications`, `talks`, `news`, `teaching`, `404`, plus endpoints `og.png.ts` (share card via satori + sharp) and `publications.bib.ts`.
- `src/components/`: `Header` (theme toggle), `Footer`, `PublicationItem` (Cite panel), `YouTube` (click-to-load), `Slideshow`, `Icon`, `SectionHead`, `PageHeader`, `Analytics`, `AiryMark`.
- `src/styles/global.css`: all design tokens. Dark tokens on `:root`, light tokens on `:root[data-theme='light']`.
- `src/assets/images/`: headshot, `pubs/`, `news/`, `logos/` (`<id>.png` and optional `<id>-white.png` for dark mode).
- `public/`: favicons, `robots.txt`, and later `cv.pdf` (the CV button appears only when this file exists).

## Design decisions (settled; do not revert without asking)

- Minimal and premium in the spirit of Apple's design, not a copy of Apple's site.
- Links: same color as text with a thin accent underline, and outlined chips. No Apple-blue links.
- Home hero: left-aligned text with the portrait on the right (never centered). Below it, a labeled "Research interests" tag block and profile link pills with icons. Availability line with a green dot under the intro.
- Selected publications: one per row. Recent news on the home page: three tiles.
- Subpages: compact titles (`PageHeader`, 30–40px) and tight spacing below the header.
- Talks: one per row, 340px video on the left. Cards need a visible edge in light mode.
- News page: grouped by year with headlines; 340px image on the left; several photos crossfade every 3 seconds (`Slideshow`), never side by side.
- h1/h2 use `text-wrap: balance`; h3/h4 use `pretty` so long titles fill the row.
- Theme follows the system by default. The header toggle overrides it and is saved to localStorage only when it differs from the system setting.
- School logos are balanced with `logoScale` in `education.yaml`; Rice has a generated white version for dark mode.
- Publications page: no "Download BibTeX" link (the `/publications.bib` endpoint stays). No abstracts on the site.

## Content rules

- Authors: "Haitao Chen" is bolded automatically; `*` marks co-first authors; long author lists use `...` before the last author.
- BibTeX (per-paper Cite button), keep every entry identical in format:
  - Google Scholar style keys (`lastname` + year + first title word).
  - Authors as `Last, First`, with LaTeX accents (`B{\`e}gue, Aur{\'e}lien`).
  - Full journal names. Protect capitals with braces (`{3D}`, `{SSB-Net}`).
  - Field order: author, title, journal, volume, number, pages, year, month, publisher, doi. Field names padded to 9 characters.
  - Month and publisher only when the source has them. No abstract, keywords, or address.
  - Communications Biology publisher is `{Nature Publishing Group UK}`.
- Talks may link a paper with `paper: <publication id>`.

## Integrations

- GoatCounter (`haitaochen`), production builds only.
- Share card `/og.png` is generated from `site.name`, `site.role`, `site.interests`, and the headshot. Its URL carries a content hash (`src/utils/og.ts`) so platforms refetch it after changes. If the interests list changes, check that the tags still fit on the card.
- Search Console: set `googleSiteVerification` in `src/config.ts`, then submit `sitemap-index.xml`.

## Deployment

`.github/workflows/deploy.yml` builds on push to `master` and deploys to GitHub Pages (repo Settings → Pages → Source: GitHub Actions). After deploying, it checks that `og.png` is live and writes LinkedIn Post Inspector and Facebook debugger links to the run summary.

## Verifying changes

Before handing work back: `npm run check` and `npm run build` pass, and visually check affected pages in both themes at 390px and 1440px widths with no horizontal overflow (Playwright is fine for this).
