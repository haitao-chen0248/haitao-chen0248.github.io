// Social share card (Open Graph image), rendered at build time and served at /og.jpg.
// Layout is written as plain objects for satori (no React needed); satori turns it
// into SVG with text as paths, and sharp rasterizes it to JPEG.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';

import { site } from '@/config';

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING = 80;
const GAP = 64;
const PORTRAIT = 300;
// Sizes are in pixels, not percentages, so the layout does not depend on how
// a satori version resolves them.
const TEXT_WIDTH = WIDTH - 2 * PADDING - GAP - PORTRAIT;
const TAG_GAP = 12;

type Node = { type: string; props: Record<string, unknown> & { children?: unknown } };

/** Tiny element helper: h('div', { style }, ...children) */
function h(type: string, props: Record<string, unknown>, ...children: unknown[]): Node {
  return { type, props: { ...props, children: children.length === 1 ? children[0] : children } };
}

const root = process.cwd();
const font = (weight: number) =>
  readFile(path.join(root, `node_modules/@fontsource/geist/files/geist-latin-${weight}-normal.woff`));

// The Airy-pattern logo mark, same as the favicon.
const mark =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="4.2" fill="#7fc4ff"/><circle cx="16" cy="16" r="9" fill="none" stroke="#7fc4ff" stroke-width="1.6" opacity="0.55"/><circle cx="16" cy="16" r="14" fill="none" stroke="#7fc4ff" stroke-width="1.1" opacity="0.25"/></svg>',
  );

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const [regular, medium, semibold] = await Promise.all([font(400), font(500), font(600)]);

  // Headshot as an inline JPEG.
  const portrait = await sharp(path.join(root, 'src/assets/images/headshot.jpg'))
    .resize(600, 600, { fit: 'cover' })
    .jpeg({ quality: 85 })
    .toBuffer();
  const portraitUri = `data:image/jpeg;base64,${portrait.toString('base64')}`;

  const host = siteUrl ? siteUrl.host : '';

  const card = h(
    'div',
    {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        alignItems: 'center',
        padding: `0 ${PADDING}px`,
        gap: GAP,
        backgroundColor: '#000',
        backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(77, 141, 255, 0.22), rgba(0, 0, 0, 0) 55%)',
        fontFamily: 'Geist',
        color: '#f5f5f7',
      },
    },
    // Text column
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', width: TEXT_WIDTH } },
      h(
        'div',
        { style: { display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, color: '#a1a1a6', fontWeight: 500 } },
        h('img', { src: mark, width: 30, height: 30 }),
        host,
      ),
      h(
        'div',
        { style: { marginTop: 40, fontSize: 88, fontWeight: 600, letterSpacing: -3, lineHeight: 1 } },
        site.name,
      ),
      h(
        'div',
        { style: { marginTop: 22, fontSize: 32, fontWeight: 500, color: '#a1a1a6', lineHeight: 1.3, textWrap: 'balance' } },
        site.role,
      ),
      // Interests in two equal columns; an odd last tag spans both, as on
      // the home page on phones.
      h(
        'div',
        { style: { display: 'flex', flexWrap: 'wrap', gap: TAG_GAP, marginTop: 40 } },
        ...site.interests.map((tag, i, all) =>
          h(
            'div',
            {
              style: {
                display: 'flex',
                boxSizing: 'border-box',
                width: i === all.length - 1 && i % 2 === 0 ? TEXT_WIDTH : (TEXT_WIDTH - TAG_GAP) / 2,
                justifyContent: 'center',
                padding: '8px 16px',
                borderRadius: 10,
                border: '1px solid rgba(127, 196, 255, 0.4)',
                backgroundColor: 'rgba(127, 196, 255, 0.1)',
                fontSize: 22,
                fontWeight: 500,
              },
            },
            tag,
          ),
        ),
      ),
    ),
    // Portrait
    h('img', {
      src: portraitUri,
      width: PORTRAIT,
      height: PORTRAIT,
      style: { flexShrink: 0, borderRadius: 36, objectFit: 'cover' },
    }),
  );

  const svg = await satori(card as unknown as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Geist', data: regular, weight: 400, style: 'normal' },
      { name: 'Geist', data: medium, weight: 500, style: 'normal' },
      { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
    ],
  });

  // JPEG is about a quarter the size of PNG here (the photo and the soft
  // gradient), so link previews load sooner. Full color resolution
  // (4:4:4) keeps the thin tag borders crisp. A PNG with a reduced palette
  // would be as small, but bands the gradient into rings.
  const jpeg = await sharp(Buffer.from(svg)).jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { 'Content-Type': 'image/jpeg' } });
};
