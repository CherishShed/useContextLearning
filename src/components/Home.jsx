import React, { useState, useContext } from "react";
import { ThemeContext, TextColor } from "../contexts/ThemeContext";

function Home() {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const currentTheme = isLightTheme ? light : dark;
    const color = useContext(TextColor)

    return (
        <div>
            <h2 style={{ background: currentTheme.bg }}>Hello World</h2>
            <p style={{ color: color }}>the Theme is </p>
        </div>
    )
}

export default Home