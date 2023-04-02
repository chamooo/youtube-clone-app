import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
            <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    sx={{ width: 350, height: 180 }}
                    alt={snippet?.title}
                    image={snippet?.thumbnails?.high?.url}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '105px' }}>
                <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#fefefe">
                        {snippet?.title ? snippet?.title.slice(0, 60) : demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        <Stack alignItems='center' direction='row'>
                            {snippet?.channelTitle ? snippet?.channelTitle : demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 1 }} />
                        </Stack>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
