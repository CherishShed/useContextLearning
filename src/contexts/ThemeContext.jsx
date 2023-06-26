import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const TextColor = createContext();
function ThemeContextProvider(props) {

    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    })

    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
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