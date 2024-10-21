import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Navbar from '../components/AdminNavbar';
import Sidebar from '../components/AdminSidebar';

const AdminSetting = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h4">Settings</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This is the Admin Settings page.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default AdminSetting;