import { useSyncExternalStore } from 'react'

// Mini-router basato sull'hash dell'URL (#/projects, #/skills, ...).
// Nessuna dipendenza esterna e funziona su GitHub Pages senza configurazione
// (niente 404 su refresh, a differenza del routing "history").

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getSnapshot() {
  // '#/projects' -> '/projects' ; vuoto -> '/'
  return window.location.hash.slice(1) || '/'
}

export function useHashRoute(): string {
  return useSyncExternalStore(subscribe, getSnapshot, () => '/')
}

export const ROUTES = [
  { path: '/', label: 'home', cmd: 'cd ~' },
  { path: '/projects', label: 'progetti', cmd: 'ls ./projects' },
  { path: '/skills', label: 'skills', cmd: 'cat skills.txt' },
  { path: '/contact', label: 'contatti', cmd: 'ping me' },
] as const

export type RoutePath = (typeof ROUTES)[number]['path']
