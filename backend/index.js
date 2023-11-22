// Filename - backend/index.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const accountRoute = require("./routes/account");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successful"))
    .catch((err)=> {
        console.log(err);
    });

app.use("/api/account", accountRoute);

app.get("/api/test", ()=>{
    console.log("test is successful");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening on port 500")
});




const cors = require('cors');

app.use(cors())
app.use(express.json())

