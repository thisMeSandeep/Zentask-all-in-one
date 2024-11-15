import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );




    useEffect(() => {
        let elem = document.documentElement;
        if (theme === 'dark') {
            elem.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }
        else {
            elem.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme])




    return (
        <ThemeContext.Provider value={{theme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}