const express = require('express');

const router = express.Router();

const Tag = require("../models/tag.model")

// tag CRUD requests
router.post("", async (req, res) => {
    try {
        const tag = await Tag.create(req.body);
        return res.send(tag);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("", async (req, res) => {
    try {
        const tags = await Tag.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tags)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const tag = await Tag.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tag)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        console.log(req.params)
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tag)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params)
        const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(tag)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

module.exports = router;