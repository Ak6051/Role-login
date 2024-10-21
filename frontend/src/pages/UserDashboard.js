

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/UserNavbar';
import Sidebar from '../components/Sidebar';
import { Container, Typography, Box } from '@mui/material';

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar/>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h4">Welcome to Your Dashboard</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This is your user dashboard where you can manage your profile and settings.
          </Typography>
          {/* Add more dashboard content here */}
        </Container>
      </Box>
    </Box>
  );
};

export default UserDashboard;
