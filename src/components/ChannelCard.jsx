import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
    return (
        <Box
            sx={{
                borderRadius: '20px',
                boxShadow: 'none',
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
                                fontSize: 12,
                                color: 'gray',
                                ml: '5px',
                            }}
                        ></CheckCircle>
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
