const express = require('express');

const router = express.Router();

const Post = require("../models/post.model")

// post CRUD methods

router.post("/posts", async (req, res) => {
    try {
        const posts = await Post.create(req.body);
        return res.status(201).send(posts);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(posts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


router.get("/posts/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const posts = await Post.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(posts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


router.patch("/posts/:id", async (req, res) => {
    try {
        console.log(req.params)
        const posts = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.status(201).send(posts)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


router.delete("/posts/:id", async (req, res) => {
    try {
        console.log(req.params)
        const posts = await Post.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(posts)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

module.exports = router;