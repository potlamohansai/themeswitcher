import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Colors"


const HeroSection = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}
        >
            <h1>Context API Theme toggler</h1>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            <p style={{margin: "20px 200px"}}>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            <p style={{margin: "20px 200px"}}>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            <p style={{margin: "20px 200px"}}>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            <p style={{margin: "20px 200px"}}>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            <button
                style ={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#fff",
                    border: `${currentTheme.border}`
                }}
                onClick= { () => {
                    setThemeMode(themeMode === 'light' ? "dark":"light")
                }}
                > Click Me</button>
        </div>
    )
}

export default HeroSection