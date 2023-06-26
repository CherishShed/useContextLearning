import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TextColor } from "../contexts/ThemeContext";

function Home() {
    const { isLightTheme, light, dark } = ThemeContext.Consumer._currentValue
    const currentTheme = isLightTheme ? light : dark;
    const color = TextColor.Consumer._currentValue

    return (
        <div>
            <h2 style={{ background: currentTheme.bg }}>Hello World</h2>
            <p style={{ color: color }}>the Theme is </p>
        </div>
    )
}

export default Home