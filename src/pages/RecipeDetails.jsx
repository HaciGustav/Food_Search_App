import {
    Avatar,
    Container,
    Link,
    List,
    ListItem,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { useLocation } from 'react-router-dom';

const ListComponent = ({ arr, heading }) => (
    <List
        sx={{
            width: '80%',
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
    const { state } = useLocation();
    console.log(state);
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
        width: '50%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <Box sx={{ width: '80%', margin: 'auto' }}>
            <Box
                sx={{
                    display: 'flex',
                    height: '70vh',
                    borderBottom: '1px solid #0002',
                }}>
                <Box sx={{ width: '50%' }}>
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
                        // justifyContent: 'space-between',
                    }}>
                    <List sx={{ width: '50%' }}>
                        <Typography variant="h6">Ingredients:</Typography>{' '}
                        {ingredients?.map((item) => (
                            <IngListItem item={item} />
                        ))}
                    </List>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            borderLeft: '1px solid #0003',
                        }}>
                        <ListComponent
                            arr={cuisineType}
                            heading={'Cuisine Type'}
                        />
                        <ListComponent arr={mealType} heading={'Meal Type'} />
                        <ListComponent arr={dishType} heading={'Dish Type'} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RecipeDetails;
