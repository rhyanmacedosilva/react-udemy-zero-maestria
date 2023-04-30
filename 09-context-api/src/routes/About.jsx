import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const About = () => {
    const { counter } = useContext(CounterContext)
    return (
        <div className="content">
            <p>Sobre, valor do countador: {counter}.</p>
        </div>
    )
}

export default About