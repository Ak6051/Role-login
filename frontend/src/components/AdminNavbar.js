// // src/components/Navbar.js
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const AdminNavbar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('token'); // Remove token from local storage
//         localStorage.removeItem('role');  // Remove role from local storage
//         navigate('/login'); // Redirect to login page
//     };

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" sx={{ flexGrow: 1 }}>
//                     Admin Dashboard
//                 </Typography>
//                 <Button color="inherit" onClick={handleLogout}>Logout</Button>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default AdminNavbar;
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role'); 
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Admin Dashboard
                </Typography>
                <div>
                    <Button 
                        color="inherit" 
                        onClick={handleMenuClick}
                        aria-controls={Boolean(anchorEl) ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                    >
                        Profile
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => navigate('/profile')}>My Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default AdminNavbar;
