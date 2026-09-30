// src/data/achievements.ts
// Single source of truth for the Achievements timeline.
// `date` is ISO (YYYY-MM) and drives sorting; `label` is what visitors see.
// `html` is trusted, author-written markup (links are allowed).

export type Achievement = {
  date: string;
  label: string;
  title: string;
  html: string;
};

export type AchievementCategory = {
  id: string;
  name: string;
  icon: 'award' | 'publication' | 'milestone';
  items: Achievement[];
};

const ext = (href: string, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const funding: Achievement[] = [
  {
    date: '2026-08',
    label: 'August 2026',
    title: 'Joined the UKRI Mental Health Platform as an Associate Member',
    html: `Associate members are researchers not based at the Platform's hubs who share its aims and values. ${ext('https://www.mentalhealthplatform.ac.uk/associate-members', 'About MHP associate membership')}`,
  },
  {
    date: '2025-12',
    label: 'December 2025',
    title: 'Won the Stress category of the SmartSocks DISCOVERY Pioneers Competition',
    html: `Awarded Milbotix SmartSocks DISCOVERY kits (worth £1,000) to test sock-based sensing as an alternative to smartwatches for emotion monitoring in anxiety disorders. ${ext('https://milbotix.com/smartsocks_discovery_pioneers_competition_winners/', 'See the competition winners')}`,
  },
  {
    date: '2025-08',
    label: 'August 2025',
    title: 'Secured an NHS BNSSG ICB grant',
    html: 'Secured a £1,500 grant for patient and public involvement and engagement (PPIE) activities from NHS Bristol, North Somerset and South Gloucestershire Integrated Care Board.',
  },
  {
    date: '2025-06',
    label: 'June 2025',
    title: 'Secured a CATE Student Internship',
    html: "Secured a '2024/25 CATE Student Internship' grant (£2,000) for Louis Robinson from UWE Bristol, to support the development of the working prototype.",
  },
  {
    date: '2025-01',
    label: 'January 2025',
    title: 'Accepted as an EPS Postgraduate Member',
    html: 'Granted postgraduate membership of the Experimental Psychology Society (EPS).',
  },
  {
    date: '2024-12',
    label: 'December 2024',
    title: 'Secured the CATE Public Engagement Fund',
    html: "Awarded £3,000 from UWE Bristol's '2024-25 CATE Public/Community Engagement & Knowledge Exchange Project Fund' to support the project's PPIE activities.",
  },
  {
    date: '2024-12',
    label: 'December 2024',
    title: 'Accepted as an IHT Fellow',
    html: `Welcomed into the Innovate Healthier Together community, dedicated to reimagining health and care across Bristol, North Somerset and South Gloucestershire (BNSSG, NHS). ${ext('https://bnssghealthiertogether.org.uk/our-work/ihtfellowship/', 'About the IHT Fellowship')}`,
  },
  {
    date: '2024-09',
    label: 'May–September 2024',
    title: 'Secured a sponsored research visit',
    html: 'Selected for a sponsored research visit at the University of Bristol, focusing on affective computing implementations. Supervised by Zahraa Abdallah and sponsored by MaVi: Machine Learning and Computer Vision.',
  },
  {
    date: '2024-06',
    label: 'June 2024',
    title: 'Won the Best Student Poster Award',
    html: `Our poster was awarded 'Best Student Poster' at the Second Workshop on Multimodal AI, organised by the University of Sheffield and the Alan Turing Institute. ${ext('https://www.linkedin.com/feed/update/urn:li:activity:7220011283352297474/', 'View post')}`,
  },
  {
    date: '2023-04',
    label: 'April 2023',
    title: 'Secured a PhD scholarship',
    html: `Awarded a full PhD scholarship at UWE Bristol, including £3,000 for project expenses. ${ext('https://www.uwe.ac.uk/research/centres-and-groups/reach/members', 'See the UWE REACH members page')}`,
  },
];

const publications: Achievement[] = [
  {
    date: '2026-10',
    label: 'October 2026 (upcoming)',
    title: 'Talk and poster at the MHP Research Summit 2026',
    html: "MEMoPAD's co-design story was selected, by an external panel that included people with lived experience, for both a talk and a poster at the Mental Health Platform Research Summit in Sheffield on 8 October 2026.",
  },
  {
    date: '2026-07',
    label: 'July 2026',
    title: 'Demo paper and live demo at ACM Interactive Health 2026',
    html: `Published a demo paper and presented a live, interactive demo of the MEMoPAD prototype in Porto to researchers, industry and policy makers, collecting feedback from stakeholders outside the co-design journey. ${ext('https://dl.acm.org/doi/full/10.1145/3786579.3804994', 'Read the paper')}`,
  },
  {
    date: '2026-05',
    label: 'May 2026',
    title: 'Book chapter on emotion patterns in speech for Alzheimer’s disease',
    html: `Co-authored with Dr Zahraa Abdallah and Yingxue Guan (University of Bristol): 'Identifying emotion patterns in speech for Alzheimer's disease assessment: A novel perspective', exploring how affective computing could support assessment in neurodegenerative disorders. ${ext('https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443135453000062', 'Read the chapter')}`,
  },
  {
    date: '2026-04',
    label: 'April 2026',
    title: 'Short paper at the CHI 2026 workshop',
    html: `Published a short paper at the Engagement in Digital Health Interventions Workshop, exploring how our PPIE activities, in both method and results, sustain stakeholder engagement in MEMoPAD. ${ext('https://drive.google.com/file/d/1qrAk2zDY3VQas3r4SqpbkHbKEQn-A9lj/view', 'Read the short paper (page 77)')}`,
  },
  {
    date: '2025-11',
    label: 'November 2025',
    title: 'Position paper at BCS HCI 2025',
    html: `Published a position paper on the first three stages of our co-design at the 'Co-Designing Human-Centered AI Technologies for Health and Wellbeing' workshop, in collaboration with Carmel McGrath and Lucy Condon (NIHR ARC West; University Hospitals Bristol and Weston NHS Foundation Trust). ${ext('https://sites.google.com/view/bcs-hci-2025-workshop/position-papers', 'See position papers')}`,
  },
  {
    date: '2025-10',
    label: 'October 2025',
    title: 'Co-authored a Perspective in Nature Machine Intelligence',
    html: `'Towards deployment-centric multimodal AI beyond vision and language': a 48-author community paper led by the University of Sheffield and the Alan Turing Institute. I contributed to the sections on social science and health. ${ext('https://doi.org/10.1038/s42256-025-01116-5', 'Read the paper')} · ${ext('https://eprints.whiterose.ac.uk/id/eprint/233872/', 'Open-access version')}`,
  },
  {
    date: '2025-09',
    label: 'September 2025',
    title: 'Technical poster at the 3rd Multimodal AI Workshop',
    html: `Presented a technical poster introducing our approach to multimodal, contextualised affective computing analysis of longitudinal data, in collaboration with Vincenzo Dentamaro (University of Bari). Also won the workshop's 'best human photo about multimodal AI' prize. ${ext('https://multimodalai.github.io/multimodalai25/accepted-abstracts/', 'View all abstracts')}`,
  },
  {
    date: '2025-02',
    label: 'February 2025',
    title: 'Paper at HEALTHINF 2025',
    html: `Published 'Affective Computing in Anxiety Disorders: A Rapid Literature Review of Emotion Recognition Applications' at the 18th International Joint Conference on Biomedical Engineering Systems and Technologies. The paper was selected for a post-publication invitation. ${ext('https://doi.org/10.5220/0013322800003911', 'Read the paper')}`,
  },
  {
    date: '2024-07',
    label: 'July 2024',
    title: 'Presented at an NIHR ARC West & University of Bristol event',
    html: `Presented at 'Researcher coffee catch-up: Digital solutions for anxiety disorders', organised by NIHR Applied Research Collaboration West (ARC West). ${ext('https://www.bristol.ac.uk/neuroscience/events/2024/phwe-23jul.html', 'See event')}`,
  },
  {
    date: '2024-06',
    label: 'June 2024',
    title: 'Published 2 abstracts at the DMHW 2024 Conference',
    html: `Presented MEMoPAD and published the abstracts at the Second International Digital Mental Health and Wellbeing Conference, Ulster University. ${ext('https://pure.ulster.ac.uk/ws/portalfiles/portal/214843091/DMHW-Conference-Proceedings-2024.pdf', 'View published abstracts')}`,
  },
  {
    date: '2024-05',
    label: 'May 2024',
    title: "Presented at the 'AI in Precision Psychiatry' workshop",
    html: `An event hosted by the Elizabeth Blackwell Institute and the Bristol Neuroscience Network at the University of Bristol. ${ext('https://www.youtube.com/watch?v=_PDEcOkDbsQ', 'Watch video')}`,
  },
  {
    date: '2023-11',
    label: 'November 2023',
    title: 'Invited speaker at the University of Aberdeen',
    html: `Talk: 'Emotion recognition can support the early detection of neurodegenerative diseases', at the AI & Computer Vision for Neurodegenerative Diseases workshop of BMVC 2023. ${ext('https://sites.google.com/view/ai-cv-for-nds/home', 'See event')}`,
  },
  {
    date: '2023-06',
    label: 'June 2023',
    title: 'Publishing collaboration',
    html: `Published 'An approach using transformer architecture for emotion recognition through electrocardiogram signal(s)', co-authored with Dr Vincenzo Dentamaro, former CTO at IntelliHearts. ${ext('https://ceur-ws.org/Vol-3521/paper3.pdf', 'Read paper')}`,
  },
];

const codesign: Achievement[] = [
  {
    date: '2026-09',
    label: 'September 2026',
    title: 'Co-Design Phase VI under way',
    html: "The 'Post-design' phase takes MEMoPAD out of the lab: 10 participants in Bristol are using the working watch and companion app in their daily lives for up to five weeks. Recruitment is now closed. Thank you to everyone who applied.",
  },
  {
    date: '2026-05',
    label: 'May 2026',
    title: 'Co-Design Phase V completed',
    html: "Concluded the 'Implementation' phase with 16 lab participants and online surveys for patients and clinicians, collecting feedback for the next iteration of the prototype. Method: lab-controlled data collection sessions. Analysis: physiological time-series analysis; expert roundtable.",
  },
  {
    date: '2026-03',
    label: 'March 2026',
    title: 'HUG×SmartSocks study completed',
    html: `A parallel study exploring emotional responses in people reporting anxiety while using ${ext('https://hug.world/', 'HUG')} and wearing ${ext('https://milbotix.com/', 'Milbotix SmartSocks')}.`,
  },
  {
    date: '2025-09',
    label: 'September 2025',
    title: 'Co-Design Phase IV completed',
    html: "Concluded the 'Evaluative' phase with 25 participants, collecting feedback on the user interface and experience. Method: focus groups, interviews and demo. Analysis: affinity diagrams and comparative analysis; expert roundtable.",
  },
  {
    date: '2025-05',
    label: 'May 2025',
    title: 'Co-Design Phase III completed',
    html: "Concluded the 'Prototype' phase with 19 participants, gathering ideas for the user interface and experience. Method: focus groups, interviews and mock-ups. Analysis: affinity diagrams and comparative analysis; expert roundtable.",
  },
  {
    date: '2025-04',
    label: 'April 2025',
    title: 'Co-Design Phase II completed',
    html: "Concluded the 'Generative' phase with 20 participants, defining core features and user requirements. Method: focus groups, interviews and storyboards. Analysis: thematic and comparative; expert roundtable.",
  },
  {
    date: '2025-02',
    label: 'February 2025',
    title: 'Co-Design Phase I completed',
    html: "Concluded the 'Pre-design' phase with 24 participants, exploring the problems and needs of the different stakeholders. Method: focus groups, interviews and whiteboard. Analysis: thematic and comparative; expert roundtable.",
  },
  {
    date: '2024-07',
    label: 'July 2024',
    title: 'Co-Design Phase 0 completed',
    html: "Concluded the 'Recruiting Material Consultations' phase with 14 participants (8 patients and 6 clinicians). Method: focus groups, interviews and surveys. Analysis: affinity diagrams.",
  },
];

const byDateDesc = (a: Achievement, b: Achievement) => b.date.localeCompare(a.date);

export const ACHIEVEMENTS: AchievementCategory[] = [
  { id: 'funding-awards', name: 'Funding & Awards', icon: 'award', items: [...funding].sort(byDateDesc) },
  { id: 'publications-presentations', name: 'Publications & Presentations', icon: 'publication', items: [...publications].sort(byDateDesc) },
  { id: 'co-design-milestones', name: 'Co-Design & Milestones', icon: 'milestone', items: [...codesign].sort(byDateDesc) },
];
