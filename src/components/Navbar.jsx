import React from 'react';
import { Stack } from '@mui/material';
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
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} height={45} alt="logo" />
        </Link>
        {/* Search */}
        <SearchBar />
    </Stack>
);

export default Navbar;
