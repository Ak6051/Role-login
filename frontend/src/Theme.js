import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff5722',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

export default Theme;
