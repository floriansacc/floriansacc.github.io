import { useState, useEffect } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);


    const onToggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    const isDarkTheme = theme === 'dark' ? true : false;

    return {
        onToggleTheme,
        isDarkTheme
    }
}