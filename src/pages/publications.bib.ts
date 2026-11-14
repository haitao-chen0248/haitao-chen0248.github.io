// All BibTeX entries in one file, served at /publications.bib.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { byFileOrder } from '@/utils/format';

export const GET: APIRoute = async () => {
  const pubs = (await getCollection('publications')).sort(byFileOrder);
  const body = pubs
    .map((p) => p.data.bibtex?.trim())
    .filter(Boolean)
    .join('\n\n');
  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' },
  });
};
