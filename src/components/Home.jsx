import React, { useState, useContext } from "react";
import ThemeContextProvider from "../contexts/ThemeContext";

function Home() {
    const theme = useContext(ThemeContextProvider)
    return (
        <div>
            <h2>Hello World</h2>
            <p>the Theme is {theme}</p>
        </div>
    )
}

export default Home