// src/data/project.ts
// Single source of truth for project facts used across pages, meta descriptions and schema.
// Update here, not in individual pages.

export const SITE_URL = 'https://memopad.luigiandreamoretti.com';

export const PROJECT = {
  name: 'MEMoPAD',
  acronym: 'Multimodal Emotion Monitoring in Clinical Pathways for Anxiety Disorders',
  // Shown in the footer and used to keep status copy consistent.
  statusAsOf: 'October 2026',
  status: 'Phase VI (real-world use) under way, followed by the PhD thesis.',
  fundingTotal: '£10,500',
  // Never publish a summed participant total: people take part in more than one phase.
  participantsWording: '10–25 participants per phase',
};

// Co-design phases, 0–VI. `participants` is per phase and must never be summed for display.
// `date` is the month the phase was completed (for Phase VI: the month it started).
// Phase 0–IV breakdowns and questions match the published papers (BCS HCI 2025, IH '26 Table 1).
// Phase 0 corrected from 12 to 14 (8 patients + 6 clinicians) on 2026-09-30, to match the papers.
export const PHASES = [
  {
    id: '0', name: 'Recruiting Material Consultations', date: '2024-07', participants: 14, status: 'completed',
    question: 'What shapes effective co-design with people living with anxiety disorders?',
    tools: 'Consultations on recruiting material (flyers, surveys)',
    breakdown: '8 patients, 6 clinicians',
  },
  {
    id: 'I', name: 'Pre-design', date: '2025-02', participants: 24, status: 'completed',
    question: 'What challenges and unmet needs do patients, carers and clinicians face because of anxiety disorders?',
    tools: 'Online survey, focus groups and interviews',
    breakdown: '15 patients, 3 carers, 6 clinicians',
  },
  {
    id: 'II', name: 'Generative', date: '2025-04', participants: 20, status: 'completed',
    question: 'How could emotion recognition technology help in each of the three scenarios?',
    tools: 'Custom storyboard templates',
    breakdown: '12 patients, 4 carers, 4 clinicians',
  },
  {
    id: 'III', name: 'Prototype', date: '2025-05', participants: 19, status: 'completed',
    question: 'How should the tool look and behave, and what role should the wearable play?',
    tools: 'Custom mock-up templates, with asynchronous options',
    breakdown: '15 patients, 2 carers, 2 clinicians',
  },
  {
    id: 'IV', name: 'Evaluative', date: '2025-09', participants: 25, status: 'completed',
    question: 'Does the demo meet the needs of each group?',
    tools: 'Non-working (click-through) prototype',
    breakdown: '16 patients, 4 carers, 5 clinicians',
  },
  {
    id: 'V', name: 'Implementation', date: '2026-05', participants: 16, status: 'completed',
    question: 'Does the working prototype function as intended?',
    tools: 'Lab sessions with the working prototype, plus an online survey',
    breakdown: '16 lab participants with lived experience (14 new to MEMoPAD)',
  },
  {
    id: 'VI', name: 'Post-design', date: '2026-09', participants: 10, status: 'ongoing',
    question: 'How does the system work in daily life?',
    tools: 'Up to five weeks of daily use, then a closing focus group',
    breakdown: '10 participants',
  },
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
