// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Container, Box, Typography, Link } from '@mui/material';
// import api from '../utils/api';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const role = localStorage.getItem('role');
//             if (role === 'admin') {
//                 navigate('/admin-dashboard');
//             } else {
//                 navigate('/user-dashboard');
//             }
//         }
//     }, [navigate]);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await api.post('/auth/login', { email, password });
//             const { token, role } = res.data;
//             localStorage.setItem('token', token);
//             localStorage.setItem('role', role);
//             if (role === 'admin') {
//                 navigate('/admin-dashboard');
//             } else {
//                 navigate('/user-dashboard');
//             }
//         } catch (err) {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <Container maxWidth="sm">
//             <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <Typography component="h1" variant="h5">Login</Typography>
//                 <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         label="Email"
//                         autoComplete="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         label="Password"
//                         type="password"
//                         autoComplete="current-password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         color="primary"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Login
//                     </Button>
//                     <Typography variant="body2" align="center">
//                         {"Don't have an account? "}
//                         <Link href="/register" variant="body2">
//                             Register
//                         </Link>
//                     </Typography>
//                 </Box>
//             </Box>
//         </Container>
//     );
// };

// export default LoginForm;
import React, { useState, useEffect } from 'react';
import {
    TextField,
    Button,
    Container,
    Box,
    Typography,
    Link,
    InputAdornment,
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material'; // Importing icons
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const role = localStorage.getItem('role');
            if (role === 'admin') {
                navigate('/admin-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            const { token, role } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            if (role === 'admin') {
                navigate('/admin-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
                sx={{
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3, // Adding box shadow
                    bgcolor: 'background.paper',
                    width: '100%', // Ensure the Box takes full width of the Container
                }}
            >
                <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2, height: '55px', borderRadius: '30px', fontWeight: 700 }}
                    >
                        Login
                    </Button>
                    <Typography variant="body2" align="center">
                        {"Don't have an account? "}
                        <Link href="/register" variant="body2" color="primary">
                            Register
                        </Link>
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        <Link href="/forgot-password" variant="body2" color="primary">
                            Forgot Password?
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginForm;
