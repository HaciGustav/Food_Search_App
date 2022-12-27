import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="home" element={<PrivateRouter />}>
                    {/* */}
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
