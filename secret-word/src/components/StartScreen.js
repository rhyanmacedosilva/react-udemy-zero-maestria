import React from 'react'
import './StartScreen.css'

const StartScreen = ({ startGame }) => {
    return (
        <div className='start'>
            <h1>(SECRET WORD)</h1>
            <h2>- CLICK THE BUTTON TO START A NEW GAME -</h2>
            <button onClick={startGame}>Go</button>
        </div>
    )
}

export default StartScreen