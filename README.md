# Stemning

En enkel stemmeapplikasjon der folk kan stemme på forslag som skal realiseres.

## Funksjoner

- Stem på forslag med + eller -
- Forslagene rangeres automatisk basert på stemmer
- Stemmer lagres i nettleseren (localStorage)
- Responsiv design som fungerer på mobil og desktop

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
  { id: 1, title: 'Ditt forslag', description: 'Beskrivelse her', votes: 0 },
  // Legg til flere forslag her
]
```

## Bygge for produksjon

```bash
npm run build
```

Output vil være i `dist/` mappen.
