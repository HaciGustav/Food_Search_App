import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const RelatedRecipeContext = createContext();

const RelatedRecipeProvider = ({ children }) => {
    const [params, setParams] = useState(null);

    // recipe fetching func. according to labels
    //! I know this func. shouldn't be here but this feature was not planned :)
    const getRelatedRecipeFromTags = async (param, setLoading) => {
        setLoading(true);
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=${
            process.env.REACT_APP_ID
        }&app_key=${
            process.env.REACT_APP_API_KEY
        }&${param?.health?.toLowerCase()}=${param?.label?.toLowerCase()}`;

        let relatedRecipes = [];

        try {
            const { data } = await axios(url);
            relatedRecipes = data;
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
        return relatedRecipes;
    };
    const values = {
        getRelatedRecipeFromTags,
        setParams,
        params,
    };

    return (
        <RelatedRecipeContext.Provider value={values}>
            {children}
        </RelatedRecipeContext.Provider>
    );
};

export const useRelatedRecipeContext = () => {
    return useContext(RelatedRecipeContext);
};

export default RelatedRecipeProvider;
