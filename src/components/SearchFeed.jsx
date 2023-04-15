import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
            .catch((err) => alert('There was an error: ', err));
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" marginBottom={2} sx={{ color: '#fefefe' }}>
                <span style={{ color: '#FC1503' }}>Search</span> results for: {searchTerm}
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
