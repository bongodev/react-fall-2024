import { useState } from "react"
import { ThemeContext } from "./ThemeContext";
import PropTypes from "prop-types";


export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(true);
    function toggleTheme(){
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };