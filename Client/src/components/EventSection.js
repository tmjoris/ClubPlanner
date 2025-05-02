import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import EventCard from './EventCard';
import CreateEventModal from './CreateEventModal';

const EventSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {/* Left: Static Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: 300,
              backgroundColor: '#ddd',
              borderRadius: 2,
            }}
          >
            {/* Add image content here */}
          </Box>
        </Grid>

        {/* Right: Cards */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Create Event Card */}
            <EventCard
              title="Create Event"
              isCreateEvent={true}
              onClick={() => setOpenModal(true)}
            />

            {/* Upcoming Events Card */}
            <EventCard title="Upcoming Events" />
          </Box>
        </Grid>
      </Grid>

      {/* Modal for Adding Event */}
      <CreateEventModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
};

export default EventSection;
