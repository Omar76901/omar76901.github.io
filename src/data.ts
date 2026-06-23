// ──────────────────────────────────────────────────────────────
//  Tutti i contenuti del portfolio sono qui: modifica solo questo
//  file per personalizzare testi, progetti, skill e contatti.
// ──────────────────────────────────────────────────────────────

// Colore accento usato ovunque (dot, link, bottoni primari, anni).
// Alternative dal template: #00ADD8 (Go blue), #3ddc97, #c9a96a, #7c8cff.
export const ACCENT = '#4cc9c0'

export const profile = {
  brand: 'omar.nespoli',
  github: 'https://github.com/Omar76901',
  githubLabel: 'github.com/Omar76901',

  // Hero
  statusLine: 'backend developer @ Sorint.lab · based in Italy',
  headline: 'Backend developer building reliable, secure distributed systems.',
  intro: [
    'Hacker by nature, developer by profession.',
    'I design and ship services in Go, Java and Python —',
    'from identity to object storage — and run them on Kubernetes.',
  ],

  // About
  showAvatar: true,
  avatar: '/avatar.jpg',
  avatarCaption: ['Omar Nespoli', '@sorintlab', 'Italy'],
  about:
    'Software engineer focused on backend and platform work. I care about ' +
    'systems that are honest about their failure modes — clean APIs, observable ' +
    'services, and infrastructure you can reason about. Keep it minimal. Keep it ' +
    'dark. Keep it honest.',
  stack: [
    'Go',
    'Python',
    'Java',
    'Micronaut',
    'Docker',
    'Kubernetes',
    'Linux',
    'PostgreSQL',
    'MinIO',
  ],

  // Contact
  ctaTitle: "Let's build something solid.",
  ctaSubtitle:
    'Always happy to talk distributed systems, security and open source.',
}

// Marquee animato dietro la hero (due righe in direzioni opposte).
export const marquee = {
  row1: 'GO · KUBERNETES · KEYCLOAK · DOCKER · POSTGRESQL · MINIO · LINUX · MICRONAUT · ',
  row2: 'DISTRIBUTED SYSTEMS · IDENTITY · OBSERVABILITY · SECURITY · CLEAN APIS · CLOUD NATIVE · ',
}

export type Project = {
  title: string
  year: string
  description: string
  tags: string[]
  href: string
  thumbCaption: string
}

// Solo progetti reali. Aggiungine altri copiando il blocco.
export const projects: Project[] = [
  {
    title: 'omar76901.github.io',
    year: '2026',
    description:
      'This very portfolio — a static SPA built with React + Vite, minimal and dark, deployed on GitHub Pages.',
    tags: ['React', 'TypeScript', 'Vite'],
    href: 'https://github.com/Omar76901/omar76901.github.io',
    thumbCaption: '// portfolio.png',
  },
]
