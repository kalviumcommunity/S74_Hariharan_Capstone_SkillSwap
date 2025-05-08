const express = require('express');
const skillRoutes = require('./routes/skillRoutes');
const app = express();

app.use('/api',skillRoutes);


const PORT = 5000;

app.listen(prompt, ()=> {
  console.log(`Server running on http://localhost:${PORT}`);
})