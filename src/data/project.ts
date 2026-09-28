// src/data/project.ts
// Single source of truth for project facts used across pages, meta descriptions and schema.
// Update here, not in individual pages.

export const SITE_URL = 'https://memopad.luigiandreamoretti.com';

export const PROJECT = {
  name: 'MEMoPAD',
  acronym: 'Multimodal Emotion Monitoring in Clinical Pathways for Anxiety Disorders',
  // Shown in the footer and used to keep status copy consistent.
  statusAsOf: 'September 2026',
  status: 'Phase VI (real-world use) under way; thesis submission expected by the end of 2026, viva by March 2027.',
  fundingTotal: '£10,500',
  // Never publish a summed participant total: people take part in more than one phase.
  participantsWording: 'up to 25 participants per phase',
};

// Co-design phases, 0–VI. `participants` is per phase and must never be summed for display.
export const PHASES = [
  { id: '0', name: 'Recruiting Material Consultations', date: '2024-07', participants: 12, status: 'completed' },
  { id: 'I', name: 'Pre-design', date: '2025-02', participants: 24, status: 'completed' },
  { id: 'II', name: 'Generative', date: '2025-04', participants: 20, status: 'completed' },
  { id: 'III', name: 'Prototype', date: '2025-05', participants: 19, status: 'completed' },
  { id: 'IV', name: 'Evaluative', date: '2025-09', participants: 25, status: 'completed' },
  { id: 'V', name: 'Implementation', date: '2026-05', participants: 16, status: 'completed' },
  { id: 'VI', name: 'Post-design', date: '2026-09', participants: 10, status: 'ongoing' },
] as const;

export const PHASE_COUNT = PHASES.length;
export const PHASES_COMPLETED = PHASES.filter((p) => p.status === 'completed').length;

// Email: the UWE address is shown; every link CCs the long-term address,
// because the UWE account stops working around mid-2027. Swap PRIMARY_EMAIL then.
export const PRIMARY_EMAIL = 'luigi.moretti@uwe.ac.uk';
export const CC_EMAIL = 'hello@luigimoretti.com';

export function mailto(subject?: string, body?: string): string {
  const params = [`cc=${CC_EMAIL}`];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${PRIMARY_EMAIL}?${params.join('&')}`;
}

export const SUBSCRIBE_MAILTO = mailto(
  'I want to subscribe to the newsletter',
  "Hi Luigi,\r\n\r\nI'd like to subscribe to the MEMoPAD newsletter.\r\n\r\nName:\r\nOrganisation (optional):\r\n\r\nThanks!"
);

export const LINKEDIN_NEWSLETTER_URL = 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7381688210289999872';
