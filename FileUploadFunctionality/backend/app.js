// MatchingDesign/backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const uploadRoutes = require('./routes/upload');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// static folder for uploaded files
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

// Upload route
app.use('/api/upload', uploadRoutes);
app.use('/api/auth', authRoutes);

// backend/app.js
app.get('/', (req, res) => {
  res.send('SkillSwap Backend is operational.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});