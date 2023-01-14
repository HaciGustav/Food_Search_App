import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import RecipeDetails from '../pages/RecipeDetails';
import Welcome from '../pages/Welcome';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />

                <Route path="/detail" element={<RecipeDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
