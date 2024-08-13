import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Card, CardMedia, CardContent, Avatar, Chip, CssBaseline, Box, IconButton, Tooltip } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import Navbar from './Navbar';
import Musicposter from "./Musicposter.png";
import GlobalClub from "./globalClub.jpeg";
import InfoIcon from '@mui/icons-material/Info';

const EventDetails = () => {
  const [showFee, setShowFee] = useState(false);
  const [count, setCount] = useState(1); // Initial count

  const handleIconClick = () => {
    setShowFee(!showFee);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) { // Ensure count doesn't go below 1
      setCount(count - 1);
    }
  };

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container 
        maxWidth={false} 
        disableGutters 
        sx={{ 
          width: '100%',
          margin: '0 auto', 
          padding: '0 1rem',
          minHeight: '100vh',
          backgroundColor: '#f4f4f4', 
        }}
      >
        <Card sx={{ 
          borderRadius: 0, 
          boxShadow: 'none',
          margin: '0 1rem',
        }}>
          <CardMedia
            component="img"
            height="500"
            image={Musicposter} 
            alt="Event Banner"
            style={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Music festival | Music
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Saturday, August 26 | 08:00 PM to 3:00 AM
            </Typography>
            <Grid container spacing={2} alignItems="center" marginTop={2}>
              <Grid item>
                <Avatar src="path_to_avatar" alt="Organizer Logo" />
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Bright Studios
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  1.9k followers | 247 events hosted
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={4} marginTop={4}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                  About this event
                </Typography>
                <Typography variant="body1" paragraph>
                  Step into an unforgettable night of music and energy at Bright Studios! This exclusive music festival brings together some of the hottest DJs and live bands for a night of non-stop beats and immersive experiences.
                </Typography>
                <Typography variant="body1" paragraph>
                  From the moment the doors open at 8 PM, you'll be transported into a world where music and art collide, with state-of-the-art lighting, mesmerizing visuals, and a sound system that will keep you dancing until the early hours.
                </Typography>
                <Typography variant="body1" paragraph>
                  Explore different zones within the venue, each offering its own unique vibe, whether you're into deep house, techno, or indie rock. With craft cocktails, food vendors, and chill-out areas to recharge, Bright Studios is set to deliver the ultimate festival experience in an intimate, urban setting.
                </Typography>
                <Typography variant="body1" paragraph>
                  Grab your friends, wear your best festival gear, and prepare for a night of unforgettable music, dancing, and memories. This is an event you don't want to miss!
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Location
                </Typography>
                <Typography variant="body1">
                  <LocationOn /> RS Puram, 6th Cross Street, Coimbatore, TN 642126
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">
                  Delegate
                </Typography>
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <Typography variant="h4" sx={{ color: '#e94e77' }} marginRight={2}>
                    ₹{(190 * count).toFixed(2)}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#e94e77' }}>
                    x {count}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" marginBottom={2}>
                  <Tooltip title="Click to see convenience fee">
                    <IconButton onClick={handleIconClick}>
                      <InfoIcon sx={{ color: '#bfbfbf' }} />
                    </IconButton>
                  </Tooltip>
                  {showFee && (
                    <Typography variant="body2" sx={{ marginLeft: 1 }}>
                      Convenience fee ₹{(2.12 * count).toFixed(2)}
                    </Typography>
                  )}
                </Box>

                <Box display="flex" alignItems="center" marginBottom={2}>
                  <IconButton onClick={handleDecrement} disabled={count <= 1}>
                    <Typography variant="h6">-</Typography>
                  </IconButton>
                  <Typography variant="h6" sx={{ marginX: 2 }}>{count}</Typography>
                  <IconButton onClick={handleIncrement}>
                    <Typography variant="h6">+</Typography>
                  </IconButton>
                </Box>

                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ backgroundColor: '#e94e77', '&:hover': { backgroundColor: '#e94e77' } }}
                >
                  Check out for ₹{(192.12 * count).toFixed(2)}
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={4}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Tags
                </Typography>
              </Grid>
              <Grid item>
                <Chip label="Business" variant="outlined" sx={{ marginRight: 1, marginBottom: 1 }} />
                <Chip label="Networking" variant="outlined" sx={{ marginRight: 1, marginBottom: 1 }} />
                <Chip label="Technology" variant="outlined" sx={{ marginRight: 1, marginBottom: 1 }} />
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={4}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  More events from this organizer
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 300 }}> 
                      <CardMedia
                        component="img"
                        height="150"
                        image={GlobalClub}
                        alt="Related Event"
                      />
                      <CardContent>
                        <Typography variant="h6">
                          GLOBAL STARTUPS CLUB | STARTUP NETWORKING
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Sat, Aug 17 | 1:30 PM - 4:30 PM
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>              
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <Box component="footer" sx={{ backgroundColor: '#e94e77', padding: '2rem', marginTop: '4rem', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#ffff' }}>
          © 2024 EventNexus. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default EventDetails;
