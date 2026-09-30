// src/data/publications.ts
// Single source of truth for the Publications section, the per-paper pages
// and the "Cite or link to MEMoPAD" block.
//
// Rules
// - `abstract` is VERBATIM from the published version, or left out. Never paraphrase into it.
// - `summary` is our own plain-English description, used when no verbatim abstract is on file
//   (workshop and position papers often have none).
// - `pdf` is a path under /public. A paper page links the PDF, and emits the Google Scholar
//   `citation_*` tags, only if that file exists at build time. A missing PDF never produces
//   a broken link or a Scholar record pointing nowhere.
// - Only self-host a PDF when its licence or the publisher's terms allow it.
// - `memopad: true` gives the paper its own page at /publications/<slug>/.

import fs from 'node:fs';
import path from 'node:path';

export type Publication = {
  slug: string;
  title: string;
  /** Page <title> for the paper page, 40–60 chars. Falls back to a shortened title. */
  seoTitle?: string;
  /** In published order, "Given Family". */
  authors: string[];
  /** True when `authors` is a shortened list (large author teams). */
  etAl?: boolean;
  year: number;
  /** ISO date as precise as known: YYYY, YYYY-MM or YYYY-MM-DD. */
  date: string;
  type: 'conference' | 'workshop' | 'journal' | 'chapter';
  /** Proceedings, journal or book title, as published. */
  venue: string;
  venueShort?: string;
  publisher?: string;
  volume?: string;
  issue?: string;
  /** Page range with a hyphen, e.g. '273-284', or an article number. */
  pages?: string;
  isbn?: string;
  doi?: string;
  /** Landing page when there is no DOI. */
  url?: string;
  /** Self-hosted full text, e.g. '/papers/x.pdf'. */
  pdf?: string;
  licence?: string;
  abstract?: string;
  summary?: string;
  memopad: boolean;
  links?: { label: string; href: string }[];
  /** Internal pages this paper relates to. */
  related?: { label: string; href: string }[];
};

