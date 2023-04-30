import { useContext } from "react"
import { ColorContext } from "../contexts/ColorContext"

const Heading = ({ children }) => {
    const color = useContext(ColorContext)

    return <p style={{ color: color }}> {children}</p>
}

export default Heading