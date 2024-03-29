import { ThemeProvider } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/AuthProvider';
import FavRecipeProvider from './context/FavoriteRecipeProvider';
import RelatedRecipeProvider from './context/RelatedRecipeProvider';
import AppRouter from './router/AppRouter';

function App() {
    const [darkMode, setDarkMode] = useState('light');
    const theme = createTheme({
        palette: {
            mode: `${darkMode}`,
            primary: {
                main: blueGrey[600],
            },
        },
    });

    const handleDarkModeSwitch = () => {
        setDarkMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <FavRecipeProvider>
                    <RelatedRecipeProvider>
                        <AppRouter
                            darkMode={darkMode}
                            handleDarkModeSwitch={handleDarkModeSwitch}
                        />
                        <ToastContainer />
                    </RelatedRecipeProvider>
                </FavRecipeProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
