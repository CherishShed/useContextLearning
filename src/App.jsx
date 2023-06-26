import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/Home"
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  // const theme = useContext(ThemeContextProvider)
  return (
    <>
      <Home />
    </>
  )
}

export default App
