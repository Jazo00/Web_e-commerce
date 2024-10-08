require('dotenv').config();
require('express-async-errors');
const path = require('path');
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.NODE_ENV);

// connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/root'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on ${PORT}`));
