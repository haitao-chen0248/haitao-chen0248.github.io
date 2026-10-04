// Small formatting helpers shared by pages and components.

import { site } from '@/config';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-06" -> "Jun 2026" */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** "2026-06" -> "2026-06-01", for the <time datetime> attribute. */
export function isoMonth(value: string): string {
  return `${value}-01`;
}

export interface AuthorPart {
  text: string;
  self: boolean;
}

/**
 * Splits an author string so the site owner's name can be emphasized.
 * Co-first markers ("*") stay attached to the name they follow.
 */
export function splitAuthors(authors: string, self: string = site.name): AuthorPart[] {
  const pattern = new RegExp(`(${self.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*?)`, 'g');
  return authors
    .split(pattern)
    .filter(Boolean)
    .map((text) => ({ text, self: text.startsWith(self) }));
}

/** Two-digit section index: 1 -> "01" */
export function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** Sort by position in the source YAML file (see orderedYaml in content.config.ts). */
export function byFileOrder(a: { data: { order: number } }, b: { data: { order: number } }): number {
  return a.data.order - b.data.order;
}
