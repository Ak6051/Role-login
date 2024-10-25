import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Select, MenuItem, FormControl, InputLabel, Grid, CircularProgress, InputAdornment, Tooltip } from '@mui/material';
import { Person, Email, Lock, Phone, Business, Home, Male, Female } from '@mui/icons-material';
import { styled } from '@mui/system';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    padding: theme.spacing(6),
    marginTop: theme.spacing(12),
    maxWidth: '600px',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4),
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    height: '55px',
    borderRadius: '30px',
    fontSize: '17px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 700,
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        transform: 'translateY(-3px)',
    },
    '&:active': {
        transform: 'translateY(1px)',
    },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.grey[400],
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(2),
    },
}));

const FormHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    fontSize: '2rem',
    marginBottom: theme.spacing(4),
    textAlign: 'center',
}));

const FormSubtext = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    textAlign: 'center',
}));

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [designation, setDesignation] = useState('');
    const [address, setAddress] = useState(''); // New state for address
    const [gender, setGender] = useState(''); // New state for gender
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post('/auth/register', {
                firstName,
                lastName,
                email,
                password,
                mobileNo,
                designation,
                address, // Include address in the registration data
                gender, // Include gender in the registration data
            });
            setLoading(false);
            if (res.status === 201) {
                alert('Registration successful');
                navigate('/login');
            }
        } catch (err) {
            setLoading(false);
            alert('Registration failed');
        }
    };

    return (
        <StyledContainer>
            <FormHeading>Create Your Account</FormHeading>
            <FormSubtext>Please fill out the form to get started.</FormSubtext>

            <Box component="form" onSubmit={handleRegister} noValidate sx={{ width: '100%' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Tooltip title="Enter your first name">
                            <StyledTextField
                                fullWidth
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Tooltip title="Enter your last name">
                            <StyledTextField
                                fullWidth
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                        <Tooltip title="Enter your email address">
                            <StyledTextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                        <Tooltip title="Choose a strong password">
                            <StyledTextField
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                        <Tooltip title="Enter your mobile number">
                            <StyledTextField
                                fullWidth
                                label="Mobile Number"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                        <Tooltip title="Enter your address">
                            <StyledTextField
                                fullWidth
                                label="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                variant="outlined"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Home />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" required>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                label="Gender"
                            >
                                <MenuItem value="Male"><Male /> Male</MenuItem>
                                <MenuItem value="Female"><Female /> Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" required>
                            <InputLabel>Designation</InputLabel>
                            <Select
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                label="Designation"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Business />
                                    </InputAdornment>
                                }
                            >
                                <MenuItem value="HR Recruiter">HR Recruiter</MenuItem>
                                <MenuItem value="HR Executive">HR Executive</MenuItem>
                                <MenuItem value="Accountant">Accountant</MenuItem>
                                <MenuItem value="Sales Executive">Sales Executive</MenuItem>
                                <MenuItem value="Business Development Manager">Business Development Manager</MenuItem>
                                <MenuItem value="Team Leader">Team Leader</MenuItem>
                                <MenuItem value="Owner">Owner</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            startIcon={loading && <CircularProgress size={24} sx={{ color: '#fff' }} />}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </StyledButton>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account? 
                <Button 
                    onClick={() => navigate('/login')} 
                    sx={{ textDecoration: 'underline' }} 
                >
                    Login
                </Button>
            </Typography>
        </StyledContainer>
    );
};

export default RegisterForm;