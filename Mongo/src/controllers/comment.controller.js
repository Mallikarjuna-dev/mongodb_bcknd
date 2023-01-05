const express = require('express');

const router = express.Router();

const Comment = require("../models/comment.model")


// comment CRUD methods

router.post("", async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        return res.status(201).send(comment);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("", async (req, res) => {
    try {
        const comments = await Comment.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(comments)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


router.get("/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const comment = await Comment.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(comment)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


router.patch("/:id", async (req, res) => {
    try {
        console.log(req.params)
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.status(201).send(comment)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params)
        const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(comment)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


module.exports = router;