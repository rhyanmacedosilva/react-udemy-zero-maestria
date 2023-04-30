// import { useState } from 'react'
import { useReducer } from 'react'
import './App.css'

function App() {
  function reducer(state, action) {
    const { type, amount } = action
    const progress = type == "increase" ?
      state.progress + amount : state.progress - amount
    return { progress }
  }

  // const [progress, setProgress] = useState(0)
  const [{ progress }, dispatch] = useReducer(reducer, { progress: 10 })
  console.log("progress", progress)

  return (
    <>
      <h3 className="title">(Not a Progress Bar)</h3>
      <div className="bar">
        <div style={{ width: `${progress}%` }} className="bar-filler"></div>
      </div>
      <div className="actions">
        {/* <button onClick={() => setProgress(prev => prev - 10)} className="btn">-</button> */}
        {/* <button onClick={() => setProgress(prev => prev + 10)} className="btn">+</button> */}
        <button onClick={() => dispatch({ type: "decrease", amount: 10 })} className="btn">-</button>
        <button onClick={() => dispatch({ type: "increase", amount: 10 })} className="btn">+</button>
      </div>
    </>
  )
}

export default App
