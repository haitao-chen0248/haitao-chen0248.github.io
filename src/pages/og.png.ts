// Social share card (Open Graph image), rendered at build time and served at /og.png.
// Layout is written as plain objects for satori (no React needed); satori turns it
// into SVG with text as paths, and sharp rasterizes it to PNG.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';

import { site } from '@/config';

const WIDTH = 1200;
const HEIGHT = 630;

type Node = { type: string; props: Record<string, unknown> & { children?: unknown } };

/** Tiny element helper: h('div', { style }, ...children) */
function h(type: string, props: Record<string, unknown>, ...children: unknown[]): Node {
  return { type, props: { ...props, children: children.length === 1 ? children[0] : children } };
}

const root = process.cwd();
const font = (weight: number) =>
  readFile(path.join(root, `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`));

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
        padding: '0 80px',
        gap: 64,
        backgroundColor: '#000',
        backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(77, 141, 255, 0.22), rgba(0, 0, 0, 0) 55%)',
        fontFamily: 'Inter',
        color: '#f5f5f7',
      },
    },
    // Text column
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', flex: 1 } },
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
        { style: { marginTop: 22, fontSize: 32, fontWeight: 500, color: '#a1a1a6', lineHeight: 1.3 } },
        site.role,
      ),
      h(
        'div',
        { style: { display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 40 } },
        ...site.interests.map((tag) =>
          h(
            'div',
            {
              style: {
                display: 'flex',
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
      width: 300,
      height: 300,
      style: { borderRadius: 36, objectFit: 'cover' },
    }),
  );

  const svg = await satori(card as unknown as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Inter', data: regular, weight: 400, style: 'normal' },
      { name: 'Inter', data: medium, weight: 500, style: 'normal' },
      { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
