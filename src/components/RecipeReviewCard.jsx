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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { useAuthContext } from '../context/AuthProvider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addRecipe, getFavoriteRecipe } from '../firebase/firestore';

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

const RecipeReviewCard = ({
    item,
    favoriteRecipeList,
    setFavoriteRecipeList,
}) => {
    const [expanded, setExpanded] = React.useState(false);
    const { user } = useAuthContext();

    const {
        label,
        image,
        source,
        url,
        uri,
        ingredientLines,
        totalTime,
        dishType,
        mealType,
        cuisineType,
        calories,
    } = item.recipe;

    const handleFavorite = () => {
        const { email } = user;
        const data = { email, label, image, url, uri };
        addRecipe(data);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const isFavorite = () => {
        return favoriteRecipeList?.filter((recipe) => recipe?.uri === uri)
            .length;
    };
    /* const isFavorite = () => {
        return favoriteRecipeList
            ?.filter((recipe) => recipe?.uri === uri)
            ?.map((recipe) => {
                if (recipe.uri === uri) {
                    return <FavoriteIcon sx={{ color: '#BD2A2E' }} />;
                } else {
                    console.log('else');
                    return <FavoriteBorderIcon />;
                }
            });
    }; */

    React.useEffect(() => {
        getFavoriteRecipe(user?.email, setFavoriteRecipeList);
    }, []);

    return (
        <Grid item xs={10} sm={6} md={4} lg={3} justifyContent="center">
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardHeader title={label} subheader={source} />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={label}
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
                                padding: '3px',
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
                                padding: '3px',
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
                                padding: '3px',
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
                                padding: '3px',
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
                            {isFavorite() ? (
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

export default RecipeReviewCard;
