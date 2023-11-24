// Filename - backend/index.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const accountRoute = require("./routes/account");
const authRoute = require("./routes/auth");
const paddleRoute = require("./routes/paddle");
var cors = require('cors');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successful"))
    .catch((err)=> {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/account", accountRoute);
app.use("/api/auth", authRoute);
app.use("/api/paddle", paddleRoute);

app.get("/api/test", ()=>{
    console.log("test is successful");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening on port 5000")
});

