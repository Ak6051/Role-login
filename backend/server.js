const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const salesRoutes = require ('./routes/salesRoutes');
const saleReportRoutes = require('./routes/sale.report.route');
const settingsRoutes = require('./routes/logo.setting.route');
const  profileRoutes = require ('./routes/profile.route')
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', salesRoutes);
app.use('/api/report', saleReportRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/user' , profileRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
