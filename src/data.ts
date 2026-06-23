// ──────────────────────────────────────────────────────────────
//  Tutti i contenuti del portfolio sono qui: modifica solo questo
//  file per personalizzare testi, progetti, skill e contatti.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: 'Omar Nespoli',
  role: 'Software Developer',
  // Handle "anonimo" mostrato come prompt nella Hero.
  handle: 'root@on',
  // Una frase di presentazione mostrata nella Hero.
  tagline:
    'Costruisco backend, automazioni e infrastruttura. Codice pulito, sistemi sicuri, zero rumore.',
  // Paragrafo più lungo nella sezione About.
  about:
    'Sviluppatore con il pallino per automazione, integrazioni e sicurezza. ' +
    'Lavoro principalmente con Python e Docker e mi muovo nel front-end moderno (questo sito gira su React + Vite). ' +
    'Trasformo problemi ripetitivi in strumenti che lavorano al posto mio.',
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
    title: 'Portfolio personale',
    description:
      'Questo sito: single-page application su React + Vite + TypeScript, con CSP, CodeQL e Dependabot. Deploy automatico su GitHub Pages via GitHub Actions.',
    tech: ['React', 'TypeScript', 'Vite', 'GitHub Pages', 'CodeQL'],
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
    category: 'DevOps & Security',
    items: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'CodeQL'],
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
]
