import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import { SearchBar } from './SearchBar';

const Navbar = () => (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
            position: 'sticky',
            background: '#121212',
            top: 0,
            justifyContent: 'space-between',
        }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} height={45} alt="logo" />
        </Link>
        <Stack direction="row" alignItems="center" columnGap={5}>
            <Link
                className="link"
                to="/favorites"
                style={{ display: 'flex', alignItems: 'center', opacity: 0.8 }}>
                <Typography variant="overline" fontSize="18px">
                    Favorites
                </Typography>
            </Link>
            <SearchBar />
        </Stack>
    </Stack>
);

export default Navbar;
