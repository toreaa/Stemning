import { useState, useEffect } from 'react'
import './App.css'

const initialProposals = [
  { id: 1, title: 'Implementere Redis', description: 'Bruke Redis for caching og bedre ytelse', votes: 0 },
  { id: 2, title: 'Jobbe mer med sikkerhet', description: 'Fokus på security best practices', votes: 0 },
  { id: 3, title: 'Jobbe mer med kultur', description: 'Forbedre arbeidskultur og samarbeid', votes: 0 },
]

function App() {
  const [proposals, setProposals] = useState(() => {
    // Last fra localStorage ved oppstart
    const saved = localStorage.getItem('proposals')
    return saved ? JSON.parse(saved) : initialProposals
  })

  // Lagre til localStorage når proposals endres
  useEffect(() => {
    localStorage.setItem('proposals', JSON.stringify(proposals))
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
        <h1>Stemning</h1>
        <p>Stem på forslagene du ønsker å realisere</p>
      </header>

      <main className="proposals-container">
        {proposals.map((proposal, index) => (
          <article key={proposal.id} className="proposal-card">
            <div className="rank">#{index + 1}</div>
            <div className="proposal-content">
              <h2>{proposal.title}</h2>
              <p>{proposal.description}</p>
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
    </div>
  )
}

export default App
