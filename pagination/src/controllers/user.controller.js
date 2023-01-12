const express = require('express');

const { body, validationResult } = require('express-validator');

const User = require("../models/user.model")

const router = express.Router();

router.post("", body("id").notEmpty().isNumeric(), async (req, res) => {
    // console.log(body("id"))
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // const user = await User.create(req.body);

        return res.send("user");

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

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