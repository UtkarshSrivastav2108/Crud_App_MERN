const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./Server/routes/auth");
const postRoute = require("./Server/routes/posts");
const connectDB = require("./Server/database/db");
const path = require("path");
const morgan = require("morgan");

dotenv.config({ path: 'config.env' })

const PORT = process.env.PORT || 8080
const NODE_ENV = process.env.NODE_ENV

// log requests
app.use(morgan('tiny'));
app.use(express.json());

connectDB();


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => { console.log(`Server is on ${NODE_ENV}, running on port http://localhost:${PORT}`) });