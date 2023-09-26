require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: 'http://localhost:4200' }))
app.use(bodyParser.json());
app.use('/', userRoutes);

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ',err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});