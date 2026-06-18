// ──────────────────────────────────────────────────────────────
//  Tutti i contenuti del portfolio sono qui: modifica solo questo
//  file per personalizzare testi, progetti, skill e contatti.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: 'Omar Nespoli',
  role: 'Software Developer',
  // Una frase di presentazione mostrata nella Hero.
  tagline:
    'Costruisco backend, automazioni e bot. Mi piace scrivere codice pulito e imparare cose nuove ogni giorno.',
  // Paragrafo più lungo nella sezione About.
  about:
    'Sono uno sviluppatore appassionato di automazione, integrazioni e infrastruttura. ' +
    'Lavoro principalmente con Python e Docker, e sto esplorando il front-end moderno (come questo portfolio, costruito con React e Vite). ' +
    'Mi diverto a trasformare problemi noiosi in strumenti che lavorano al posto mio.',
}

export type Project = {
  title: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'News Discord Bot',
    description:
      'Bot Discord che aggrega notizie e le pubblica automaticamente nei canali. Containerizzato con immagine distroless per un runtime sicuro e leggero.',
    tech: ['Python', 'Docker', 'Discord API', 'CI/CD'],
    repo: 'https://github.com/Omar76901/News-discord-bot',
  },
  {
    title: 'Portfolio personale',
    description:
      'Questo sito: una single-page application costruita con React + Vite + TypeScript e pubblicata su GitHub Pages tramite GitHub Actions.',
    tech: ['React', 'TypeScript', 'Vite', 'GitHub Pages'],
    repo: 'https://github.com/Omar76901/omar76901.github.io',
    demo: 'https://omar76901.github.io',
  },
  // Aggiungi qui altri progetti copiando il blocco qui sopra.
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Linguaggi',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Front-end',
    items: ['React', 'HTML', 'CSS', 'Vite'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'GitHub Actions', 'Linux'],
  },
]

export type SocialLink = {
  label: string
  href: string
  // Icona SVG inline (path) — vedi components/icons.
  icon: 'github' | 'linkedin' | 'mail'
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Omar76901', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/', // ← inserisci il tuo profilo
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:omarnespoli@gmail.com', icon: 'mail' },
]
