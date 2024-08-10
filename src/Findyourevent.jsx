import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAngleDown, faLocationCrosshairs, faVideo, faClock } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, ArrowForward  } from '@mui/icons-material';
import coimbatore from './coimbatorela.jpg';
import Musicposter from "./Musicposter.png";
import ArtExbi from "./Art.jpg";
import Comedy from "./Comedy.jpeg";
import Cricket from "./Cricket.jpg";
import Bootcamp from "./bootCamps.jpg";
import Marathon from "./marathon.jpg";
import Foodfest from "./Food festival.jpg";
import Techconf from "./techconf.jpg";
import Code from "./Codeathon.jpeg";
import Game from "./Gaming.jpeg";
import Online from './OnlineWork.jpeg';
import Webiner from "./Webinar.jpeg";
import Virtual from "./Virtual Art.jpeg";
import global from "./global.jpeg";
import Sciencexpo from "./Science.png";
import { Link } from 'react-router-dom';
import {  FavoriteBorder as SaveIcon, Share as ShareIcon } from '@mui/icons-material'; 
const EventsUnder300Card = ({ image, title, description }) => (
    <Card 
        sx={{ 
            minWidth: 200, 
            m: 2, 
            position: 'relative', 
            flex: '0 0 auto', 
            width: '22%', 
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scale effect
            '&:hover': { 
                transform: 'scale(1.1)', // Enlarge card on hover
                zIndex: 2, // Ensure it appears above other elements when enlarged
            },
            '&:hover .hover-icons': { 
                opacity: 1 
            }
        }}
    >
        <Box sx={{ position: 'relative' }}>
            <CardMedia
                component="img"
                height="150"
                image={image}
                alt={title}
            />
            <Box 
                className="hover-icons"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <IconButton color="primary" sx={{ color: '#fff' }}>
                    <SaveIcon />
                </IconButton>
                <IconButton color="primary" sx={{ color: '#fff' }}>
                    <ShareIcon />
                </IconButton>
            </Box>
        </Box>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.75rem' }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.25rem' }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const EventsUnder300Section = () => {
    const trendingEvents = [
        {
            image: Musicposter,
            title: "Music Concert",
            description: "Experience the best live music in Chennai."
        },
        {
            image: ArtExbi,
            title: "Art Exhibition",
            description: "Explore the stunning art collections."
        },
        {
            image: Comedy,
            title: "Comedy Show",
            description: "Join the latest discussions on technology."
        },
        {
            image: Cricket,
            title: "TNPL",
            description: "Join the latest discussions on technology."
        },
        {
            image: Bootcamp,
            title: "BootCamps",
            description: "Join the latest discussions on technology."
        },
        {
            image: Marathon,
            title: "Marathon",
            description: "Join the latest discussions on technology."
        },
        {
            image: Foodfest,
            title: "Food Festival",
            description: "Join the latest discussions on technology."
        }
    ];

    const containerRef = useRef(null);
    const animationFrameId = useRef(null);

    const scroll = (speed) => {
        containerRef.current.scrollBy({
            left: speed,
            behavior: 'auto'
        });
        animationFrameId.current = requestAnimationFrame(() => scroll(speed));
    };

    const startScrolling = () => {
        scroll(1); // Adjust the speed as needed
    };

    const stopScrolling = () => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startScrolling();
                } else {
                    stopScrolling();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            stopScrolling();
        };
    }, []);

    const scrollLeft = () => {
        stopScrolling();  // Stop any ongoing scroll animation
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        stopScrolling();  // Stop any ongoing scroll animation before scrolling right
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#fffff', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', color: '#e94e77' }}>
                Popular in Coimbatore
            </Typography>
            <IconButton
                onClick={scrollLeft}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            >
                <ArrowBackIos />
            </IconButton>
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    padding: '0 50px',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',  // IE and Edge
                    scrollbarWidth: 'none',  // Firefox
                }}
            >
                {trendingEvents.map((event, index) => (
                    <EventsUnder300Card
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
                <Typography
                    variant="body1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 200,
                        height: 280,
                        m: 2,
                        flex: '0 0 auto',
                        width: '22%',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '150px',
                        cursor: 'pointer',
                        color: '#333',
                        '&:hover': {
                            borderColor: '#e94e77',
                            color: '#e94e77',
                        },
                        marginLeft: 'auto'
                    }}
                    onClick={() => console.log('See More Clicked')}
                >
                    <ArrowForward /> See More
                </Typography>
            </Box>
            <IconButton
                onClick={scrollRight}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};
