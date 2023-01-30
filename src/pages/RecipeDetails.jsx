import {
    Avatar,
    Container,
    Link,
    List,
    ListItem,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecipesCarousel from '../components/RecipeCaroussel';

const ListComponent = ({ arr, heading, match768 }) => (
    <List
        sx={{
            width: match768 ? '100%' : '80%',
            margin: 'auto',
        }}>
        <Typography variant="h6">{heading}:</Typography>
        {arr?.map((x) => (
            <ListItem key={x}>◈ {x.toUpperCase()}</ListItem>
        ))}
    </List>
);

const Label = ({ label }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    backgroundColor: '#0002',
                    marginRight: '3px',
                }}>
                {label}
            </Box>
        </>
    );
};

const IngListItem = ({ item }) => {
    return (
        <ListItem
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '400px',
            }}>
            {' '}
            ◈ {item?.text} <Avatar alt={item?.food} src={item?.image} />{' '}
        </ListItem>
    );
};

const RecipeDetails = () => {
    const [relatedRecipes, setRelatedRecipes] = useState([]);

    //media query parameters
    const matchLessThan576 = useMediaQuery('(max-width: 576px)');
    const match576 = useMediaQuery('(max-width: 576px)');
    const match768 = useMediaQuery('(max-width: 768px)');
    const match992 = useMediaQuery('(max-width: 992px)');
    const matches = { match576, match768, match992 };
    const { state } = useLocation();

    const {
        ingredients,
        label,
        image,
        mealType,
        dishType,
        cuisineType,
        dietLabels,
        totalTime,
        source,
        uri,
        url,
    } = state.recipe;

    const recipeImageStyle = {
        minWidth: '50%',
        width: '100%',

        height: '50vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const getRelatedRecipes = async () => {
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&dishType=${dishType}`;

        try {
            const { data } = await axios(url);
            setRelatedRecipes(data.hits);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getRelatedRecipes();
    }, []);

    return (
        <Box
            sx={{
                width: match992 ? '100%' : '80%',
                margin: 'auto',
                paddingTop: '1rem',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: match992 && 'column',
                    rowGap: '1rem',
                    width: '100%',
                    height: match992 ? '80vh' : '50vh',
                    borderBottom: '1px solid #0002',
                }}>
                <Box sx={{ minWidth: '50%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            rowGap: '1.5rem',
                            alignItems: 'center',

                            height: '100%',
                        }}>
                        <Typography variant="h3" textAlign={'center'}>
                            {label}
                        </Typography>
                        <Box>
                            <Typography sx={{ textAlign: 'center' }}>
                                FROM{' '}
                                <span style={{ fontWeight: '600' }}>
                                    {source}
                                </span>
                            </Typography>
                            <Link
                                href={url}
                                color="inherit"
                                underline="hover"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingTop: '10px',
                                    justifyContent: 'center',
                                }}>
                                Go to Website <LaunchIcon fontSize="small" />
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',

                                justifyContent: 'center',
                                rowGap: '1.5rem',
                                alignItems: 'center',
                            }}>
                            {dietLabels?.map((item, i) => (
                                <Label key={i} label={item} />
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box sx={recipeImageStyle}></Box>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ padding: '1rem 0 0 1rem' }}>
                    Total Time:{' '}
                    <span style={{ fontWeight: '600' }}>{totalTime}</span>
                </Typography>
                <Box
                    sx={{
                        padding: '1rem',
                        display: 'flex',
                        width: '80%',
                        marginInline: 'auto',
                        flexDirection: match768 && 'column',
                        rowGap: '1rem',
                        // justifyContent: 'space-between',
                    }}>
                    <List sx={{ width: match768 ? '100%' : '50%' }}>
                        <Typography variant="h6">Ingredients:</Typography>{' '}
                        {ingredients?.map((item, i) => (
                            <IngListItem key={i} item={item} />
                        ))}
                    </List>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: match768 ? '100%' : '50%',
                            borderLeft: '1px solid #0003',
                        }}>
                        <ListComponent
                            match768={match768}
                            arr={cuisineType}
                            heading={'Cuisine Type'}
                        />
                        <ListComponent
                            match768={match768}
                            arr={mealType}
                            heading={'Meal Type'}
                        />
                        <ListComponent
                            match768={match768}
                            arr={dishType}
                            heading={'Dish Type'}
                        />
                    </Box>
                </Box>
            </Box>
            <Box>
                <RecipesCarousel matches={matches} data={relatedRecipes} />
            </Box>
        </Box>
    );
};

export default RecipeDetails;
