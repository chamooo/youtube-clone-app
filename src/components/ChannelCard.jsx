import { Stack, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail);
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: { xs: '356px', md: '320px' },
                margin: 'auto',
                marginTop: marginTop || '0px',
            }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#fefefe',
                    }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            width: '180px',
                            height: '180px',
                            margin: '0 auto',
                            mb: 2,
                            border: '1px solid #e3e3e3',
                        }}
                    />
                    <Typography variant="h6">
                        <Stack alignItems="center" direction="row">
                            {channelDetail?.snippet?.title}
                            <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: 1 }} />
                        </Stack>
                    </Typography>

                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography variant="subtitle2" color="#e6e6e6">
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}{' '}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
