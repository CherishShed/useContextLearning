import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const TextColor = createContext();
function ThemeContextProvider(props) {

    const [theme, setTheme] = useState(true)
    const value = {
        isLightTheme: theme,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
        setTheme
    }

    return (
        <ThemeContext.Provider value={{ ...value }}>
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