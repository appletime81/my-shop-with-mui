"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductInfos from "@/components/ProductInfos";

export default function CustomCardList() {

    const products = ProductInfos();
    const productCardList = products.map(product => {
        return <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
                sx={{
                    display: 'flex',
                    height: '300px',
                    width: 'auto'
                }}
                style={{backgroundColor: '#393f4d'}}

            />

            <CardContent
                style={{backgroundColor: '#c9af98'}}
            >
                <Typography gutterBottom variant="h5" component="div" style={{color: 'black'}}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{color: 'black'}}>
                    商品描述
                </Typography>
            </CardContent>
            <CardActions style={{backgroundColor: '#c9af98'}}>
                <Button size="small" style={{ backgroundColor: '#3a4660', color: 'white', fontStyle: 'bold', fontSize:'15px'}}>Learn More</Button>
            </CardActions>
        </Card>
    })

    return (
        productCardList
    );
}