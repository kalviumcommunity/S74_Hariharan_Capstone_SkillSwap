const express = require('express');
const skillRoutes = require('./routes/skillRoutes');
const app = express();

app.use(express.json());  // added this Middleware to parse JSON in post-api
app.use('/api',skillRoutes);


const PORT = 5000;

app.listen(PORT, ()=> {
  console.log(`Server running on http://localhost:${PORT}`);
})