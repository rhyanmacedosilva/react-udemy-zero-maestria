import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Rhyan', 'Pippo', 'Naiana'])
    const [games, setGames] = useState([
        { id: 0, title: 'Super Mario World' },
        { id: 1, title: 'Fortnite' },
        { id: 2, title: 'Rocket League' },
        { id: 3, title: 'Diablo III' }
    ])

    const deleteRandomGame = () => {
        setGames((prevGames) => {
            const randomIndex = Math.floor(Math.random() * (games.length))
            const result = prevGames.filter((game, index) => (
                (randomIndex !== index)
            ))
            return result
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.title}</li>
                ))}
            </ul>
            <button onClick={deleteRandomGame}>Delete Random Game</button>
        </div>
    )
}

export default ListRender