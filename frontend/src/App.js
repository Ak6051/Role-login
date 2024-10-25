
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Theme from './Theme';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import SettingsPage from './pages/SettingsPage';
import SalesPage from './pages/SalesPage';
import AdminSetting from './pages/AdminSetting';
import SalesReport from './pages/SalesReport'
import ProfilePage from './pages/AdminProfilePage';
import UserProfilePage from './pages/UserProfilePage';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/sales" element={<SalesPage />} />
                    <Route path="/admin-settings" element={<AdminSetting />} />
                    <Route path="/sales-report" element={<SalesReport />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/user-profile" element={<UserProfilePage />} />

                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
