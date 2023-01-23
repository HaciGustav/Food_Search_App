import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Home from '../pages/Home';
import RecipeDetails from '../pages/RecipeDetails';
import Welcome from '../pages/Welcome';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />

                <Route path="/detail" element={<PrivateRouter />}>
                    <Route path="" element={<RecipeDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
