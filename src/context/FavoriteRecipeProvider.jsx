import React, { createContext, useContext, useEffect, useState } from 'react';
import { userObserver } from '../firebase/auth';
import { getFavoriteRecipe } from '../firebase/firestore';
import { useAuthContext } from './AuthProvider';

//! Creating Context
const FavRecipeContext = createContext();

const FavRecipeProvider = ({ children }) => {
    const [favoriteRecipeList, setFavoriteRecipeList] = useState([]);
    const { user } = useAuthContext();
    const values = { favoriteRecipeList, setFavoriteRecipeList };

    useEffect(() => {
        getFavoriteRecipe(user?.email, setFavoriteRecipeList);
    }, []);

    return (
        <FavRecipeContext.Provider value={values}>
            {children}
        </FavRecipeContext.Provider>
    );
};

export const useFavRecipeContext = () => {
    return useContext(FavRecipeContext);
};

export default FavRecipeProvider;
