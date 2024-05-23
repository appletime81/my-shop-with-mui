"use client";
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'
import Box from '@mui/material/Box';
import ProductInfos from "@/components/ProductInfos";

export default function CustomCarousel() {

    const products = ProductInfos();
    console.log(products);

    const paperList = products.map((product) => {
        return (
            <Paper key={product.id}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '500px',
                    width: 'auto'
                }}
                     style={{backgroundColor: '#f2f2f2'}}
                >
                    <img src={product.imageUrl}
                         alt={product.name}
                         style={{width: 'auto', height: '500px', objectFit: 'contain', backgroundColor: 'f2f2f2'}}
                    />
                </Box>
            </Paper>
        )
    })

    return (
        <Carousel>
            {paperList}
        </Carousel>
    );
}