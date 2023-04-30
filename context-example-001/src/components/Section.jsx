import { ColorContext } from "../contexts/ColorContext"

ColorContext
const Section = ({ color, children }) => {
    return (
        <section className="section">
            <ColorContext.Provider value={color}>
                {children}
            </ColorContext.Provider>
        </section>
    )
}

export default Section