"use client";
import Image from "next/image";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ImageListItem from '@mui/material/ImageListItem';
import CustomCarousel from "@/components/Carousel";
import CustomCardList from "@/components/CardList";
import {useEffect} from "react";


export default function Home() {
    const pages = ['商品'];
    const [settings, setSettings] = React.useState(['登入']);
    const [clickLoginOrLogout, setClickLoginOrLogout] = React.useState(false);


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleProfile = () => {
        setClickLoginOrLogout((prev) => {
            const newClickProfile = !prev;
            if (newClickProfile) {
                setSettings(['個人設置', '登出']);
            } else {
                setSettings(['登入']);
            }
            console.log(newClickProfile);
            return newClickProfile;
        });
    };


    return (
        <main style={{backgroundColor: '#e6dbc9'}}>
            <AppBar position="static" style={{backgroundColor: "black"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* --------------------------------------------------------------- */}
                        <ImageListItem sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
                            <img
                                src="/images/logo.png"
                                alt=""
                                loading="lazy"
                                style={{width: '50px', height: '50px'}}
                            />
                        </ImageListItem>

                        {/* --------------------------------------------------------------- */}
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* --------------------------------------------------------------- */}
                        <ImageListItem sx={{
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            letterSpacing: '.3rem',
                        }}>
                            <img
                                src="/images/logo.png"
                                alt=""
                                loading="lazy"
                                style={{width: '50px', height: '50px'}}
                            />
                        </ImageListItem>

                        {/* --------------------------------------------------------------- */}
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* --------------------------------------------------------------- */}
                        <Box sx={{flexGrow: 0}}>
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp"
                                        src={clickLoginOrLogout ? "/images/avatar.png" : ""}
                                />
                            </IconButton>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {
                                    settings.map((setting) => {
                                        if (setting === '登入' || setting === '登出') {
                                            return (
                                                <MenuItem key={setting} onClick={handleProfile}>
                                                    <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            );
                                        } else {
                                            return (
                                                <MenuItem key={setting}>
                                                    <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                            );
                                        }
                                    })
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <CustomCarousel/>
            <Container maxWidth="xl">
                <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2}}>
                    <CustomCardList/>
                </Box>
            </Container>
        </main>
    );
}