const OnlineeventCard = ({ image, title, description }) => (
    <Card sx={{ minWidth: 200, m: 2, position: 'relative', flex: '0 0 auto', width: '22%' }}>
        <CardMedia
            component="img"
            height="150"  // Reduced height for the image
            image={image}
            alt={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.75rem' }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.25rem' }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const OnlineEventSection = () => {
    const trendingEvents = [
        {
            image: Bootcamp,
            title: "Bootcamps",
            description: "Experience the best live music in Chennai."
        },
        {
            image: Techconf,
            title: "Tech Conference",
            description: "Explore the stunning art collections."
        },
        {
            image: Code,
            title: "Codeathon",
            description: "Join the latest discussions on technology."
        },
        {
            image: Game,
            title: "Online Gaming",
            description: "Join the latest discussions on technology."
        },
        {
            image: Online,
            title: "Business Workshop",
            description: "Join the latest discussions on technology."
        },
        {
            image: Webiner,
            title: "Webiner",
            description: "Join the latest discussions on technology."
        },
        {
            image: Virtual,
            title: "Virtual Exibition",
            description: "Join the latest discussions on technology."
        }
    ];

    const containerRef = useRef(null);
    const animationFrameId = useRef(null);

    const scroll = (speed) => {
        containerRef.current.scrollBy({
            left: speed,
            behavior: 'auto'
        });
        animationFrameId.current = requestAnimationFrame(() => scroll(speed));
    };

    const startScrolling = () => {
        scroll(1); // Adjust the speed as needed
    };

    const stopScrolling = () => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startScrolling();
                } else {
                    stopScrolling();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            stopScrolling();
        };
    }, []);

    const scrollLeft = () => {
        stopScrolling();  // Stop any ongoing scroll animation
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        stopScrolling();  // Stop any ongoing scroll animation before scrolling right
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#f0f0f5', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', color: '#e94e77' }}>
                Online events
            </Typography>
            <IconButton
                onClick={scrollLeft}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            >
                <ArrowBackIos />
            </IconButton>
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    padding: '0 50px',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',  // IE and Edge
                    scrollbarWidth: 'none',  // Firefox
                }}
            >
                {trendingEvents.map((event, index) => (
                    <EventsUnder300Card
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
                <Typography
                    variant="body1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 200,
                        height: 280,
                        m: 2,
                        flex: '0 0 auto',
                        width: '22%',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '150px',
                        cursor: 'pointer',
                        color: '#333',
                        '&:hover': {
                            borderColor: '#e94e77',
                            color: '#e94e77',
                        },
                        marginLeft: 'auto'
                    }}
                    onClick={() => console.log('See More Clicked')}
                >
                    <ArrowForward /> See More
                </Typography>
            </Box>
            <IconButton
                onClick={scrollRight}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};
