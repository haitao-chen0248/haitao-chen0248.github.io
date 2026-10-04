// Profile links with the CV prepended when public/<cv.file> exists.
import { existsSync } from 'node:fs';
import path from 'node:path';

import { cv, links } from '@/config';

export interface ProfileLink {
  label: string;
  icon: string;
  href: string;
  /** Open in a new tab (external sites and the PDF). */
  newTab: boolean;
}

export function profileLinks(): ProfileLink[] {
  const list: ProfileLink[] = links.map((l) => ({ ...l, newTab: l.href.startsWith('http') }));
  if (existsSync(path.join(process.cwd(), 'public', cv.file))) {
    list.unshift({ label: cv.label, icon: 'cv', href: `/${cv.file}`, newTab: true });
  }
  return list;
}
