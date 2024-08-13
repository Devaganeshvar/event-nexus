import React, { useState, useRef,useEffect } from 'react';
import Navbar from './Navbar';
import gotplan from "./GotPlans.png";
import musicIcon from "./mic.png";
import HackathonIcon from "./hackathon.png"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Musicposter from "./Musicposter.png";
import ArtPoater from "./artPoster.jpg";
import Workshops from "./Workshops.jpeg";
import Sports from "./Sports.jpeg";
import Standup from "./Standup.jpeg";
import Yoga from "./Yoga.jpeg";
import Expo from "./Expo.jpeg";
import Comedy from "./Comedy.jpeg";
import Hackathon from "./Hackathon.jpg";
import Dance from "./Dancejpeg.jpeg";
import Clutural from "./Cultural.jpeg";
import Boxing from "./Boxing.jpeg";
import MachineLearning from "./MachineLearning.jpeg";
import Music from "./Music.jpeg";
import Motivation from "./Motiation.jpeg";
import pc from "./pc.jpeg";
import global from "./global.jpeg";
import Cricket from "./Cricket.jpg";
import FoodFest from "./Food festival.jpg";
import ArtExbi from "./Art.jpg";
import StartUp from "./startup.jpg";
import Vr from "./VR.png";
import Block from "./blockchain.jpg";
import {faMasksTheater,faLaptop,faMedal,faUtensils,faUserTie,faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { Button, IconButton, Box, Typography, Divider, Menu, MenuItem, ListItemIcon, TextField, Link, Card, CardContent, CardMedia } from '@mui/material';
import { Category, ArrowDropDown, LocationOn, Public, ArrowBackIos, ArrowForwardIos,ArrowForward,FavoriteBorder as SaveIcon, Share as ShareIcon } from '@mui/icons-material';
import Footer from './Footer';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const categories = ['Music', 'Art', 'Tech', 'Sports', 'Food', 'Fashion', 'WorkShops', 'Hackathons'];


const CategoryWrapper = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 7,
            mt: 2
        }}
    >
        {categories.map((category, index) => (
            <Box
                key={index}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                        '.MuiTypography-root': {
                            color: '#e94e77',
                        }
                    }
                }}
            >
                <IconButton
                    sx={{
                        borderRadius: '50%',
                        width: 120,
                        height: 120,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f0f0f0',
                        border: '2px solid #e6e6ff',
                        transition: 'border-color 0.3s, background-color 0.3s',
                        mb: 1,
                        '&:hover': {
                            borderColor: '#ffcccc',
                            backgroundColor: '#ffcccc'
                        }
                    }}
                >
                    {category === 'Music' ? (
                        <img 
        src={musicIcon} 
        alt="Music Icon" 
        style={{ 
            width: 60, 
            height: 60, 
            filter: 'grayscale(100%)',
            opacity: 0.6 
        }} 
    />
                    ) : category === 'Art' ? (
                        <FontAwesomeIcon icon={faMasksTheater} style={{ fontSize: 50 }} />
                    ) : category === 'Tech' ? (
                        <FontAwesomeIcon icon={faLaptop} style={{ fontSize: 50 }} />
                    ):category === 'Sports' ? (
                        <FontAwesomeIcon icon={faMedal} style={{ fontSize: 50 }} />
                    ):category === 'Food' ? (
                        <FontAwesomeIcon icon={faUtensils} style={{ fontSize: 50 }} />
                    ):category === 'Fashion' ? (
                        <FontAwesomeIcon icon={faUserTie} style={{ fontSize: 50 }} />
                    ):category === 'WorkShops' ? (
                        <FontAwesomeIcon icon={faPersonChalkboard} style={{ fontSize: 50 }} />
                    ):category === 'Hackathons' ?(
                        <img 
        src={HackathonIcon} 
        alt="Hackathon Icon" 
        style={{ 
            width: 60, 
            height: 60, 
            filter: 'grayscale(100%)',
            opacity: 0.9 // Optional: adjust opacity to make the grey color softer
        }} 
    />
                    ):(
                        <Category sx={{ fontSize: 80 }} />
                    )}
                </IconButton>
                <Typography variant="caption">{category}</Typography>
            </Box>
        ))}
    </Box>
);
const BrowsingSection = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [textInput, setTextInput] = useState('Coimbatore'); // Default text set to 'Coimbatore'

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLocationChange = (newLocation) => {
        setTextInput(newLocation); // Update text input to new location
        handleClose();
    };

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value); // Update text input value
    };

    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            padding: 2,
            backgroundColor: '#f5f5f5'
        }}>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start', // Align to the left
                ml: 20 // Increase padding to the left
            }}>
                <Typography variant="h6" sx={{ mr: 2 }}>
                    Browsing events in
                </Typography>
                <IconButton
                    onClick={handleClick}
                    sx={{
                        mr: 1, // Margin to the right of the icon
                    }}
                >
                    <ArrowDropDown sx={{ fontSize: 36 }} /> {/* Increase size of ArrowDropDown */}
                </IconButton>
                <TextField
                    value={textInput}
                    onChange={handleTextInputChange}
                    sx={{
                        width: 200, // Adjust width as needed
                        height: '2.5rem', // Increase height
                        backgroundColor: 'transparent', // Remove background color
                        border: 'none', // Remove border
                        mt: -1,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none', // Remove border from fieldset
                            },
                            '& input': {
                                height: '2.5rem', // Ensure height is consistent
                                padding: '10px 14px' // Adjust padding to increase size without changing font size
                            },
                        },
                    }}
                    InputProps={{
                        sx: {
                            paddingRight: '0 !important', // Adjust padding to avoid extra space
                        }
                    }}
                />
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => handleLocationChange('Coimbatore')}>
                        <ListItemIcon>
                            <LocationOn />
                        </ListItemIcon>
                        Use my current location
                    </MenuItem>
                    <MenuItem onClick={() => handleLocationChange('Browse events online')}>
                        <ListItemIcon>
                            <Public />
                        </ListItemIcon>
                        Browse events online
                    </MenuItem>
                </Menu>
            </Box>
            <Divider sx={{ mt: 2 }} />
        </Box>
    );
};

