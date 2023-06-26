import React, { useState, useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function Home() {
    const theme = ThemeContext
    console.log(theme)
    return (
        <div>
            <h2>Hello World</h2>
            <p>the Theme is {theme}</p>
        </div>
    )
}

export default Home