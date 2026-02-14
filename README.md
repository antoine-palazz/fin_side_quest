# Side Quest 2026 — Ligne d'arrivée 🏆

Page de fin de la **Side Quest de la Grande Chasse au Trésor 2026**. Un mini-site statique, joyeux et mémorable, qui félicite les joueurs et les invite à créer de nouveaux souvenirs pour la prochaine édition.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations d'entrée et micro-interactions
- **canvas-confetti** — confettis de célébration
- **html-to-image** — badge finisher téléchargeable en PNG

## Démarrage rapide

```bash
# Cloner le repo
git clone https://github.com/<ton-username>/fin_side_quest.git
cd fin_side_quest

# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev
```

Le site sera disponible sur `http://localhost:5173/fin_side_quest/`.

## Build

```bash
npm run build
```

Le dossier `dist/` contient le site statique prêt à être déployé.

## Déploiement (GitHub Pages)

Le déploiement est **automatique** via GitHub Actions :

1. Aller dans **Settings > Pages** du repo GitHub.
2. Sous "Source", choisir **GitHub Actions**.
3. Pousser sur la branche `main` → le site se déploie automatiquement.

Le workflow se trouve dans `.github/workflows/deploy.yml`.

## Modifier le contenu

Tout le texte du site est centralisé dans un seul fichier :

```
src/content/texts.ts
```

Tu peux modifier les titres, messages, souvenirs, etc. sans toucher au code des composants.

## Structure du projet

```
src/
  App.tsx               — Layout principal
  main.tsx              — Point d'entrée
  index.css             — Tailwind + custom CSS
  content/
    texts.ts            — Tout le copywriting (modifiable)
  components/
    HeroSection.tsx     — Section héro avec confettis
    MerciSection.tsx    — Message de remerciement d'Antoine
    SouvenirSection.tsx — Rétrospective des moments forts
    FutureSection.tsx   — "2026 and beyond" + partage
    BadgeSection.tsx    — Badge finisher téléchargeable
    Footer.tsx          — Footer avec easter egg
    ShareButton.tsx     — Bouton de partage (Web Share API)
    ScrollReveal.tsx    — Wrapper d'animation au scroll
    ConfettiTrigger.tsx — Déclencheur de confettis
  utils/
    confetti.ts         — Configuration canvas-confetti
    downloadBadge.ts    — Export badge en PNG
```

## Licence

Fait avec ❤️ par Antoine — 2026
