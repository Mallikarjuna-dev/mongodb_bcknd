const express = require('express');

const { body, validationResult } = require('express-validator');

const User = require("../models/user.model")

const router = express.Router();

router.post("",

    body("id").isNumeric(),
    //body("first_name").isLength({ min: 5, max: 50 }),
    //body("last_name").isLength({ min: 5, max: 50 }),
    //body("gender").isNumeric()

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
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

        const users = await User.find().lean().exec();
        //skip((page - 1) * size).limit(size).

        const total = Math.ceil(await User.find().count() / size);

        return res.send({ users, total })

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;