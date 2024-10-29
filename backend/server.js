require('express-async-errors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConn');
const offersRoutes = require('./routes/offers');
const tradeItemsRoutes = require('./routes/tradeItem');
const bidsRoutes = require('./routes/bids');
const faqsRoutes = require('./routes/faqs');

// Load config
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

// Use the routes
app.use('/routes', offersRoutes);
app.use('/routes', tradeItemsRoutes);
app.use('/routes', bidsRoutes);
app.use('/routes', faqsRoutes);

app.use('/admins', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
