const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

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
}, {
    versionKey: false,
    timestamps: true
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


const postSchema = new mongoose.Schema({
    title: { type: "String", required: true },
    body: { type: "String", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "mock", required: true },
    tag_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true }]
}, {
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model('post', postSchema);


const commentSchema = new mongoose.Schema({
    content: { type: "String", required: true },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true }
}, {
    versionKey: false,
    timestamps: true
})


const Comment = mongoose.model('comment', commentSchema);


const tagSchema = new mongoose.Schema({
    name: { type: "String", required: true },
}, {
    versionKey: false,
    timestamps: true
})


const Tag = mongoose.model('tag', tagSchema);

// user CRUD methods

app.post("/mocks", async (req, res) => {
    try {
        const users = await User.create(req.body);
        return res.status(201).send(users);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/mocks", async (req, res) => {
    try {
        const users = await User.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


app.get("/mocks/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const users = await User.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


app.patch("/mocks/:id", async (req, res) => {
    try {
        console.log(req.params)
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.status(201).send(users)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


app.delete("/mocks/:id", async (req, res) => {
    try {
        console.log(req.params)
        const users = await User.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(users)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

// tag CRUD requests
app.post("/tags", async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        return res.send(tag);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

app.get("/tags", async (req, res) => {
    try {
        const tags = await Tag.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tags)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


app.get("/tags/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const tag = await Tag.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tag)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


app.patch("/tags/:id", async (req, res) => {
    try {
        console.log(req.params)
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tag)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


app.delete("/tags/:id", async (req, res) => {
    try {
        console.log(req.params)
        const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tag)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


// post CRUD methods

app.post("/posts", async (req, res) => {
    try {
        const posts = await Post.create(req.body);
        return res.status(201).send(posts);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(posts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


app.get("/posts/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const posts = await Post.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(posts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


app.patch("/posts/:id", async (req, res) => {
    try {
        console.log(req.params)
        const posts = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.status(201).send(posts)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


app.delete("/posts/:id", async (req, res) => {
    try {
        console.log(req.params)
        const posts = await Post.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(posts)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


// comment CRUD methods

app.post("/comments", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).send(comment);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

app.get("/comments", async (req, res) => {
    try {
        const comments = await Comment.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(comments)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


app.get("/comments/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const comment = await Comment.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(comment)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


app.patch("/comments/:id", async (req, res) => {
    try {
        console.log(req.params)
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.status(201).send(comment)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


app.delete("/comments/:id", async (req, res) => {
    try {
        console.log(req.params)
        const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(comment)
    } catch (e) {
        return res.status(500).send(e.message);
    }
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
