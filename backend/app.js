require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patients');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use('/api/patients', patientRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Healthcare App API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
