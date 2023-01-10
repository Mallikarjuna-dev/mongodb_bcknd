const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller")

const app = express();

app.use("/users", userController);

app.listen(2233, async () => {
    try {
        await connect();
        
        console.log("listening on port 2233");
    }
    catch (err) {
        console.log(err.message);
    }
})