const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path')

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));


app.use('/auth', authRoutes);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
  });

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/register.html'));
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});