import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />

                {/* <Route path="/profile" element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
