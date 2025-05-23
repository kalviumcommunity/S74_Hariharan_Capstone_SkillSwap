// MatchingDesign/backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const uploadRoutes = require('./routes/upload');

const app = express();

app.use(cors());
app.use(express.json());

// static folder for uploaded files
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

// Upload route
app.use('/api/upload', uploadRoutes);

// backend/app.js
app.get('/', (req, res) => {
  res.send('SkillSwap Backend is operational.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});