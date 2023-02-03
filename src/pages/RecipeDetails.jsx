import {
    Avatar,
    Link,
    List,
    ListItem,
    Paper,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecipesCarousel from '../components/RecipeCaroussel';
import Loading from '../components/Loading';
import { blueGrey } from '@mui/material/colors';
import RecipeLabels from '../components/RecipeLabels';

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

const Label = ({ label, cautionBgColor, name }) => {
    return (
        <>
            <Box
                name={name}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    backgroundColor: cautionBgColor ? cautionBgColor : '#0002',
                    marginRight: '3px',
                }}>
                {label}
            </Box>
        </>
    );
};

const ListComponent = ({ name, arr, heading, match768 }) => (
    <List
        sx={{
            width: match768 ? '100%' : '80%',
            margin: 'auto',
        }}>
        <Typography variant="h6">{heading}:</Typography>
        {arr?.map((x) => (
            <ListItem name={name} key={x}>
                ◈ {x.toUpperCase()}
            </ListItem>
        ))}
    </List>
);

const RecipeDetails = () => {
    const [relatedRecipes, setRelatedRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    //media query parameters

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
        healthLabels,
        cautions,
        source,

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
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        getRelatedRecipes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.recipe]);

    return (
        <Paper>
            <Box
                sx={{
                    width: match992 ? '90%' : '80%',
                    margin: 'auto',
                    paddingTop: '1rem',
                }}>
                {loading && <Loading />}
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
                                    Go to Website{' '}
                                    <LaunchIcon fontSize="small" />
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
                                    <Label
                                        name={dietLabels}
                                        key={i}
                                        label={item}
                                    />
                                ))}
                                {cautions &&
                                    cautions?.map((item, i) => (
                                        <Label
                                            name={cautions}
                                            key={i}
                                            cautionBgColor="#960000d1"
                                            label={item}
                                        />
                                    ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={recipeImageStyle}></Box>
                </Box>
                <Box
                    sx={{
                        borderTop: `6px dotted ${blueGrey[900]}`,
                        borderBottom: `6px dotted ${blueGrey[900]}`,
                        margin: '15px auto ',
                    }}>
                    <Typography variant="h6" sx={{ padding: '0.7rem 0' }}>
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
                                borderLeft:
                                    !match576 && `3px solid ${blueGrey[900]}`,
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
            </Box>

            <RecipeLabels healthLabels={healthLabels} />
            <Box>
                <RecipesCarousel matches={matches} data={relatedRecipes} />
            </Box>
        </Paper>
    );
};

export default RecipeDetails;
