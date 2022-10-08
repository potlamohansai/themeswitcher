import React,{useContext} from "react";
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = ()=> {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div
        onClick= { () => {
            setThemeMode(themeMode === 'light' ? "dark":"light")
        }}
        >
            <button style={{textAlign:"center"}}>{themeMode === 'light'? "Turn Off" : "Lights On"}</button>
        </div>
    )

}

export default ThemeToggler
