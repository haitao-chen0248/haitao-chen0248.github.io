// Version tag for the share card URL. It changes whenever anything drawn on the
// card changes (name, role, interests, headshot, the card layout, or the satori
// version that draws it), so social platforms treat the new card as a new
// image instead of reusing a cached one.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';

import { site } from '@/config';

export function shareCardVersion(): string {
  const root = process.cwd();
  const hash = createHash('sha1');
  hash.update(JSON.stringify({ name: site.name, role: site.role, interests: site.interests }));
  hash.update(readFileSync(path.join(root, 'src/assets/images/headshot.jpg')));
  hash.update(readFileSync(path.join(root, 'src/pages/og.jpg.ts')));
  hash.update(readFileSync(path.join(root, 'node_modules/satori/package.json')));
  return hash.digest('hex').slice(0, 10);
}
