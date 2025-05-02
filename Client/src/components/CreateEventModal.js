import React from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';

const CreateEventModal = ({ open, onClose }) => {
  const teams = ['IT Club', 'Math Club', 'Debate Club', 'Club not Listed', 'Not Part of Club or Organization'];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add Event
        </Typography>
        <TextField fullWidth label="Event Name" sx={{ mb: 2 }} />
        <TextField fullWidth type="date" label="Event Date" InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
        <TextField
          fullWidth
          label="Event Description"
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />
        <TextField fullWidth select label="Club Name" sx={{ mb: 2 }}>
          {teams.map((team) => (
            <MenuItem key={team} value={team}>
              {team}
            </MenuItem>
          ))}
        </TextField>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: '#0d1117', color: '#fff' }}
          onClick={onClose}
        >
          Save Event
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateEventModal;
