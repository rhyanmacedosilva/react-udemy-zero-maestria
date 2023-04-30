import { createContext, useReducer } from "react";

export const reducer = (state, action) => {
    return { color: action.type }
}
export const TitleColorContext = createContext()
export const TitleColorProvider = ({ children }) => {
    const [color, dispatch] = useReducer(reducer, { color: "lightgreen" })

    return (
        <TitleColorContext.Provider value={{ color, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
}