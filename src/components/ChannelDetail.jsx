import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0]),
        );
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
            setVideos(data?.items),
        );
    }, [id]);
    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        backgroundImage: `url(${channelDetail?.brandingSettings.image.bannerExternalUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        zIndex: 10,
                        height: '300px',
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-95px" />
            </Box>
            <Box sx={{display: 'flex', p: '20px'}} >
                <Box>
                    <Videos videos={videos}></Videos>
                </Box>
            </Box>
        </Box>
    );
};

export default ChannelDetail;
