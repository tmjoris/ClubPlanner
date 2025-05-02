import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EventCard = ({ title, isCreateEvent, onClick }) => {
  return (
    <Card
      sx={{
        cursor: isCreateEvent ? 'pointer' : 'default',
        backgroundColor: isCreateEvent ? '#e3f2fd' : '#fff',
      }}
      onClick={onClick}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6">{title}</Typography>
          {isCreateEvent && <ArrowForwardIcon />}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
