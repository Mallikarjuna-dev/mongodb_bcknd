const express = require('express');

const router = express.Router();

const User = require("../models/user.model")


// user CRUD methods
router.post("/mocks", async (req, res) => {
    try {
        const users = await User.create(req.body);
        return res.status(201).send(users);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("/mocks", async (req, res) => {
    try {
        const users = await User.find().lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


router.get("/mocks/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const users = await User.findById(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
});


router.patch("/mocks/:id", async (req, res) => {
    try {
        console.log(req.params)
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.status(201).send(users)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});


router.delete("/mocks/:id", async (req, res) => {
    try {
        console.log(req.params)
        const users = await User.findByIdAndDelete(req.params.id).lean().exec(); //mongoose obj to json obj and resolve full promise
        return res.send(users)
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

module.exports = router;