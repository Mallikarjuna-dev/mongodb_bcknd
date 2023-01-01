const express = require("express");
const mongoose = require("mongoose");

const app = express();

//step 1: connect to mongoDB
mongoose.set("strictQuery", false);
const connect = () => {
    return mongoose.connect("mongodb+srv://mallikarjuna27:Ajju_2748@cluster0.orelrvq.mongodb.net/project?retryWrites=true&w=majority")
}

//  mongodb://127.0.0.1:27017/
//  mongodb+srv://mallikarjuna27:Ajju_2748@cluster0.orelrvq.mongodb.net/project?retryWrites=true&w=majority

//step 2: create a Schema
const userSchema = new mongoose.Schema({
    id: { type: "Number", required: true },
    first_name: { type: "String", required: true },
    last_name: { type: "String", required: true },
    email: { type: "String", required: true },
    gender: { type: "String", required: false, default: "Male" },
    ip_address: { type: "String", required: false }
})


//step 3: create a model
// let User;
// try {
//     User = mongoose.model("mock", userSchema)
// }
// catch (e) {
//     console.log("error:", e.message)
// }

const User = mongoose.model("mock", userSchema);


app.get("/mocks", async (req, res) => {
    const users = await User.find().lean().exec()
    return res.send(users)
});


app.listen("2345", async () => {
    try {
        await connect();
        console.log("port running on 2345")
    }
    catch (e) {
        console.log("error:", e.message)
    }
});













// app.get("/", middleware, (req, res) => {
//     return res.send(`${req.name} database`)
// });

// app.get("/data", log, (req, res) => {
//     return res.send(`get database`)
// });

// function log(req, res, next) {
//     next()
// }

// function middleware(req, res, next) {
//     req.name = "MongoDB";
//     next();
// }