const BusinessProfessionalCard = ({ image, title, description }) => (
    <Card 
        sx={{ 
            minWidth: 200, 
            m: 2, 
            position: 'relative', 
            flex: '0 0 auto', 
            width: '22%', 
            transition: 'transform 0.3s ease-in-out', // Smooth transition for scale effect
            '&:hover': { 
                transform: 'scale(1.1)', // Enlarge card on hover
                zIndex: 2, // Ensure it appears above other elements when enlarged
            },
            '&:hover .hover-icons': { 
                opacity: 1 
            }
        }}
    >
        <Box sx={{ position: 'relative' }}>
            <CardMedia
                component="img"
                height="150"
                image={image}
                alt={title}
            />
            <Box 
                className="hover-icons"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <IconButton color="primary" sx={{ color: '#fff' }}>
                    <SaveIcon />
                </IconButton>
                <IconButton color="primary" sx={{ color: '#fff' }}>
                    <ShareIcon />
                </IconButton>
            </Box>
        </Box>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.75rem' }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.25rem' }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const BusinessProfessionalSection = () => {
    const trendingEvents = [
        {
            image: Techconf,
            title: "Tech Conference",
            description: "Experience the best live music in Chennai."
        },
        {
            image: Webiner,
            title: "Webinar",
            description: "Explore the stunning art collections."
        },
        {
            image: Online,
            title: "Business Workshop",
            description: "Join the latest discussions on technology."
        },
        {
            image: global,
            title: "G20 meeting",
            description: "Join the latest discussions on technology."
        }
    ];

    const containerRef = useRef(null);
    const animationFrameId = useRef(null);

    const scroll = (speed) => {
        containerRef.current.scrollBy({
            left: speed,
            behavior: 'auto'
        });
        animationFrameId.current = requestAnimationFrame(() => scroll(speed));
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#fffff', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', color: '#e94e77' }}>
                    Business & Professional Events
                </Typography>
                <Link to="/explore-more-events" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Typography
                variant="body1"
                sx={{
                    fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif',
                    color: '#000000',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s, textDecoration 0.3s', // Smooth transition for hover effect
                    '&:hover': {
                        color: '#e94e77', // Change color on hover
                        textDecoration: 'underline', // Underline text on hover
                    },
                }}
            >
                        Explore more events
                    </Typography>
                    <IconButton
                        sx={{
                            ml: 0,
                            color: '#575c5c',
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        <ArrowForwardIos fontSize="small"sx={{ fontSize: '0.75rem' }} />
                    </IconButton>
                </Link>
            </Box>
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    padding: '0 50px',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',  
                    scrollbarWidth: 'none',  
                }}
            >
                {trendingEvents.map((event, index) => (
                    <BusinessProfessionalCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
            </Box>
        </Box>
    );
};
const FreeEventsCard = ({ image, title, description }) => (
    <Card sx={{ minWidth: 200, m: 2, position: 'relative', flex: '0 0 auto', width: '22%' }}>
        <CardMedia
            component="img"
            height="150"  // Reduced height for the image
            image={image}
            alt={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.75rem' }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.25rem' }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const FreeEventsSection = () => {
    const trendingEvents = [
        {
            image: Code,
            title: "Codeathon",
            description: "Experience the best live music in Chennai."
        },
        {
            image: Virtual,
            title: "Virtual Exhibition",
            description: "Explore the stunning art collections."
        },
        {
            image: Marathon,
            title: "Marathon",
            description: "Join the latest discussions on technology."
        },
        {
            image: Sciencexpo,
            title: "Science Expo",
            description: "Join the latest discussions on technology."
        }
    ];

    const containerRef = useRef(null);
    const animationFrameId = useRef(null);

    const scroll = (speed) => {
        containerRef.current.scrollBy({
            left: speed,
            behavior: 'auto'
        });
        animationFrameId.current = requestAnimationFrame(() => scroll(speed));
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#f0f0f5', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', color: '#e94e77' }}>
                    Free events
                </Typography>
                <Link to="/explore-more-events" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Typography
                variant="body1"
                sx={{
                    fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif',
                    color: '#000000',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    transition: 'color 0.3s, textDecoration 0.3s', // Smooth transition for hover effect
                    '&:hover': {
                        color: '#e94e77', // Change color on hover
                        textDecoration: 'underline', // Underline text on hover
                    },
                }}
            >
                        Explore more events
                    </Typography>
                    <IconButton
                        sx={{
                            ml: 0,
                            color: '#575c5c',
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        <ArrowForwardIos fontSize="small"sx={{ fontSize: '0.75rem' }} />
                    </IconButton>
                </Link>
            </Box>
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    padding: '0 50px',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',  
                    scrollbarWidth: 'none',  
                }}
            >
                {trendingEvents.map((event, index) => (
                    <BusinessProfessionalCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
            </Box>
        </Box>
    );
};
const FormNearbyCitiesCard = ({ image, title, description }) => (
    <Card sx={{ minWidth: 200, m: 2, position: 'relative', flex: '0 0 auto', width: '22%' }}>
        <CardMedia
            component="img"
            height="150"  // Reduced height for the image
            image={image}
            alt={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.75rem' }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', fontSize: '1.25rem' }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

const FormNearbyCitiesSection = () => {
    const trendingEvents = [
        {
            image: "https://via.placeholder.com/150",
            title: "Music Concert",
            description: "Experience the best live music in Chennai."
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Art Exhibition",
            description: "Explore the stunning art collections."
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Tech Conference",
            description: "Join the latest discussions on technology."
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Tech Conference",
            description: "Join the latest discussions on technology."
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Tech Conference",
            description: "Join the latest discussions on technology."
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Tech Conference",
            description: "Join the latest discussions on technology."
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Tech Conference",
            description: "Join the latest discussions on technology."
        }
    ];

    const containerRef = useRef(null);
    const animationFrameId = useRef(null);

    const scroll = (speed) => {
        containerRef.current.scrollBy({
            left: speed,
            behavior: 'auto'
        });
        animationFrameId.current = requestAnimationFrame(() => scroll(speed));
    };

    const startScrolling = () => {
        scroll(1); // Adjust the speed as needed
    };

    const stopScrolling = () => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startScrolling();
                } else {
                    stopScrolling();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            stopScrolling();
        };
    }, []);

    const scrollLeft = () => {
        stopScrolling();  // Stop any ongoing scroll animation
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        stopScrolling();  // Stop any ongoing scroll animation before scrolling right
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#fffff', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', color: '#e94e77' }}>
                From Near by Cities
            </Typography>
            <IconButton
                onClick={scrollLeft}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            >
                <ArrowBackIos />
            </IconButton>
            <Box
                ref={containerRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    padding: '0 50px',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',  // IE and Edge
                    scrollbarWidth: 'none',  // Firefox
                }}
            >
                {trendingEvents.map((event, index) => (
                    <EventsUnder300Card
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
                <Typography
                    variant="body1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 200,
                        height: 280,
                        m: 2,
                        flex: '0 0 auto',
                        width: '22%',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '150px',
                        cursor: 'pointer',
                        color: '#333',
                        '&:hover': {
                            borderColor: '#e94e77',
                            color: '#e94e77',
                        },
                        marginLeft: 'auto'
                    }}
                    onClick={() => console.log('See More Clicked')}
                >
                    <ArrowForward /> See More
                </Typography>
            </Box>
            <IconButton
                onClick={scrollRight}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: '#f0f0f0'
                    }
                }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};
const EventTimeOptionCard = ({ text }) => (
    <Card sx={{ 
        minWidth: 200, 
        m: 2, 
        position: 'relative', 
        flex: '0 0 auto', 
        width: '22%', 
        height: '100px', 
        backgroundColor: '#fffff', 
        boxShadow: 1, 
        overflow: 'hidden',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }}>
        <Box sx={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '70px',
            height: '70px',
            backgroundColor: '#f7f7fc',
            borderRadius: '50%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 1
        }}>
            <FontAwesomeIcon icon={faClock} style={{ color: '#e94e77', fontSize: '1.5rem' }} />
        </Box>
        <CardContent sx={{ padding: 0 }}>
            <Typography 
                gutterBottom 
                variant="body1" 
                component="div" 
                sx={{ 
                    fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', 
                    fontSize: '1.2rem', 
                    textAlign: 'center',
                    mt: '20px'
                }}>
                {text}
            </Typography>
        </CardContent>
    </Card>
);

const EventTimeOptionSection = () => {
    const eventTexts = [
        "Today",
        "Tomorrow",
        "This weekend",
        "This week",
        "Next week",
        "This month",
        "Next month"
    ];

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#f7f7fc', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif', color: '#e94e77' }}>
                Event time options
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    padding: '10px 0',
                    '&::-webkit-scrollbar': {
                        height: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f0f0f5',
                        borderRadius: '4px',
                    },
                }}
            >
                {eventTexts.map((text, index) => (
                    <EventTimeOptionCard
                        key={index}
                        text={text}
                    />
                ))}
            </Box>
        </Box>
    );
};
const splitText = (text, maxLength) => {
    const regex = new RegExp(`.{1,${maxLength}}`, 'g');
    return text.match(regex);
};
const Findyourevent = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [location, setLocation] = useState('Coimbatore'); // State to manage button text
    const [headerText, setHeaderText] = useState('Best event in'); // State to manage header text
    const text = "hafjdhajd dakjkhdkjahf ahdjhadhf kajdfdjbdjf dfddfhdfjh ndknfk dkandkn ndjnfan dknf nkdn";
    const lines = splitText(text, 70);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleOptionClick = (newLocation, newHeaderText) => {
        setLocation(newLocation);
        setHeaderText(newHeaderText);
        setDropdownVisible(false); // Hide the dropdown after selection
    };

    return (
        <div>
            <Navbar />
            <div style={{ position: 'relative', width: '75%', marginLeft: '5.5%' }}>
                <img 
                    src={coimbatore} 
                    alt="Got Plans" 
                    style={{ 
                        width: '120%', 
                        height: '450px', 
                        objectFit: 'cover',
                        borderRadius: '50px', 
                        padding: '30px', 
                    }} 
                />
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: 30, 
                        left: 29, 
                        width: '80%', 
                        height: '86%',
                        background: 'linear-gradient(to right, #527a7a, rgba(82, 122, 122, 0))', 
                        borderRadius: '20px',
                    }} 
                />
                <h1 
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '5%',
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        lineHeight: '1.5',
                        maxWidth: '60%',
                    }}
                >
                    <span style={{ fontSize: '2rem' }}>{headerText}</span><br />
                    <span style={{ fontSize: '3rem', marginBottom: '20px' }}>
                        {location}
                    </span><br />
                    {lines.map((line, index) => (
                        <span 
                            key={index} 
                            style={{ 
                                fontSize: '0.8rem',
                                display: 'block',
                                wordBreak: 'break-word',
                                overflowWrap: 'break-word',
                                whiteSpace: 'normal',
                                marginBottom: '10px',
                            }}
                        >
                            {line}
                        </span>
                    ))}
                </h1>            
                <button
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownVisible}
                    aria-label={`Location dropdown, currently showing ${location}`}
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        left: '5%',
                        backgroundColor: '#e94e77',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                    {location} <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '1rem', marginLeft: '5px' }} />
                </button>
                {isDropdownVisible && (
                    <div style={{
                        position: 'absolute',
                        bottom: '0%',
                        left: '5%',
                        backgroundColor: '#fff',
                        color: '#333',
                        borderRadius: '10px',
                        padding: '15px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        zIndex: 1,
                        marginTop: '5px',
                        minWidth: '250px',
                    }}>
                        <div style={{ marginBottom: '5px' }}>
                            <div 
                                style={{
                                    padding: '10px',
                                    borderRadius: '10px',
                                    backgroundColor: '#f9f9f9',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s, box-shadow 0.3s',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '0.8rem',
                                    color: 'black',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#eee'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                                onClick={() => handleOptionClick('Coimbatore', 'Best event in')}
                            >
                                <FontAwesomeIcon icon={faLocationCrosshairs} style={{ marginRight: '8px' }} />
                                Use my current location
                            </div>
                        </div>
                        <div>
                            <div 
                                style={{
                                    padding: '10px',
                                    borderRadius: '10px',
                                    backgroundColor: '#f9f9f9',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s, box-shadow 0.3s',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '0.8rem',
                                    color: 'black',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#eee'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                                onClick={() => handleOptionClick('Online events', 'Explore and Attend')}
                            >
                                <FontAwesomeIcon icon={faVideo} style={{ marginRight: '8px' }} />
                                Browse online events
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <EventsUnder300Section />
            <OnlineEventSection />
            <BusinessProfessionalSection />
            <FreeEventsSection />
            <FormNearbyCitiesSection />
            <EventTimeOptionSection />
            <Footer />
        </div>
    );
}

export default Findyourevent;
