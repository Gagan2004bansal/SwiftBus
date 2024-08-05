const express = require('express');
const app = express();
const cors = require('cors');

require("dotenv").config();
const PORT = process.env.PORT || 3000;;

app.use(express.json());

app.use(cors());
app.use(cors({
    origin: 'http://localhost:3001', //
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

const dbconnect = require('./config/database');
dbconnect();

const user = require('./routes/user');
app.use("/api/v1", user);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})