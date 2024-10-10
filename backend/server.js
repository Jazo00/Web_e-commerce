const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConn');

// Load config
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

// Routes
app.use('/homepage', require('./routes/homepage'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
