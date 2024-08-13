import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, InputAdornment, MenuItem, Switch, FormControlLabel } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import axios from 'axios';
import './CreateEventPage.css';
import EventFooter from './CreateEventFooter';

const libraries = ['places'];

const CreateEventPage = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    shortDescription: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    price: '',
    seatLimit: '',
    poster: null,
    location: 'Venue',
    venueLocation: '',
    streetAddress: '',
    region: '',
    eventVenue: '',
    meetingLink: '',
    showAdditionalFields: false,
    category: '', 
    isFree: false, // New state for free tickets
  });

  const [posterPreview, setPosterPreview] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEventData((prevData) => ({
      ...prevData,
      poster: file,
    }));
    if (file) {
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log the event data to the console for debugging
    console.log('Submitting event data:', eventData);
    
    // Check if the required fields are filled
    if (!eventData.eventName || !eventData.date || !eventData.startTime || !eventData.endTime || !eventData.price || !eventData.seatLimit) {
      alert('Please fill in all required fields.');
      return;
    }
    
    try {
      // Create a new FormData object
      const formData = new FormData();
    
      // Append the event data to the FormData object
      Object.keys(eventData).forEach((key) => {
        if (key === 'poster' && eventData.poster) {
          formData.append('poster', eventData.poster);
        } else {
          formData.append(key, eventData[key]);
        }
      });
    
      // Send a POST request to the backend API with the FormData object
      axios.post('http://localhost:8080/events', eventData, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    
      // Log the response data
      
    
      // Show a success message
      alert('Event created successfully!');
    } catch (error) {
      console.error('There was an error creating the event!', error);
      alert('Event creation failed');
    }
  };  

  const handleLocationChange = (newLocation) => {
    setEventData((prevData) => ({
      ...prevData,
      location: newLocation,
      meetingLink: newLocation === 'Online Event' ? prevData.meetingLink : '',
    }));
  };

  const handlePlaceSelect = (autocomplete) => {
    const place = autocomplete.getPlace();
    setEventData((prevData) => ({
      ...prevData,
      venueLocation: place.formatted_address,
    }));
  };

  const handleAddLocationDetails = () => {
    setEventData((prevData) => ({
      ...prevData,
      showAdditionalFields: true,
    }));
  };

  const handleSwitchChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      isFree: e.target.checked,
      price: e.target.checked ? '' : prevData.price,
    }));
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Create Event
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Event Name"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Short Description"
            name="shortDescription"
            value={eventData.shortDescription}
            onChange={handleChange}
            fullWidth
            multiline
            maxRows={2}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Category"
            name="category"
            value={eventData.category}
            onChange={handleChange}
            fullWidth
            select
            required
          >
            <MenuItem value="Music">Music</MenuItem>
            <MenuItem value="Technical">Technical</MenuItem>
            <MenuItem value="Cultural">Cultural</MenuItem>
            <MenuItem value="Art">Art</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
            <MenuItem value="Workshop">Workshop</MenuItem>
            <MenuItem value="Webinar">Webinar</MenuItem>
            <MenuItem value="Networking">Networking</MenuItem>
            <MenuItem value="Hackathon">Hackathon</MenuItem>
            <MenuItem value="Dance">Dance</MenuItem>
            <MenuItem value="Other">Other...</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Event Date"
            name="date"
            type="date"
            value={eventData.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Start Time"
            name="startTime"
            type="time"
            value={eventData.startTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="End Time"
            name="endTime"
            type="time"
            value={eventData.endTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Event Location
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Button
                variant={eventData.location === 'Venue' ? 'contained' : 'outlined'}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                onClick={() => handleLocationChange('Venue')}
                color="primary"
              >
                Venue
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant={eventData.location === 'Online Event' ? 'contained' : 'outlined'}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faGlobe} />}
                onClick={() => handleLocationChange('Online Event')}
                color="primary"
              >
                Online Event
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant={eventData.location === 'To Be Announced' ? 'contained' : 'outlined'}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faQuestionCircle} />}
                onClick={() => handleLocationChange('To Be Announced')}
                color="primary"
              >
                To Be Announced
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {eventData.location === 'Venue' && (
          <Grid item xs={12}>
            <Autocomplete
              onLoad={(autocomplete) => {
                autocomplete.setFields(['formatted_address']);
                autocomplete.addListener('place_changed', () => handlePlaceSelect(autocomplete));
              }}
            >
              <TextField
                label="Venue Location"
                name="venueLocation"
                value={eventData.venueLocation}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </InputAdornment>
                  ),
                }}
                helperText="Powered by Google"
                required
              />
            </Autocomplete>
            {!eventData.showAdditionalFields && (
              <Button
                variant="outlined"
                onClick={handleAddLocationDetails}
                color="primary"
                fullWidth
              >
                Add Address Details
              </Button>
            )}
            {eventData.showAdditionalFields && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Street Address"
                    name="streetAddress"
                    value={eventData.streetAddress}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Region"
                    name="region"
                    value={eventData.region}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        )}

        {eventData.location === 'Online Event' && (
          <Grid item xs={12}>
            <TextField
              label="Meeting Link"
              name="meetingLink"
              value={eventData.meetingLink}
              onChange={handleChange}
              fullWidth
              helperText="Provide the link for online meetings"
              required
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={eventData.isFree}
                onChange={handleSwitchChange}
                color="primary"
              />
            }
            label="Free Event"
          />
          {!eventData.isFree && (
            <TextField
              label="Price"
              name="price"
              type="number"
              value={eventData.price}
              onChange={handleChange}
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
              required
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Seat Limit"
            name="seatLimit"
            type="number"
            value={eventData.seatLimit}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Upload Poster
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {posterPreview && (
            <div style={{ marginTop: 16 }}>
              <img src={posterPreview} alt="Event Poster" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Event
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateEventPage;