const LinkSection = () => {
    const links = ['All', 'For you', 'Online', 'Free', 'Music', 'Workshop', 'Sponsorship'];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2, gap: 4 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href="#"
                    sx={{
                        fontSize: '1rem',
                        textDecoration: 'none',
                        color: '#597373',
                        marginLeft: '100px',
                        '&:hover': {
                            color: '#e94e77',
                            textDecoration: 'underline'
                        }
                    }}
                >
                    {link}
                </Link>
            ))}
        </Box>
    );
};
const TrendingSection = () => {
    const [likedEvents, setLikedEvents] = useState([]);

    const trendingEvents = [
        {
            image: Musicposter,
            title: "Music Concert",
            description: "Experience the best live music in Chennai."
        },
        {
            image: ArtPoater,
            title: "Art Exhibition",
            description: "Explore the stunning art collections."
        },
        {
            image: Workshops,
            title: "WorkShops",
            description: "Join the latest discussions on technology."
        },
        {
            image: Sports,
            title: "Sports meet",
            description: "Join the latest discussions on technology."
        },
        {
            image: Standup,
            title: "Stand up Comedy",
            description: "Join the latest discussions on technology."
        },
        {
            image: Yoga,
            title: "Yoga",
            description: "Join the latest discussions on technology."
        },
        {
            image: Expo,
            title: "Techinical Expo",
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
        stopScrolling();
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        stopScrolling();
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#f0f0f5', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif',color: '#e94e77' }}>
                Trends in Coimbatore
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
                    <TrendingCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                        index={index} 
                        likedEvents={likedEvents} // Pass as prop
                        setLikedEvents={setLikedEvents} // Pass as prop
                    />
                ))}
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