export const PUBLICATIONS: Publication[] = [
  // ---------------------------------------------------------------- MEMoPAD outputs
  {
    slug: 'memopad-interactive-health-2026',
    // TODO(Luigi): Crossref records the title as "MEMOPAD: ..." (all caps). Check the casing on the
    // ACM Digital Library page and match it here if ACM really prints it that way.
    title: 'MEMoPAD: Multimodal Emotion Monitoring in Clinical Pathways for Anxiety Disorders',
    seoTitle: "MEMoPAD: Emotion Monitoring for Anxiety Disorders (IH '26)",
    authors: ['Luigi Andrea Moretti', 'Miles Thompson', 'Paul Matthews', 'Michael Loizou', 'David Western'],
    year: 2026,
    date: '2026-07-04',
    type: 'conference',
    venue: 'Proceedings of the 2026 ACM Interactive Health Conference',
    venueShort: "ACM Interactive Health 2026 (IH '26)",
    publisher: 'ACM',
    pages: '1-4',
    doi: '10.1145/3786579.3804994',
    pdf: '/papers/moretti-2026-interactive-health-memopad.pdf',
    licence: 'CC BY-NC-ND 4.0',
    // TODO(Luigi): paste the published abstract VERBATIM from the ACM DL into `abstract`
    // (the submitted manuscript's wording may differ from the final version).
    summary:
      "Demo paper presented, with a live interactive demo, at ACM Interactive Health 2026 in Porto. It describes how MEMoPAD was co-designed with people living with anxiety disorders, unpaid carers and mental health clinicians, and the three parts of the prototype: a Wear OS smartwatch app for in-the-moment support, a companion mobile app for self-reports and data visualisation, and a clinician web dashboard for reviewing shared data over time. It also explains the four-colour emotion vocabulary that came out of co-design (now called Emotion Hues), which covers the full emotional spectrum rather than monitoring anxiety alone.",
    memopad: true,
    related: [
      { label: 'How we co-designed MEMoPAD', href: '/co-design/' },
      { label: 'What can a smartwatch tell us about emotions?', href: '/research/affective-computing/' },
    ],
  },
  {
    slug: 'sustained-engagement-anxiety-disorders-chi-2026',
    title: "Designing for Sustained Engagement in Anxiety Disorders: Lessons from MEMoPAD's Co-Design Journey",
    seoTitle: 'Sustained Engagement in Anxiety Disorders | MEMoPAD',
    authors: ['Luigi Andrea Moretti', 'Miles Thompson', 'Paul Matthews', 'Michael Loizou', 'David Western'],
    year: 2026,
    date: '2026-04',
    type: 'workshop',
    venue: 'Engagement in Digital Health Interventions Workshop at CHI 2026 (ACM CHI Conference on Human Factors in Computing Systems)',
    venueShort: 'CHI 2026 workshop',
    pages: '77-80',
    url: 'https://drive.google.com/file/d/1qrAk2zDY3VQas3r4SqpbkHbKEQn-A9lj/view',
    pdf: '/papers/moretti-2026-chi-workshop-sustained-engagement.pdf',
    licence: 'Author copy',
    summary:
      'Use-case paper for the CHI 2026 workshop on engagement in digital health interventions. It reports how co-design with people living with anxiety disorders, carers and clinicians shaped MEMoPAD\'s approach to engagement: three dimensions of engagement (emotional, cognitive and social), the engagement barriers identified across five co-design phases with the design response to each, and four lessons: carers cannot be ignored, clinicians need low-touch routes, emotions over anxiety, and features tailored to anxiety disorders.',
    memopad: true,
    links: [{ label: 'Workshop proceedings (page 77)', href: 'https://drive.google.com/file/d/1qrAk2zDY3VQas3r4SqpbkHbKEQn-A9lj/view' }],
    related: [{ label: 'How we co-designed MEMoPAD', href: '/co-design/' }],
  },
  {
    slug: 'co-designing-memopad-bcs-hci-2025',
    title: 'Co-Designing MEMoPAD: Multimodal Emotion Monitoring in Clinical Pathways for Anxiety Disorders',
    seoTitle: 'Co-Designing MEMoPAD for Anxiety Disorders (BCS HCI 2025)',
    authors: ['Luigi Andrea Moretti', 'Carmel McGrath', 'Lucy Condon', 'Miles Thompson', 'Paul Matthews', 'Michael Loizou', 'David Western'],
    year: 2025,
    date: '2025-11',
    type: 'workshop',
    venue: "Co-Designing Human-Centered AI Technologies for Health and Wellbeing workshop, BCS HCI 2025",
    venueShort: 'BCS HCI 2025 workshop',
    url: 'https://sites.google.com/view/bcs-hci-2025-workshop/position-papers',
    pdf: '/papers/moretti-2025-bcs-hci-co-designing-memopad.pdf',
    licence: 'Author copy',
    summary:
      'Position paper for the BCS HCI 2025 workshop on co-designing human-centred AI for health and wellbeing, written with Carmel McGrath and Lucy Condon (NIHR ARC West). It reports the first three co-design phases: the three intervention scenarios chosen by participants, the smartwatch-plus-phone design, and the methodological lessons: lower-pressure, asynchronous tools for people living with anxiety disorders, involving carers from the start, and low-touch routes for clinicians.',
    memopad: true,
    links: [
      { label: 'Full text (UWE Bristol repository)', href: 'https://uwe-repository.worktribe.com/OutputFile/16292715' },
      { label: 'Workshop position papers', href: 'https://sites.google.com/view/bcs-hci-2025-workshop/position-papers' },
    ],
    related: [{ label: 'How we co-designed MEMoPAD', href: '/co-design/' }],
  },
  {
    slug: 'affective-computing-anxiety-disorders-review-2025',
    title: 'Affective Computing in Anxiety Disorders: A Rapid Literature Review of Emotion Recognition Applications',
    seoTitle: 'Affective Computing in Anxiety Disorders: A Review | MEMoPAD',
    authors: ['Luigi Andrea Moretti', 'Miles Thompson', 'Paul Matthews', 'Michael Loizou', 'David Western'],
    year: 2025,
    date: '2025-02',
    type: 'conference',
    venue: 'Proceedings of the 18th International Joint Conference on Biomedical Engineering Systems and Technologies (BIOSTEC 2025) - Volume 2: HEALTHINF',
    venueShort: 'HEALTHINF 2025',
    publisher: 'SCITEPRESS',
    pages: '273-284',
    isbn: '978-989-758-731-3',
    doi: '10.5220/0013322800003911',
    pdf: '/papers/moretti-2025-healthinf-affective-computing-anxiety-disorders.pdf',
    licence: 'CC BY-NC-ND 4.0',
    abstract:
      `Anxiety disorders (ADs) affect roughly one in ten people in the UK, and this number is expected to increase, intensifying the need for innovation. Digital technologies such as affective computing (AC, technology to detect human emotions) could foster a more patient-centric approach, enhancing therapy adherence and optimizing clinician-patient interactions. This paper reviews the literature relevant to the integration of affective computing in clinical pathways for ADs. A search was conducted on Google Scholar and PubMed using the keywords “affective computing” and subtypes of anxiety disorders. A total of 355 results were filtered to focus on peer-reviewed articles that specifically addressed emotion recognition in pathological anxiety as opposed to simply feeling anxious. Findings underscore prevalent studies focusing on post-traumatic stress disorder (PTSD) and the widespread use of valence and arousal for emotion quantification. Various approaches for both eliciting and detecting emotions are explored, offering technical and practical insights. Diverse applications, from monitoring treatment progression in behavioral therapies to assessing the efficiency of deep brain stimulation for intractable obsessive-compulsive disorder, highlight affective computing's versatility and promise. A significant advantage of digital technologies is their potential to capture longitudinal and contextualized data beyond clinical confines. Such assessments elucidate patients' daily challenges and triggers, enabling tailored interventions. The literature suggests that AC has the potential to support mental healthcare and improve patient outcomes. However, further evidence of its effective benefits is required, especially for ADs beyond PTSD, and further exploration of its implementation in clinical pathways is needed.`,
    memopad: true,
    links: [{ label: 'SCITEPRESS page', href: 'https://www.scitepress.org/PublicationsDetail.aspx?ID=+VDQLZiaqIA=&t=1' }],
    related: [
      { label: 'What can a smartwatch tell us about emotions?', href: '/research/affective-computing/' },
      { label: 'The research', href: '/research/' },
    ],
  },

  // ---------------------------------------------------------------- Other publications
  {
    slug: 'deployment-centric-multimodal-ai-nmi-2025',
    title: 'Towards deployment-centric multimodal AI beyond vision and language',
    authors: ['Xianyuan Liu', 'Jiayang Zhang', 'Shuo Zhou'],
    etAl: true,
    year: 2025,
    date: '2025-10-21',
    type: 'journal',
    venue: 'Nature Machine Intelligence',
    volume: '7',
    issue: '10',
    pages: '1612-1624',
    doi: '10.1038/s42256-025-01116-5',
    memopad: false,
    links: [{ label: 'Open-access version', href: 'https://eprints.whiterose.ac.uk/id/eprint/233872/' }],
  },
  {
    slug: 'clinical-ai-scribes-primary-care-2025',
    title: 'Clinical AI Scribes in primary care: accuracy, error severity and implications for clinical practice',
    authors: ['Thomas C. Draper', 'Timothy Cox', 'Kathryn Lamb-Riddell', 'Luigi Andrea Moretti', 'John McCormick', 'Stephen Trowell', 'Janice Kiely', 'Richard Luxton'],
    year: 2025,
    date: '2025-09',
    type: 'journal',
    venue: 'BMJ Digital Health & AI',
    volume: '1',
    issue: '1',
    pages: 'e000092',
    doi: '10.1136/bmjdhai-2025-000092',
    memopad: false,
  },
  {
    slug: 'emotion-patterns-speech-alzheimers-2026',
    title: "Identifying emotion patterns in speech for Alzheimer's disease assessment: A novel perspective",
    authors: ['Luigi Andrea Moretti', 'Yingxue Guan', 'Zahraa Abdallah'],
    year: 2026,
    date: '2026',
    type: 'chapter',
    venue: 'Behavioral Biometrics and Artificial Intelligence for Neurodegenerative Diseases Assessment',
    publisher: 'Elsevier',
    pages: '147-185',
    doi: '10.1016/B978-0-443-13545-3.00006-2',
    memopad: false,
  },
  {
    slug: 'transformer-ecg-emotion-recognition-2023',
    title: 'An Approach using transformer architecture for emotion recognition through Electrocardiogram Signal(s)',
    authors: ['Vincenzo Dentamaro', 'Donato Impedovo', 'Luigi Andrea Moretti', 'Giuseppe Pirlo', 'Prem K. Suresh'],
    year: 2023,
    date: '2023',
    type: 'workshop',
    venue: 'Data Science Techniques for Datasets on Mental and Neurodegenerative Disorders (DSTNDS 2023), CEUR Workshop Proceedings, Vol. 3521',
    pages: '30-52',
    url: 'https://ceur-ws.org/Vol-3521/paper3.pdf',
    memopad: false,
  },
  {
    slug: 'deep-learning-breath-analysis-2023',
    title: 'A benchmarking study of deep learning techniques applied for breath analysis',
    authors: ['Vincenzo Dentamaro', 'Paolo Giglio', 'Donato Impedovo', 'Luigi Andrea Moretti', 'Giuseppe Pirlo', 'Elena Sblendorio'],
    year: 2023,
    date: '2023',
    type: 'workshop',
    venue: 'Data Science Techniques for Datasets on Mental and Neurodegenerative Disorders (DSTNDS 2023), CEUR Workshop Proceedings, Vol. 3521',
    pages: '73-83',
    url: 'https://ceur-ws.org/Vol-3521/paper5.pdf',
    memopad: false,
  },
  {
    slug: 'auco-resnet-covid-cough-breath-2022',
    title: 'AUCO ResNet: an end-to-end network for Covid-19 pre-screening from cough and breath',
    authors: ['Vincenzo Dentamaro', 'Paolo Giglio', 'Donato Impedovo', 'Luigi Andrea Moretti', 'Giuseppe Pirlo'],
    year: 2022,
    date: '2022-07',
    type: 'journal',
    venue: 'Pattern Recognition',
    volume: '127',
    pages: '108656',
    doi: '10.1016/j.patcog.2022.108656',
    memopad: false,
  },
];

