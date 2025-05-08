// backend/src/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// hello world endpoint
app.get('/', (req, res) => {
  res.send('🟢 Plauze Patrol API: Hello World');
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
