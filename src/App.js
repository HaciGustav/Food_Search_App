import { Button, Paper, ThemeProvider } from '@mui/material';
import { blueGrey, lightGreen } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AuthProvider from './context/AuthProvider';

function App() {
    const [darkMode, setDarkMode] = useState('dark');
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
        /*  <ThemeProvider theme={theme}>
            <Paper sx={{ position: 'relative' }}>
                <Button
                    sx={{
                        backgroundColor: 'red',
                        position: 'absolute',
                        top: '5rem',
                    }}
                    variant="contained"
                    size="medium"
                    onClick={handleDarkModeSwitch}>
                    Dark Mode
                </Button>
                <Login />
            </Paper>
        </ThemeProvider> */
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