const byDateDesc = (a: Publication, b: Publication) => b.date.localeCompare(a.date);
export const MEMOPAD_PUBLICATIONS = PUBLICATIONS.filter((p) => p.memopad).sort(byDateDesc);
export const OTHER_PUBLICATIONS = PUBLICATIONS.filter((p) => !p.memopad).sort(byDateDesc);

export function getPublication(slug: string): Publication {
  const pub = PUBLICATIONS.find((p) => p.slug === slug);
  if (!pub) throw new Error(`Unknown publication slug: ${slug}`);
  return pub;
}

/** True only if the PDF file is really in /public at build time. */
export function hasPdf(pub: Publication): boolean {
  return Boolean(pub.pdf && fs.existsSync(path.join(process.cwd(), 'public', pub.pdf)));
}

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;
const dash = (pages: string) => pages.replace('-', '–');

/** "Luigi Andrea Moretti" -> "Moretti, L. A." */
function apaName(full: string): string {
  const parts = full.trim().split(/\s+/);
  const family = parts.pop() as string;
  const initials = parts.map((p) => `${p.charAt(0)}.`).join(' ');
  return initials ? `${family}, ${initials}` : family;
}

export function authorsDisplay(pub: Publication): string {
  const list = pub.authors.join(', ');
  return pub.etAl ? `${list}, et al. (including Luigi Andrea Moretti)` : list;
}

