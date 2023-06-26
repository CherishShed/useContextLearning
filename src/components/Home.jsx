import React, { useState, useContext } from "react";
import ThemeContextProvider from "../contexts/ThemeContext";

function Home() {
    const theme = useContext(ThemeContextProvider)
    console.log(theme)
    return (
        <div>

            <ThemeContextProvider>
                <h2>Hello World</h2>
                <p>the Theme is {theme}</p>
            </ThemeContextProvider>
        </div >
    )
}

export default Home