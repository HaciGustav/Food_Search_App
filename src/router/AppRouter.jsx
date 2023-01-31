import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import RecipeDetails from '../pages/RecipeDetails';
import Welcome from '../pages/Welcome';
import PrivateRouter from './PrivateRouter';

const AppRouter = ({ handleDarkModeSwitch }) => {
    return (
        <BrowserRouter>
            <Navbar />
            <Box
                onClick={handleDarkModeSwitch}
                sx={{
                    position: 'fixed',
                    left: '10px',
                    top: '7rem',
                    backgroundColor: 'magenta',
                }}>
                Switch Mode
            </Box>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="" element={<PrivateRouter />}>
                    <Route path="/detail" element={<RecipeDetails />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