export function authorsApa(pub: Publication): string {
  const names = pub.authors.map(apaName);
  if (pub.etAl) return `${names.join(', ')}, et al.`;
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(', ')}, & ${names[names.length - 1]}`;
}

/** APA-style reference, plain text. */
export function formatCitation(pub: Publication): string {
  const link = pub.doi ? doiUrl(pub.doi) : pub.url ?? '';
  const head = `${authorsApa(pub)} (${pub.year}). ${pub.title}.`;
  if (pub.type === 'journal') {
    const vol = pub.volume ? `, ${pub.volume}${pub.issue ? `(${pub.issue})` : ''}` : '';
    const pages = pub.pages ? `, ${dash(pub.pages)}` : '';
    return `${head} ${pub.venue}${vol}${pages}. ${link}`.trim();
  }
  const pages = pub.pages ? ` (pp. ${dash(pub.pages)})` : '';
  const publisher = pub.publisher ? ` ${pub.publisher}.` : '';
  return `${head} In ${pub.venue}${pages}.${publisher} ${link}`.trim();
}

const STOPWORDS = new Set(['a', 'an', 'the', 'on', 'of', 'in', 'for', 'towards', 'using']);

/** Protect mixed-case words (MEMoPAD, HEALTHINF) from BibTeX lower-casing. */
function protectCase(title: string): string {
  return title.replace(/\b([A-Za-z][A-Za-z-]*[A-Z][A-Za-z-]*)\b/g, (w, _m, offset) =>
    offset === 0 && /^[A-Z][a-z-]*$/.test(w) ? w : `{${w}}`
  );
}

export function toBibtex(pub: Publication): string {
  const family = pub.authors[0].trim().split(/\s+/).pop()!.toLowerCase().replace(/[^a-z]/g, '');
  const firstWord =
    pub.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .find((w) => w && !STOPWORDS.has(w)) ?? 'paper';
  const key = `${family}${pub.year}${firstWord}`;
  const entry = pub.type === 'journal' ? 'article' : pub.type === 'chapter' ? 'incollection' : 'inproceedings';
  const bibAuthors = pub.authors
    .map((a) => {
      const parts = a.trim().split(/\s+/);
      const fam = parts.pop();
      return `${fam}, ${parts.join(' ')}`;
    })
    .join(' and ') + (pub.etAl ? ' and others' : '');
  const fields: [string, string | undefined][] = [
    ['title', protectCase(pub.title)],
    ['author', bibAuthors],
    [pub.type === 'journal' ? 'journal' : 'booktitle', pub.venue],
    ['year', String(pub.year)],
    ['volume', pub.volume],
    ['number', pub.issue],
    ['pages', pub.pages?.replace('-', '--')],
    ['publisher', pub.publisher],
    ['isbn', pub.isbn],
    ['doi', pub.doi],
    ['url', pub.doi ? undefined : pub.url],
  ];
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(',\n');
  return `@${entry}{${key},\n${body}\n}`;
}

/** Google Scholar wants 'YYYY/M/D' for a full date, otherwise the year alone. */
export function scholarDate(pub: Publication): string {
  const [y, m, d] = pub.date.split('-');
  return m && d ? `${y}/${Number(m)}/${Number(d)}` : y;
}
