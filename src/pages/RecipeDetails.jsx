import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
let url =
    'https://edamam-product-images.s3.amazonaws.com/web-img/2b6/2b63ab8750e667de3bc568723a29ef9c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCID3XTlQKlX79hAH81jdCiMYP%2FvwxRE%2F1BgEGDr%2F84w%2B1AiBwL7CR7vf%2B0fjHTLu2xpY3i07SKzC6OKc1QPF4zyl6lirVBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMa0LtfjCmRpb9VidAKqkEFRUDAH%2FwpZ%2BgsWDnNzpaIUccUY9Ni3AvwJRGlojosCoMw5volcrtxpEN08mw2KX1pRsZY%2FaGLUYDQ4lFdLBljBTKdJIeB6ROo8teXtkjeOdNAXejLtthqncUhplLG2QfUH37Pv4BS80Cz30sH%2BZh42xso3kMG8pO13BBpDE6CbzvAFJpyHcT9r9wOyn4vkZL6%2FRV4zJ8%2BpPz8yNVT2t2RxmHORP5latUQ65kh5TWlb%2BI5agyN5Sy2NyPVX48ftJzdW%2B17kcDVDsmryWKDn0p0UuXVLEqBAzHKlVjoiW%2FcHdgj15YP3JlnNqbr%2BqekV1yEWwaOluXasCMv4hMuYj%2Bhj4bd%2B2W9guiEJDHX6IFxZuqGSM5GDgp9Ia1%2FoaYb6y22xCHlP3t5BFq4oaCUiBeBuieMoAPZ2lNDMTW0Ad6q9ifONjYiXQJ59gTllUTOOxkhzOGjFy2NtRr%2Bfa7QbD0eF5HoTAufvEO8Gwq9FkaSA%2BBM6o%2FsNxo%2FwMBFlbFex4gMLXD0IqHMcn3myNuyy%2Bwjz%2BuUmMGH3%2B7qT2pMfSkh%2F1fDfcSyPFb0D5G3IXhIhVzLz2PWCtKg8V37kxFF9FZTnLYrpM%2Fc1ZvsKMvIyRso6v6FK2eh2pW%2BBBjsc8NurGRVmKZ9Y3EUsmVLTNiAktMNkxZOTiK5yG6Qj0GlUAlDTwaEQ2thpdOhXcGIQ%2BN%2BnfhXCXMFo5aUGruZovLFWBWK6SXpbGvaGfnnjCj7IWeBjqqAfLa4E8HNXE45JYtduQ4DVJ2wPD%2BadExxYwscjU8Oxyj6xRn%2F4ssr2Vu9qGXwVCFY1CgVD7tjnOaWbyW4QLCwRE37J9n2jUZ4qcQzW4FBbD0Jkb73F2uboBs9O1PJNWPyNGEtWi6W8J8c1NQgYg5w%2F1vb0C0nRmERmtxv6bllJ%2B2F0idurlGEdx9PWZiwaVeB8HwOtffxUKMFD4QpH9O9o7D6Uv3g9bttIe%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230113T161227Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPX3HYZDM%2F20230113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f747815966b78404c3969ae19e6a692f359c8d92a6de0ade3897003be804b28a';

const recipeImageStyle = {
    width: '50%',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

const RecipeDetails = () => {
    return (
        <Container maxWidth="xl" sx={{ border: '2px solid red' }}>
            <Box
                sx={{
                    display: 'flex',
                    height: '70vh',
                    border: '2px solid blue',
                }}>
                <Box sx={{ width: '50%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid blue',
                            height: '100%',
                        }}>
                        <Typography variant="h4" textAlign={'center'}>
                            BIRSEYLI VODKA
                        </Typography>
                    </Box>
                </Box>
                <Box sx={recipeImageStyle}></Box>
            </Box>
        </Container>
    );
};

export default RecipeDetails;
