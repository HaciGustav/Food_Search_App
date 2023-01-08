import React, { createContext, useContext, useEffect, useState } from 'react';
import { userObserver } from '../firebase/auth';

//! Creating Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const values = { user, setUser };

    useEffect(() => {
        userObserver(setUser);
    }, []);

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
