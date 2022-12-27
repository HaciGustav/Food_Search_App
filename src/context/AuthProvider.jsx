import React, { createContext, useContext, useState } from 'react';

//! Creating Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const values = { user, setUser };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
