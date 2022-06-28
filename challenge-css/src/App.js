import { useState } from 'react'
import './App.css'
import GameDetails from './components/GameDetails'

function App() {
  const [games] = useState([
    { id: 0, nome: 'Diablo III', genero: 'ARPG', releaseDate: 2012 },
    { id: 1, nome: 'Dark Souls', genero: 'ARPG', releaseDate: 2011 },
    { id: 2, nome: 'The Last Of Us', genero: 'Action', releaseDate: 2013 }
  ])

  return (
    <div className="App">
      <h1>Random Games</h1>
      {games.map((game) => (
        <GameDetails
          key={game.id}
          nome={game.nome}
          genero={game.genero}
          releaseDate={game.releaseDate} />
      ))}
    </div>
  )
}

export default App
