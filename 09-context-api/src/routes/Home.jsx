import { useContext } from "react"
// import CounterContext from "../context/CounterContext"
import ChangeCounter from "../components/ChangeContext"
import useCounterContext from "../hooks/useCounterContext"
import useTitleColorContext from "../hooks/useTitleColorContext"

const Home = () => {
    // const { counter } = useContext(CounterContext)
    const { counter } = useCounterContext()
    const { color, dispatch } = useTitleColorContext()
    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <div className="content content-home" >
            <h3 style={color}>Home</h3>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter></ChangeCounter>
            <button onClick={() => setTitleColor("gold")}>Amarelo</button>
            <button onClick={() => setTitleColor("hotpink")}>Rosa</button>
        </div >
    )
}

export default Home