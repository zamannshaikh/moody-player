require('dotenv').config();
const express = require('express');
const connectDB = require("./src/db/db.js");
const songRoutes = require("./src/routes/songs.routes.js");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use('/', songRoutes);







app.listen(3000, () => {  console.log('Server is running on port 3000');
});
