import { ThemeProvider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthProvider from './context/AuthProvider';
import AppRouter from './router/AppRouter';

function App() {
    const [darkMode, setDarkMode] = useState('light');
    const theme = createTheme({
        palette: {
            mode: `${darkMode}`,
            primary: {
                main: blueGrey[300],
            },
        },
    });

    const handleDarkModeSwitch = () => {
        setDarkMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
