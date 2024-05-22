"use client";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // 引入導航條樣式
import 'swiper/css/pagination'; // 引入分頁樣式


export default function CustomCarousel() {

    const products = [
        {id: 1, name: "商品 1", imageUrl: "/images/avatar.png"},
        {id: 2, name: "商品 2", imageUrl: "/images/logo.png"},
        {id: 3, name: "商品 1", imageUrl: "/images/avatar.png"},
        {id: 4, name: "商品 2", imageUrl: "/images/logo.png"},
        {id: 5, name: "商品 1", imageUrl: "/images/avatar.png"},
        {id: 6, name: "商品 2", imageUrl: "/images/logo.png"},
    ];

    const cardMediaList = products.map(product => (
        <CardMedia
            key={product.id}
            component="img"
            image={product.imageUrl}
            alt={product.name}
        />
    ));


    return (
        <Container
            style={{ height: '500px' }}
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {cardMediaList.map((cardMedia, index) => (
                    <SwiperSlide key={index}>
                        {cardMedia}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}