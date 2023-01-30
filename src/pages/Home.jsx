import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import RecipeReviewCard from '../components/RecipeReviewCard';
import Register from '../components/Register';
import SearchModal from '../components/SearchModal';
import { useAuthContext } from '../context/AuthProvider';
import { useFavRecipeContext } from '../context/FavoriteRecipeProvider';
import { getFavoriteRecipe } from '../firebase/firestore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loading from '../components/Loading';

const Home = () => {
    // open function for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const { favoriteRecipeList } = useFavRecipeContext();

    const [checkValue, setCheckValue] = useState({
        mealType: 'dinner',
    });

    const getRecipeNextPage = async () => {
        const { href } = data._links.next;

        try {
            const { data } = await axios(href);
            setData(data);
            console.log(href);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getRecipe = async () => {
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

        if (checkValue.q && checkValue.q.length > 1) {
            url = `https://api.edamam.com/api/recipes/v2?type=public&q=${checkValue.q}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
        }

        Object.keys(checkValue).forEach((item) => {
            if (item === 'ingr') {
                url = url + `&${item}=` + '0-' + checkValue[item];
            } else if (checkValue[item] && checkValue[item].length > 1) {
                url = url + `&${item}=` + checkValue[item];
            }
        });
        console.log('url=>', url);

        try {
            const { data } = await axios(url);
            setData(data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCheck = (e) => {
        setCheckValue((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getRecipe();
        handleClose();
    };

    useEffect(() => {
        setLoading(true);
        getRecipe();
    }, []);
    console.log(nextPage);
    return (
        <Paper>
            {loading && <Loading />}
            <SearchModal
                handleCheck={handleCheck}
                handleSubmit={handleSubmit}
                open={open}
                setOpen={setOpen}
                checkValue={checkValue}
                setCheckValue={setCheckValue}
            />

            <Box
                component={'form'}
                onSubmit={(e) => handleSubmit(e)}
                sx={{
                    backgroundImage: `url(https://github.com/HaciGustav/Food_Search_App/blob/main/src/assets/home_images/a.jpg?raw=true)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Box
                    sx={{
                        // width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}>
                    <TextField
                        id="standard-basic"
                        variant="filled"
                        label="Search Recipe"
                        name="q"
                        onChange={handleCheck}
                        sx={{
                            backgroundColor: '#90a4aea6',
                            width: '35vw',
                            borderRadius: '4px',
                            minWidth: '280px',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        columnGap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: '5px',
                    }}>
                    <Button type="submit" variant="contained">
                        Search
                    </Button>
                    <Button variant="contained" onClick={handleOpen}>
                        Advanced Search
                    </Button>
                </Box>
            </Box>

            <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    paddingTop: '1rem',
                    width: '80%',
                    margin: 'auto',
                }}>
                {data?.hits?.map((item, i) => (
                    <RecipeReviewCard item={item} key={i} />
                ))}
            </Grid>
            <Box
                sx={{
                    padding: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: '1.5rem',
                }}>
                <ArrowBackIcon
                    fontSize="large"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '50%',
                    }}
                />
                <span>◆ ◆ ◆ ◆ ◆ ◆</span>
                <ArrowForwardIcon
                    fontSize="large"
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                    onClick={() => getRecipeNextPage()}
                />
            </Box>
        </Paper>
    );
};

export default Home;
