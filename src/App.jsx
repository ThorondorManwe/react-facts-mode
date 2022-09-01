import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
    
    function toogleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toogleDarkMode}
            />
            <Main
                darkMode={darkMode} 
            />
        </div>
    )
}

export default App
