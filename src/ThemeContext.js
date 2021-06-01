import { createContext } from 'react'

// takes in a default value that is used only if no ThemeProvider found above it

// let typescript know we will have a value and a function
const ThemeContext = createContext('green', function() {});

export default ThemeContext;