const TrendingCard = ({ image, title, description, index, likedEvents, setLikedEvents }) => {
    const navigate = useNavigate();

    const handleLikeClick = () => {
        setLikedEvents((prev) => [...prev, index]);
        navigate('/find-events', { state: { likedEvents: [...likedEvents, index] } });
    };

    return (
        <Card 
            sx={{ 
                minWidth: 200, 
                m: 2, 
                position: 'relative', 
                flex: '0 0 auto', 
                width: '22%', 
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { 
                    transform: 'scale(1.1)', 
                    zIndex: 2, 
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
                    <IconButton color="primary" sx={{ color: '#fff' }} onClick={handleLikeClick}>
                        <FontAwesomeIcon icon={faHeart} />
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
};
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
            image: ArtPoater,
            title: "Art Exhibition",
            description: "Experience the best live music in Chennai."
        },
        {
            image: Comedy,
            title: "Comedy show",
            description: "Explore the stunning art collections."
        },
        {
            image: Hackathon,
            title: "Hackathon",
            description: "Join the latest discussions on technology."
        },
        {
            image: Dance,
            title: "Dance show",
            description: "Join the latest discussions on technology."
        },
        {
            image: Expo,
            title: "Technical Expo",
            description: "Join the latest discussions on technology."
        },
        {
            image: Clutural,
            title: "Culturals",
            description: "Join the latest discussions on technology."
        },
        {
            image: Boxing,
            title: "Boxing Competition",
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
            { threshold: 0.1 } // Adjust the threshold as needed
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
        stopScrolling();
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        stopScrolling();
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#fffff', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif',color: '#e94e77' }}>
            Events ₹500 and under
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
const EventsInCoimbatoreCard = ({ image, title, description }) => (
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

const EventsInCoimbatoreSection = () => {
    const trendingEvents = [
        {
            image: MachineLearning,
            title: "Intro to MachineLearning",
            description: "Experience the best live music in Chennai."
        },
        {
            image: Music,
            title: "Live Music",
            description: "Explore the stunning art collections."
        },
        {
            image: Motivation,
            title: "Speech",
            description: "Join the latest discussions on technology."
        },
        {
            image: pc,
            title: "Build your own pc",
            description: "Join the latest discussions on technology."
        },
        {
            image: Expo,
            title: "Technical Expo",
            description: "Join the latest discussions on technology."
        },
        {
            image: global,
            title: "G20 meeting",
            description: "Join the latest discussions on technology."
        },
        {
            image: Cricket,
            title: "TNPL",
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
            { threshold: 0.1 } // Adjust the threshold as needed
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
        stopScrolling();
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        stopScrolling();
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#f0f0f5', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif',color: '#e94e77' }}>
                Events in Coimbatore
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
                <Box sx={{ display: 'flex', minWidth: '100%' }}>
                    {trendingEvents.map((event, index) => (
                        <EventsInCoimbatoreCard
                            key={index}
                            image={event.image}
                            title={event.title}
                            description={event.description}
                        />
                    ))}
                </Box>
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
const MoreEventCard = ({ image, title, description }) => (
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

const MoreEventsSection = () => {
    const trendingEvents = [
        { image: Musicposter, title: "Music Concert", description: "Description for event 1." },
        { image: Workshops, title: "Learn about Robotics", description: "Description for event 2." },
        { image: Cricket, title: "TNPL", description: "Description for event 3." },
        { image: Hackathon, title: "Hackathon", description: "Description for event 4." },
        { image: FoodFest, title: "Food Festival", description: "Description for event 5." },
        { image: ArtExbi, title: "Art Exhibition", description: "Description for event 6." },
        { image: StartUp, title: "Start up Ideas", description: "Showcase your start up ideas and get reward" },
        { image: Vr, title: "VR Expo", description: "Description for event 8." },
        { image: Block, title: "Block Chain Workshop", description: "Description for event 9." }
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
            { threshold: 0.1 } // Adjust the threshold as needed
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

    const handleScrollLeft = () => {
        stopScrolling();
        containerRef.current.scrollBy({
            left: -containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    const handleScrollRight = () => {
        stopScrolling();
        containerRef.current.scrollBy({
            left: containerRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <Box sx={{ padding: 10, position: 'relative', backgroundColor: '#fffff', borderRadius: '8px', height: 'auto', width: '100%' }}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'Neue Plak, -apple-system, blinkmacsystemfont, roboto, Helvetica Neue, helvetica, tahoma, arial, sans-serif',color:'#e94e77' }}>
                More Events
            </Typography>
            <IconButton
                onClick={handleScrollLeft}
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
                    <MoreEventCard
                        key={index}
                        image={event.image}
                        title={event.title}
                        description={event.description}
                    />
                ))}
                {/* See More Link */}
                <Typography
                    variant="body1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 200,
                        height: 280,  // Adjust height to match card height
                        m: 2,
                        flex: '0 0 auto',
                        width: '22%',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '150px',  // Center text vertically
                        cursor: 'pointer',
                        color: '#333',
                        '&:hover': {
                            borderColor: '#e94e77',
                            color: '#e94e77',
                        },
                        marginLeft: 'auto'  // Align to the end of the scrolling section
                    }}
                    onClick={() => console.log('See More Clicked')}  // Add your functionality here
                >
                    <ArrowForward /> See More
                </Typography>
            </Box>
            <IconButton
                onClick={handleScrollRight}
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
function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log('Button clicked');
        navigate('/event');
    };
    return (
        <div>
            <Navbar />
            <div style={{ position: 'relative', textAlign: 'center', marginTop: 20 }}>
                <img src={gotplan} alt="Got Plans" style={{ width: '100%', height: 'auto' }} />
                <Button
                    variant="contained"
                    onClick={handleButtonClick}
                    style={{
                        position: 'absolute',
                        top: '90%',
                        left: '20%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#e94e77',
                        fontSize: '0.8rem',
                        padding: '15px 30px'
                    }}
                >
                    Find your next event
                </Button>
            </div>
            <Box sx={{ padding: 3 }}>
                <CategoryWrapper />
            </Box>
            <BrowsingSection />
            <LinkSection />
            <TrendingSection />
            <EventsUnder300Section />
            <EventsInCoimbatoreSection />
            <MoreEventsSection />
            <Footer />
        </div>
    );
}

export default Home;
