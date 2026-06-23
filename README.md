# omar76901.github.io

Portfolio personale di **Omar Nespoli**, single-page in stile *terminal* (minimale e
scuro), costruito con **React + Vite + TypeScript** e pubblicato su **GitHub Pages**
tramite GitHub Actions.

🔗 Live: https://omar76901.github.io

## Personalizzare i contenuti

Tutti i testi, i progetti, lo stack e l'accento colore sono in un unico file:

```
src/data.ts
```

- `ACCENT` — colore d'accento usato ovunque (default `#c9a96a` gold; alternative nei commenti).
- `profile` — status line, headline, intro, bio, avatar, stack, testi della CTA.
- `projects` — le card della sezione *Selected work* (solo progetti reali).
- `marquee` — le due righe di testo animate dietro la hero.

Modifica quel file e fai push: la pipeline ricostruisce e pubblica il sito da sola.

## Sezioni

Pagina singola con nav sticky e ancore: **Hero → Selected work → About → Contact/Footer**.

## Sviluppo in locale

Serve [Node.js](https://nodejs.org) (LTS, 20+).

```bash
npm install      # installa le dipendenze
npm run dev      # dev server con hot-reload su http://localhost:5173
npm run build    # build di produzione in dist/ (tsc + vite build)
npm run preview  # serve la build di produzione in locale
```

## Deploy

Automatico: ogni `push` su `main` attiva [`deploy.yml`](.github/workflows/deploy.yml),
che builda e pubblica `dist/` su GitHub Pages. Il job di deploy ha `needs: build`,
quindi **se la build fallisce il sito non viene rilasciato**.

> **Configurazione una tantum:** *Settings → Pages → Build and deployment* →
> **Source = GitHub Actions**.

## Qualità & sicurezza

- **CI sulle PR** ([`ci.yml`](.github/workflows/ci.yml)): `npm install` + `npm audit` +
  `npm run build` su ogni pull request, così gli aggiornamenti che rompono il build
  vengono bloccati prima del merge.
- **CodeQL** ([`codeql.yml`](.github/workflows/codeql.yml)): analisi statica
  `security-and-quality` su push/PR e settimanale.
- **Dependabot** ([`dependabot.yml`](.github/dependabot.yml)): aggiornamenti settimanali
  per npm e GitHub Actions, con ecosistemi correlati raggruppati (react, vite).
- **Content Security Policy** in [`index.html`](index.html): script/asset same-origin;
  unici domini esterni ammessi = Google Fonts. Dettagli in [SECURITY.md](SECURITY.md).
- Versioni delle dipendenze **fissate** (pin esatto) in `package.json`.

## Stack & asset

- **React 19 + Vite 8 + TypeScript**.
- Font: **Space Grotesk** + **IBM Plex Sans/Mono** (Google Fonts).
- Avatar self-hostato in `public/avatar.jpg`; thumbnail progetto in `public/thumb-portfolio.svg`.

## Struttura

```
public/
├─ favicon.svg
├─ avatar.jpg              ← avatar (self-hostato)
└─ thumb-portfolio.svg     ← immagine della card progetto
src/
├─ data.ts                 ← contenuti + accento (modifica qui)
├─ App.tsx                 ← composizione + tema (--accent)
├─ index.css               ← tutti gli stili
└─ components/             ← Nav, Hero, Work, About, Cta, Footer
```
