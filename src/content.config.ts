// Content collections. Each collection has a schema, so a typo or a missing
// field fails the build with a clear message instead of shipping a broken page.
import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

// Loads a YAML list and records each item's position, so the order in the
// file is the order on the page (collections are otherwise sorted by id).
function orderedYaml(path: string) {
  return file(path, {
    parser: (text) =>
      (parse(text) as Record<string, unknown>[]).map((item, index) => ({ ...item, order: index })),
  });
}

// Month strings like "2026-06" keep YAML simple and sort correctly as text.
const month = z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM, e.g. 2026-06');

const link = z.object({
  label: z.string(),
  url: z.url(),
});

const person = z.object({
  name: z.string(),
  url: z.url().optional(),
});

const publications = defineCollection({
  loader: orderedYaml('src/content/publications.yaml'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Plain author string. The site owner's name (site.name) is highlighted automatically.
      authors: z.string(),
      venue: z.string(),
      year: z.number().int(),
      // Short highlight shown next to the venue, e.g. "Editors' Pick".
      note: z.string().optional(),
      // Featured entries appear on the home page.
      featured: z.boolean().default(false),
      image: image(),
      imageAlt: z.string(),
      links: z.array(link).default([]),
      press: z.array(link).default([]),
      // BibTeX entry for the Cite button and /publications.bib
      bibtex: z.string().optional(),
      order: z.number(),
    }),
});

const talks = defineCollection({
  loader: orderedYaml('src/content/talks.yaml'),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: month,
    // YouTube video ID, the part after "watch?v=".
    youtube: z.string().optional(),
    // Optional id of the related entry in publications.yaml; adds a "Paper" link.
    paper: reference('publications').optional(),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: orderedYaml('src/content/education.yaml'),
  schema: z.object({
    org: z.string(),
    // Short name shown until a logo file is added
    abbr: z.string().optional(),
    // Shrinks a visually heavy logo (e.g. a solid shield) to balance it with the others
    logoScale: z.number().positive().max(1).optional(),
    role: z.string(),
    years: z.string(),
    description: z.string(),
    advisor: person.optional(),
    order: z.number(),
  }),
});

const teaching = defineCollection({
  loader: orderedYaml('src/content/teaching.yaml'),
  schema: ({ image }) =>
    z.object({
      course: z.string(),
      title: z.string(),
      term: z.string(),
      role: z.string(),
      description: z.string(),
      instructor: person,
      image: image(),
      imageAlt: z.string(),
      links: z.array(link).default([]),
      order: z.number(),
    }),
});

// News items are Markdown files so the body can hold links and emphasis.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      date: month,
      // Short headline shown on the News page.
      title: z.string(),
      // One-sentence version used on the home page.
      summary: z.string(),
      images: z
        .array(z.object({ src: image(), alt: z.string() }))
        .max(6)
        .default([]),
    }),
});

export const collections = { publications, talks, education, teaching, news };
