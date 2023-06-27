import React, { createContext, useState, useReducer } from "react";

export const ThemeContext = createContext();
export const TextColor = createContext();
function ThemeContextProvider(props) {

    const themeReducer = (state, action) => {
        switch (action.type) {
            case "LIGHT_THEME":
                return { ...state, syntax: "#555", ui: "#ddd", bg: "#eee" }

            case "DARK_THEME":
                return { ...state, syntax: "#ddd", ui: "#333", bg: "#555" }
            default:
                return state
        }
    }
    const [theme, dispatchTheme] = useReducer(themeReducer, {
        syntax: "#555", ui: "#ddd", bg: "#eee"
    })
    return (
        <ThemeContext.Provider value={{ theme, dispatchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export function TextColorContext(props) {
    const [color, setColor] = useState("red")

    return (
        <TextColor.Provider value={{ color, setColor }}>
            {props.children}
        </TextColor.Provider>
    )
}

export default ThemeContextProvider