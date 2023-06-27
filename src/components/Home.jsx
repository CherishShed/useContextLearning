import React, { useState, useContext } from "react";
import { ThemeContext, TextColor } from "../contexts/ThemeContext";

function Home() {
    const { theme, dispatchTheme } = useContext(ThemeContext)
    const { color, setColor } = useContext(TextColor);
    return (
        <div style={{ background: theme.bg }}>
            <h2 style={{ color: theme.syntax }}>Hello World</h2>
            <p style={{ color: color }}>the Theme is </p>
            <button onClick={(e) => {
                dispatchTheme({ type: "DARK_THEME" })
                setColor("blue")
            }}>change to dar theme</button>
            <button onClick={(e) => {
                dispatchTheme({ type: "LIGHT_THEME" })
                setColor("red")
            }}>change to light theme</button>

        </div>
    )
}

export default Home