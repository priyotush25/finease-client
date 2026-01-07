import React, { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {

const [theme, setTheme] = useState("light")

// apply theme
useEffect( ()=>{
    document.documentElement.setAttribute("data-theme", theme)
},[theme]);

// toggle theme
 const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;