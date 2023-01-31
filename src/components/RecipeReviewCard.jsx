import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { useAuthContext } from '../context/AuthProvider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
    addRecipe,
    deleteRecipe,
    getFavoriteRecipe,
} from '../firebase/firestore';
import { useFavRecipeContext } from '../context/FavoriteRecipeProvider';
import { useNavigate } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RecipeReviewCard = ({ item }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [isRecipeSaved, setIsRecipeSaved] = React.useState(false);

    const { user } = useAuthContext();
    const { favoriteRecipeList, setFavoriteRecipeList } = useFavRecipeContext();

    const {
        label,
        image,
        source,
        url,
        uri,
        ingredientLines,

        dishType,
        mealType,
        cuisineType,
        calories,
    } = item.recipe;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const isFavorite = () => {
        if (favoriteRecipes()) {
            setIsRecipeSaved(true);
        } else {
            setIsRecipeSaved(false);
        }
    };
    const favoriteRecipes = () => {
        const recipe = favoriteRecipeList?.find(
            (recipe) => recipe?.uri === uri
        );

        return recipe || false;
    };

    const handleFavorite = () => {
        const { email } = user;
        const data = {
            email,
            label,
            image,
            url,
            uri,
            source,
            mealType,
            calories,
            dishType,
        };
        if (isRecipeSaved) {
            deleteRecipe(favoriteRecipes()?.id);
            setIsRecipeSaved(false);
            return;
        } else {
            addRecipe(data);
            setIsRecipeSaved(true);
        }
    };

    React.useEffect(() => {
        getFavoriteRecipe(user?.email).then((data) =>
            setFavoriteRecipeList(data)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRecipeSaved]);
    React.useEffect(() => {
        isFavorite();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favoriteRecipeList]);
    const navigate = useNavigate();
    return (
        <Grid item xs={10} sm={6} md={4} lg={3} justifyContent="center">
            <Card
                sx={{
                    maxWidth: 345,
                    margin: 'auto',
                    border: `10px solid ${blueGrey[600]}`,
                    borderTop: `35px solid ${blueGrey[600]}`,
                    boxShadow: 8,
                }}>
                <CardHeader title={label} subheader={source} />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={label}
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate('/detail', { state: item })}
                />
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}>
                        <Typography
                            sx={{
                                border: '1px solid grey',
                                padding: '2px',
                                width: '50%',
                                cursor: 'pointer',
                                '&:hover': { color: '#B33F00' },
                            }}
                            variant="body2"
                            color="text.secondary">
                            Calories:{' '}
                            {calories ? Number(calories).toFixed(2) : 'Unknown'}
                        </Typography>
                        <Typography
                            sx={{
                                border: '1px solid grey',
                                padding: '2px',
                                width: '50%',
                                cursor: 'pointer',
                                '&:hover': { color: '#B33F00' },
                            }}
                            variant="body2"
                            color="text.secondary">
                            Cuisine:{' '}
                            {cuisineType
                                ? cuisineType[0].toUpperCase()
                                : 'Unknown'}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            paddingTop: '10px',
                        }}>
                        <Typography
                            sx={{
                                border: '1px solid grey',
                                padding: '2px',
                                width: '50%',
                                cursor: 'pointer',
                                '&:hover': { color: '#B33F00' },
                            }}
                            variant="body2"
                            color="text.secondary">
                            {mealType ? mealType[0] : 'Unknown'}
                        </Typography>
                        <Typography
                            sx={{
                                border: '1px solid grey',
                                padding: '2px',
                                width: '50%',
                                cursor: 'pointer',
                                '&:hover': { color: '#B33F00' },
                            }}
                            variant="body2"
                            color="text.secondary">
                            {dishType ? dishType[0] : 'Unknown'}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions disableSpacing>
                    {user && (
                        <IconButton
                            onClick={handleFavorite}
                            aria-label="add to favorites">
                            {isRecipeSaved ? (
                                <FavoriteIcon sx={{ color: '#BD2A2E' }} />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </IconButton>
                    )}

                    <IconButton aria-label="share">
                        <Link href={url}>
                            <LinkIcon />
                        </Link>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Ingredients:</Typography>

                        {ingredientLines?.map((item) => (
                            <Typography key={item} paragraph>
                                {item}
                            </Typography>
                        ))}
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
};

export default React.memo(RecipeReviewCard);
