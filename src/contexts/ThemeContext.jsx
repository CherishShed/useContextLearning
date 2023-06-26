import React, { createContext, useState } from "react";

const ThemeContext = createContext();
function ThemeContextProvider() {

    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    })

    return (
        <ThemeContext.Provider value={{ ...theme }}>
            <h1>{`Hello the theme is ${theme}`}</h1>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider