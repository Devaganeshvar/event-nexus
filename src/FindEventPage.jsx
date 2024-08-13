import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Musicposter from "./Musicposter.png";
import ArtPoater from "./artPoster.jpg";
import Workshops from "./Workshops.jpeg";
import Sports from "./Sports.jpeg";
import Standup from "./Standup.jpeg";
import Yoga from "./Yoga.jpeg";
import Expo from "./Expo.jpeg";
import Navbar from './Navbar';

const FindEventsPage = ({ likedEvents = [] }) => {
    const location = useLocation();
    const locationLikedEvents = location.state?.likedEvents || likedEvents; // Fallback to props

    const trendingEvents = [
        { image: Musicposter, title: "Music Concert", description: "Experience the best live music in Chennai." },
        { image: ArtPoater, title: "Art Exhibition", description: "Explore the stunning art collections." },
        { image: Workshops, title: "Workshops", description: "Join the latest discussions on technology." },
        { image: Sports, title: "Sports Meet", description: "Join the latest discussions on sports." },
        { image: Standup, title: "Stand-up Comedy", description: "Enjoy a night of comedy." },
        { image: Yoga, title: "Yoga", description: "Join the latest discussions on yoga." },
        { image: Expo, title: "Technical Expo", description: "Explore the latest tech innovations." }
    ];

    const likedCards = locationLikedEvents.map(index => trendingEvents[index] || {}).filter(event => event.image);

    return (
        <div>
        <Navbar />
        <Box sx={{ padding: 10 }}>
            <Typography variant="h4" gutterBottom>
                Liked Events
            </Typography>
            {likedCards.length > 0 ? (
                <Grid container spacing={2}>
                    {likedCards.map((event, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={event.image}
                                    alt={event.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography>No liked events available.</Typography>
            )}
        </Box>
        </div>
    );
};

export default FindEventsPage;
