import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        
        const data = fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then(data => setVideos(data.items))
            .catch(err => alert('There was an error'))
    }, [selectedCategory]);

    

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid #3d3d3d',
                    px: { sx: 0, md: 2 },
                }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2023 Youtube 2.0
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    marginBottom={2}
                    sx={{ color: '#fefefe' }}>
                    {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
