const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./Server/database/db");

const app = express();

dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV

// log requests
app.use(morgan('tiny'));


connectDB();

app.get('/', (req, res) => {
    res.send("Hello");
});
app.use('/', require('./server/routes/router'))



app.listen(PORT, () => { console.log(`Server is on ${NODE_ENV}, running on http://localhost:${PORT}`) });
