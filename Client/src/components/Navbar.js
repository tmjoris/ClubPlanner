import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import LoginModal from './LoginModal';


const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0d1117' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Event Planner
        </Typography>
        <Box>
          <Button color="inherit" sx={{ ml: 2 }}>
            Plan Event
          </Button>

          <Button color="inherit" sx={{ ml: 2 }} onClick={handleOpenModal}>
            Log In
          </Button>

          <Button color="inherit" sx={{ ml:2 }} onClick={handleSignUpClick}>
            Sign Up
          </Button>

          <LoginModal open={openModal} onClose={handleCloseModal} />

          <Button color="inherit" sx={{ ml: 2 }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
