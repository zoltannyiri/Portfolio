require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

const app = express();
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});