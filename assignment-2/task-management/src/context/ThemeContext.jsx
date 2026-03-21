import { createContext, useContext, useState } from "react";


export const ThemeContext = createContext();

export const useThemeContext = () => {
  const useTheme = useContext(ThemeContext)
  if(!useTheme) throw new Error('useThemeContext must be used within TaskProvider')
    return useTheme;
}

export const ThemeProvider = ({children}) => {

  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(prev => !prev)
  };

  const value = {
    darkTheme, toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}