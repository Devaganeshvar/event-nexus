import React from 'react';
import { Button, Grid } from '@mui/material';

const EventFooter = ({ onCreate }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Button variant="outlined" color="secondary" fullWidth>
          Cancel
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onCreate}
        >
          Create Event
        </Button>
      </Grid>
    </Grid>
  );
};

export default EventFooter;
