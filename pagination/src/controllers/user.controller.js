const express = require('express');

const User = require("../models/user.model")

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 15;

        const query = { gender: "Female" };
        const users = await User.find(query).skip((page - 1) * size).limit(size).lean().exec();
        const total = Math.ceil(await User.find(query).count() / size);
        return res.send({ users, total })
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;