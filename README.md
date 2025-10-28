# Tromsø Storm - Stemmeplatform

En stemmeapplikasjon for Tromsø Storm Basketball hvor supportere og interessenter kan stemme på satsningsområder som er viktigst for klubben.

## Om Tromsø Storm

Tromsø Storm er en basketballklubb fra Tromsø som spiller i norsk basketball. Klubben har som mål å vinne 1. divisjon og sikre umiddelbar opprykk til BLNO (Basketball League Norway).

**"UVÆRFRA NORD"**

## Satsningsområder

Appen inkluderer reelle satsningsområder basert på klubbens faktiske utfordringer og mål:

- 🏀 Styrke ungdomssatsningen
- 💰 Øke sponsorinntekter
- 🎯 Vinne 1. divisjon - opprykk til BLNO
- 👨‍🏫 Investere i trener- og spillerutvikling
- 🏟️ Forbedre fasiliteter i Tromsøhallen
- 🤝 Styrke samarbeid med lokale skoler

## Funksjoner

- Stem på forslag med + eller -
- Forslagene rangeres automatisk basert på stemmer
- Stemmer lagres i nettleseren (localStorage)
- Responsiv design som fungerer på mobil og desktop
- Catppuccin Mocha fargepalett

## Kjøre lokalt

```bash
npm install
npm run dev
```

Appen vil være tilgjengelig på http://localhost:5173/

## Deploy til Vercel

### Alternativ 1: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Alternativ 2: Via Vercel Dashboard

1. Gå til https://vercel.com
2. Logg inn og klikk "Add New Project"
3. Import dette git-repositoryet
4. Vercel vil automatisk detektere at det er et Vite-prosjekt
5. Klikk "Deploy"

Vercel vil automatisk deploye appen hver gang du pusher til main branch.

## Legge til nye forslag

Rediger `initialProposals` arrayet i `src/App.jsx`:

```javascript
const initialProposals = [
  {
    id: 1,
    title: '🏀 Ditt forslag',
    description: 'Beskrivelse her',
    category: 'Kategori',
    votes: 0
  },
  // Legg til flere forslag her
]
```

## Bygge for produksjon

```bash
npm run build
```

Output vil være i `dist/` mappen.

## Lenker

- [Tromsø Storm](https://tromsostorm.no)
- [Tromsø Storm Ungdom](https://stormungdom.no)

---

*Uoffisiell stemmeplatform laget med React, Vite og Catppuccin fargepalett*
