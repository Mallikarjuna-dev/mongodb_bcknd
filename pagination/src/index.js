const express = require("express");

const connect = require("./configs/db");

const app = express();


app.listen(2233, async () => {
    try {
        await connect();
        console.log("listening on port 2233");
    } catch (err) {
        console.log(err.message);
    }
})