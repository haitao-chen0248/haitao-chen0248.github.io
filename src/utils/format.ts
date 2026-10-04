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

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * HTML for short display text that should break lines at natural points on
 * phones: hyphenated words ("high-throughput") stay whole, and with `phrases`,
 * a phrase such as "at Duke University" moves to the next line as a unit.
 * The .nowrap and .phrase classes are styled in global.css.
 */
export function wrapFriendly(text: string, phrases = false): string {
  const words = (s: string) => escapeHtml(s).replace(/[^\s-]+(?:-[^\s-]+)+/g, '<span class="nowrap">$&</span>');
  if (!phrases) return words(text);
  return text
    .split(/(?<=:) | (?=(?:in|at|for|of|and|with|on|to|from|by) )/)
    .map((phrase) => `<span class="phrase">${words(phrase)}</span>`)
    .join(' ');
}

/** Sort by position in the source YAML file (see orderedYaml in content.config.ts). */
export function byFileOrder(a: { data: { order: number } }, b: { data: { order: number } }): number {
  return a.data.order - b.data.order;
}

/** Sort news newest first; items from the same month by file name, descending. */
export function byNewest(a: { id: string; data: { date: string } }, b: { id: string; data: { date: string } }): number {
  return b.data.date.localeCompare(a.data.date) || b.id.localeCompare(a.id);
}

/** Group items by year, newest year first. Items keep their order within a year. */
export function groupByYear<T>(items: T[], yearOf: (item: T) => string | number): { year: string; items: T[] }[] {
  const years = [...new Set(items.map((item) => String(yearOf(item))))].sort().reverse();
  return years.map((year) => ({ year, items: items.filter((item) => String(yearOf(item)) === year) }));
}
