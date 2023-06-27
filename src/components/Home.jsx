import React, { useState, useContext } from "react";
import { ThemeContext, TextColor } from "../contexts/ThemeContext";

function Home() {
    const { isLightTheme, light, dark, setTheme } = useContext(ThemeContext)
    const currentTheme = isLightTheme ? light : dark;
    const { color, setColor } = useContext(TextColor);
    return (
        <div style={{ background: currentTheme.bg }}>
            <h2 style={{ color: currentTheme.syntax }}>Hello World</h2>
            <p style={{ color: color }}>the Theme is </p>
            <button onClick={(e) => {
                setTheme(!isLightTheme)
                setColor("blue")
            }}>change theme</button>

        </div>
    )
}

export default Home