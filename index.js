const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./Server/Database/Db");
const DataRoute = require("./Server/Routes/Router");


const app = express();
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV


// log requests
app.use(morgan('tiny'));
app.use(express.json());

connectDB();

app.use("/", DataRoute);


app.listen(PORT, () => { console.log(`Server is on ${NODE_ENV}, running on port http://localhost:${PORT}`) });