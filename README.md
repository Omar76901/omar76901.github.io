# omar76901.github.io

Portfolio personale di **Omar Nespoli**, costruito con **React + Vite + TypeScript** e
pubblicato su **GitHub Pages** tramite GitHub Actions.

🔗 Live: https://omar76901.github.io

## Personalizzare i contenuti

Tutti i testi (presentazione, progetti, skill, contatti) sono in un unico file:

```
src/data.ts
```

Modifica quel file e fai push: la pipeline ricostruisce e pubblica il sito da sola.

## Sviluppo in locale

Serve [Node.js](https://nodejs.org) (LTS, versione 20+).

```bash
npm install      # installa le dipendenze
npm run dev      # avvia il dev server con hot-reload su http://localhost:5173
npm run build    # genera la build di produzione in dist/
npm run preview  # serve la build di produzione in locale
```

## Deploy

Il deploy è automatico: ogni `push` sul branch `main` attiva il workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), che builda il
progetto e pubblica la cartella `dist/` su GitHub Pages.

> **Configurazione necessaria una sola volta:** in *Settings → Pages → Build and
> deployment*, imposta **Source = GitHub Actions**.

## Struttura

```
src/
├─ data.ts            ← contenuti del sito (modifica qui)
├─ App.tsx            ← composizione delle sezioni
├─ index.css          ← tutti gli stili
└─ components/        ← Navbar, Hero, About, Projects, Skills, Contact, Footer
```
