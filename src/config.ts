// Site-wide profile and navigation.
// Edit this file to change your name, title, bio, contact links, or menu.

export const site = {
  name: 'Haitao Chen',
  title: 'Haitao Chen',
  description:
    'Haitao Chen, Ph.D. candidate in Biomedical Engineering at Duke University. Computational imaging and optical system design.',
  // Subtitle shown under the name on the home page.
  role: 'Ph.D. Candidate in Biomedical Engineering at Duke University',
  location: 'Durham, NC',
  email: 'haitao.chen@duke.edu',
  // Research interests, shown as tags on the home page.
  interests: [
    'Computational Imaging',
    'Machine Learning',
    'Differentiable Optics',
    'Inverse Problems',
    'Light Field',
  ],
} as const;

// Availability line under the intro on the home page. Set to '' to hide it.
export const status = 'Seeking internship opportunities for Summer 2027.';

// Profile links, in display order. "icon" must match a name in src/components/Icon.astro.
export const links = [
  { label: 'Email', icon: 'email', href: `mailto:${site.email}` },
  { label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?user=bZp1Yi8AAAAJ' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/haitao-chen0248' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/haitao-chen-b569a5285' },
  { label: 'ORCID', icon: 'orcid', href: 'https://orcid.org/0000-0001-6730-0989' },
  { label: 'ResearchGate', icon: 'researchgate', href: 'https://www.researchgate.net/profile/Haitao-Chen-15' },
] as const;

// CV: put the PDF in public/ under this file name (e.g. public/cv.pdf).
// A "CV" button then appears on the home page and in the footer; until the
// file exists, nothing is shown.
export const cv = {
  file: 'cv.pdf',
  label: 'CV',
};

// Visit statistics with GoatCounter (https://www.goatcounter.com): free for
// personal sites, no cookies, no consent banner needed.
// 1. Sign up and pick a code, e.g. "haitaochen" for https://haitaochen.goatcounter.com
// 2. Put the code below. Leave it empty to turn analytics off.
// Counting only runs on the published site, not on `npm run dev`.
export const analytics = {
  goatcounter: 'haitaochen',
  // Show "N visits" in the footer. First enable "Allow adding visitor counts
  // on your website" in your GoatCounter site settings.
  showVisits: false,
};

// Google Search Console ownership check. In Search Console choose
// "URL prefix", then "HTML tag", and paste only the content="..." value here.
export const googleSiteVerification = '0QHl4RKcM6G0YYaNtPfEIh-oUZ6JQoRlZ750ysE82Lc';

// Top navigation. The home page is reached through the logo.
export const nav = [
  { label: 'Publications', href: '/publications/' },
  { label: 'Talks', href: '/talks/' },
  { label: 'News', href: '/news/' },
  { label: 'Teaching', href: '/teaching/' },
] as const;
