import React, { createContext, useState } from "react";

const ThemeContext = createContext();
function ThemeContextProvider(props) {

    const [theme, setTheme] = useState("Shedi")

    return (
        <ThemeContext.Provider value={{ ...theme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider