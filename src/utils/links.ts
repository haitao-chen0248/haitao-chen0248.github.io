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
  /** Left out of the footer on phones. */
  secondary: boolean;
}

export function profileLinks(): ProfileLink[] {
  const list: ProfileLink[] = links.map((l) => ({
    label: l.label,
    icon: l.icon,
    href: l.href,
    newTab: l.href.startsWith('http'),
    secondary: 'secondary' in l && l.secondary,
  }));
  if (existsSync(path.join(process.cwd(), 'public', cv.file))) {
    list.unshift({ label: cv.label, icon: 'cv', href: `/${cv.file}`, newTab: true, secondary: false });
  }
  return list;
}
