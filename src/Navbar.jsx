import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, InputAdornment, Menu, MenuItem, Avatar, Badge } from '@mui/material';
import { Search, Notifications, LocationOn, Event, AddCircle, HelpOutline } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './logo2.png';

const Navbar = () => {
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [anchorElHelpCenter, setAnchorElHelpCenter] = React.useState(null);

  const navigate = useNavigate();

  const handleNotificationsOpen = (event) => setAnchorElNotifications(event.currentTarget);
  const handleProfileOpen = (event) => setAnchorElProfile(event.currentTarget);
  const handleHelpCenterOpen = (event) => setAnchorElHelpCenter(event.currentTarget);

  const handleClose = () => {
    setAnchorElNotifications(null);
    setAnchorElProfile(null);
    setAnchorElHelpCenter(null);
  };
  const handleClosee = () => {
    navigate('/');
  }
  const handleProfileClick = () => {
    handleClose();
    navigate('/profile');
  };

  const handleCreateEventClick = () => {
    handleClose();
    navigate('/create'); // Navigate to create event page
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Link to="/home" style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <img src={Logo} alt="EventNexus Logo" style={{ height: 20, marginTop: 2 }} />
            </IconButton>
          </Link>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            style={{ marginLeft: 16, width: 400 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={() => navigate('/location')}>
            <LocationOn />
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate('/find-events')}>
            <Event />
          </IconButton>
          <IconButton color="inherit" onClick={handleCreateEventClick}>
            <AddCircle />
          </IconButton>
          <IconButton color="inherit" onClick={handleHelpCenterOpen}>
            <HelpOutline />
          </IconButton>
          <IconButton color="inherit" onClick={handleNotificationsOpen}>
            <Badge badgeContent={9} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorElNotifications}
            open={Boolean(anchorElNotifications)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Notification 1</MenuItem>
            <MenuItem onClick={handleClose}>Notification 2</MenuItem>
            <MenuItem onClick={handleClose}>Notification 3</MenuItem>
          </Menu>
          <Menu
            anchorEl={anchorElHelpCenter}
            open={Boolean(anchorElHelpCenter)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Help Center</MenuItem>
            <MenuItem onClick={handleClose}>Find your tickets</MenuItem>
            <MenuItem onClick={handleClose}>Contact your event organizer</MenuItem>
          </Menu>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={handleProfileOpen}>
            <Avatar alt="Deva" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" style={{ width: 22, height: 22 }} />
            <Typography variant="body2" style={{ marginLeft: 8, display: { xs: 'none', sm: 'block' } }}>
              Deva
            </Typography>
          </IconButton>
          <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleClosee}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
