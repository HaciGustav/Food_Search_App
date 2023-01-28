import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, useMediaQuery } from '@mui/material';
import CarouselItem from './CarouselItem';

export default function RecipesCarousel({ data, matches }) {
    const { match576, match768, match992 } = matches;

    /* const slideOrganizer = () => {
        if (match992) {
            const slide1 = data.slice(0, 7);
            const slide2 = data.slice(7, 14);
            const slide3 = data.slice(14, 21);
            return [slide1, slide2, slide3];
        } else if (match768) {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } else if (match576) {
            const slide1 = data.slice(0, 4);
            const slide2 = data.slice(4, 8);
            const slide3 = data.slice(8, 12);
            const slide4 = data.slice(12, 16);
            const slide5 = data.slice(16, 21);
            return [slide1, slide2, slide3, slide4, slide5];
        } else {
            const slide1 = data.slice(0, 3);
            const slide2 = data.slice(3, 6);
            const slide3 = data.slice(6, 9);
            const slide4 = data.slice(9, 12);
            const slide5 = data.slice(12, 15);
            const slide6 = data.slice(15, 18);
            console.log(slide5);
            return [slide1, slide2, slide3, slide4, slide5, slide6];
        }
    }; */
    const slideOrganizer = () => {
        if (match576) {
            const slide1 = data.slice(0, 3);
            const slide2 = data.slice(3, 6);
            const slide3 = data.slice(6, 9);
            const slide4 = data.slice(9, 12);
            const slide5 = data.slice(12, 15);
            const slide6 = data.slice(15, 18);
            console.log(slide5);
            return [slide1, slide2, slide3, slide4, slide5, slide6];
        } else if (match768) {
            const slide1 = data.slice(0, 4);
            const slide2 = data.slice(4, 8);
            const slide3 = data.slice(8, 12);
            const slide4 = data.slice(12, 16);
            const slide5 = data.slice(16, 21);
            return [slide1, slide2, slide3, slide4, slide5];
        } else if (match992) {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } else {
            const slide1 = data.slice(0, 7);
            const slide2 = data.slice(7, 14);
            const slide3 = data.slice(14, 21);
            return [slide1, slide2, slide3];
        }
    };

    return (
        <Carousel>
            {slideOrganizer().map((item, i) => (
                <CarouselItem key={i} item={item} />
            ))}
        </Carousel>
    );
}
