import { useState, useEffect } from 'react'
import './App.css'

const initialProposals = [
  {
    id: 1,
    title: '🏀 Styrke ungdomssatsningen',
    description: 'Utvide skolelagene og inkluderingsprosjekter for å rekruttere flere unge spillere',
    category: 'Ungdom',
    votes: 0
  },
  {
    id: 2,
    title: '💰 Øke sponsorinntekter',
    description: 'Sikre økonomisk stabilitet gjennom flere sponsorer og støttemedlemmer',
    category: 'Økonomi',
    votes: 0
  },
  {
    id: 3,
    title: '🎯 Vinne 1. divisjon - opprykk til BLNO',
    description: 'Fokusere alt på å vinne serien og sikre umiddelbar opprykk til øverste nivå',
    category: 'Sportslig',
    votes: 0
  },
  {
    id: 4,
    title: '👨‍🏫 Investere i trener- og spillerutvikling',
    description: 'Satse på å utvikle egne spillere og heve kompetansen til trenerapparatet',
    category: 'Utvikling',
    votes: 0
  },
  {
    id: 5,
    title: '🏟️ Forbedre fasiliteter i Tromsøhallen',
    description: 'Oppgradere treningsforhold og skape en bedre hjemmebanearena',
    category: 'Infrastruktur',
    votes: 0
  },
  {
    id: 6,
    title: '🤝 Styrke samarbeid med lokale skoler',
    description: 'Bygge sterkere bånd med skoler i Tromsø for bedre rekruttering',
    category: 'Rekruttering',
    votes: 0
  },
]

function App() {
  const [proposals, setProposals] = useState(() => {
    // Last fra localStorage ved oppstart
    const saved = localStorage.getItem('storm-proposals')
    return saved ? JSON.parse(saved) : initialProposals
  })

  // Lagre til localStorage når proposals endres
  useEffect(() => {
    localStorage.setItem('storm-proposals', JSON.stringify(proposals))
  }, [proposals])

  // Stem på et forslag (+ eller -)
  const vote = (id, change) => {
    setProposals(prevProposals => {
      const updated = prevProposals.map(proposal =>
        proposal.id === id
          ? { ...proposal, votes: proposal.votes + change }
          : proposal
      )
      // Sorter etter votes (høyest først)
      return updated.sort((a, b) => b.votes - a.votes)
    })
  }

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <img src="/storm-logo.png" alt="Tromsø Storm" className="club-logo" />
          <div className="header-text">
            <h1>Tromsø Storm</h1>
            <p className="tagline">UVÆRFRA NORD</p>
            <p className="subtitle">Stem på satsningsområdene du mener er viktigst for klubben</p>
          </div>
        </div>
      </header>

      <main className="proposals-container">
        {proposals.map((proposal, index) => (
          <article key={proposal.id} className="proposal-card">
            <div className="rank">#{index + 1}</div>
            <div className="proposal-content">
              <h2>{proposal.title}</h2>
              <p>{proposal.description}</p>
              <span className="category-badge">{proposal.category}</span>
            </div>
            <div className="voting-controls">
              <button
                className="vote-btn upvote"
                onClick={() => vote(proposal.id, 1)}
                aria-label="Stem opp"
              >
                +
              </button>
              <span className="vote-count">{proposal.votes}</span>
              <button
                className="vote-btn downvote"
                onClick={() => vote(proposal.id, -1)}
                aria-label="Stem ned"
              >
                −
              </button>
            </div>
          </article>
        ))}
      </main>

      <footer className="app-footer">
        <p>En stemmeplatform for Tromsø Storm supportere og interessenter</p>
        <p className="footer-links">
          <a href="https://tromsostorm.no" target="_blank" rel="noopener noreferrer">tromsostorm.no</a>
          {' · '}
          <a href="https://stormungdom.no" target="_blank" rel="noopener noreferrer">Storm Ungdom</a>
        </p>
      </footer>
    </div>
  )
}

export default App
