const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.send("Hello");
});



app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });
