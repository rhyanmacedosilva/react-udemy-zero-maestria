import { useRef, useState } from 'react'
import './Game.css'

const Game = ({ verifyLetter, pickedWord,
    pickedCategory, letters, guessedLetters,
    wrongLetters, guesses, score }) => {

    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        verifyLetter(letter)
        setLetter('')
        letterInputRef.current.focus()
        e.preventDefault()
    }

    return (
        <div className="game">
            <h1>Game</h1>
            <h2 className="points">
                <span>Score: {score}</span>
            </h2>
            <h1>Guess the Word:</h1>
            <h2>Tip: <span className="tip_span">({pickedCategory})</span></h2>
            <h2>You can try {guesses} more times!</h2>
            <div className="word_container">
                {letters.map((letter, index) => (
                    guessedLetters.includes(letter) ?
                        <span key={index} className="letter">{letter}</span> :
                        <span key={index} className="blank_square"></span>
                ))}
            </div>
            <div className="letter_container">
                <p>Pick a Letter</p>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setLetter(e.target.value)}
                        type="text"
                        name="letter"
                        value={letter}
                        maxLength="1"
                        ref={letterInputRef}
                        required />
                    <button>Play</button>
                </form>
            </div>
            <div className="wrong_letters_container">
                <p>Wrong letters you've tried before:</p>
                {wrongLetters.map((letter, index) => (
                    <span key={index}>{letter}, </span>
                ))}
            </div>
        </div>
    )
}

export default Game