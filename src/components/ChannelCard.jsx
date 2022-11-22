import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
    return (
        <Box
            sx={{
                borderRadius: '20px',
                boxShadow: 'none',
                width: { xs: '356px', md: '320px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                marginTop,
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    <CardMedia
                        image={
                            channelDetail?.snippet?.thumbnails?.high?.url ||
                            demoProfilePicture
                        }
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            border: '1px solid #e3e3e3',
                        }}
                    ></CardMedia>
                    <Typography variant="h6" mt="10px">
                        {channelDetail?.snippet?.title}
                        <CheckCircle
                            sx={{
                                fontSize: 14,
                                color: 'gray',
                                ml: '5px',
                            }}
                        ></CheckCircle>
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography
                            sx={{
                                fontSize: '15px',
                                fontWeight: 500,
                                color: 'gray',
                            }}
                        >
                            {parseInt(
                                channelDetail?.statistics?.subscriberCount,
                            ).toLocaleString('en-US')}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
