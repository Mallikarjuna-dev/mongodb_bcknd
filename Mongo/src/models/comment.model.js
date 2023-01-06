const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: { type: "String", required: true },
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('comment', commentSchema);
