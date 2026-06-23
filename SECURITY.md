# Security Policy

## Supported Versions

Questo è un sito statico personale: viene mantenuta e pubblicata solo l'ultima
versione presente sul branch `main`.

## Reporting a Vulnerability

Se individui una vulnerabilità (nel sito o nella catena di dipendenze), apri una
**Security Advisory privata** dalla tab *Security → Advisories* del repository,
oppure una issue senza includere dettagli sensibili di exploit.

Indica:

- una descrizione del problema e dell'impatto;
- i passi per riprodurlo;
- eventuali versioni/commit interessati.

## Misure di sicurezza attive

- **Content Security Policy** restrittiva via `<meta>` in `index.html`.
- **Versioni delle dipendenze fissate** (pin esatto) in `package.json`.
- **Dependabot** per aggiornamenti di sicurezza su npm e GitHub Actions.
- **CodeQL** (analisi statica `security-and-quality`) a ogni push/PR e settimanale.
- **`npm audit`** sulle dipendenze runtime nella pipeline di deploy.
- **Permessi minimi** (`contents: read`) nei workflow GitHub Actions.
- **HTTPS forzato** lato GitHub Pages.

> Nota: GitHub Pages non consente di impostare header HTTP personalizzati
> (es. `X-Frame-Options`, `Strict-Transport-Security`). Le protezioni lato
> client sono quindi applicate tramite tag `<meta>` dove possibile.
