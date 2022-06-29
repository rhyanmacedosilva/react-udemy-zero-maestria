import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Game from './components/Game'
import GameOver from './components/GameOver'
import StartScreen from './components/StartScreen'
import { wordList } from './data/Words'

const guestQty = 4
const stages = [
  { id: 0, name: 'START' },
  { id: 1, name: 'GAME' },
  { id: 2, name: 'GAME_OVER' }
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guestQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[
      Math.floor(Math.random() * categories.length)
    ]
    const word = words[category][
      Math.floor(Math.random() * words[category].length)
    ]
    return { word, category }
  }, [words])

  const startGame = useCallback(() => {
    const { word, category } = pickWordAndCategory()
    let wordLetters = word.toLowerCase().split('')


    clearLetterStates()
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    if (guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)) {
      return
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((prevGuessedLetters) => (
        [...prevGuessedLetters, normalizedLetter]
      ))
    } else {
      setWrongLetters((prevWrongLetters) => (
        [...prevWrongLetters, normalizedLetter]
      ))

      setGuesses((prevGuesses) => (
        --prevGuesses
      ))
    }
  }

  const retry = () => {
    setScore(0)
    setGuesses(guestQty)
    setGameStage(stages[0].name)
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    // new array with unique elements
    const uniqueLetters = [...new Set(letters)]

    if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
      setScore((prevScore) => (prevScore + 100))
      startGame()
    }
  }, [guessedLetters, gameStage, letters, startGame])


  return (
    <div className="App">
      {gameStage === 'START' && <StartScreen startGame={startGame} />}
      {gameStage === 'GAME' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'GAME_OVER' && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App