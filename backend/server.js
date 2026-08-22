require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/ContactRoutes');

const app = express();
app.set('trust proxy', 1)
app.use(cors())
app.use(express.json({ limit: '20kb' }))



app.use('/api', contactRoutes)



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("Portfolio backend v2")
});
