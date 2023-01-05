const express = require("express");

const connect = require("./configs/db")

const User = require("./models/user.model")
const Post = require("./models/post.model")
const Comment = require("./models/comment.model")
const Tag = require("./models/tag.model")

const app = express();

app.use(express.json());

// //step 1: connect to mongoDB
// mongoose.set("strictQuery", false);

// const connect = () => {
//     return mongoose.connect("mongodb+srv://mallikarjuna27:Ajju_2748@cluster0.orelrvq.mongodb.net/project?retryWrites=true&w=majority")
// }

//  mongodb://127.0.0.1:27017/
//  mongodb+srv://mallikarjuna27:Ajju_2748@cluster0.orelrvq.mongodb.net/project?retryWrites=true&w=majority








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
