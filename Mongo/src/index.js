const express = require("express");

const connect = require("./configs/db")

const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const commentController = require("./controllers/comment.controller")
const tagController = require("./controllers/tag.controller")

const app = express();

app.use(express.json());

app.use("/mocks", userController);
app.use("/posts", postController);
app.use("/comments", commentController);
app.use("/tags", tagController);

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
    } catch (e) {
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
