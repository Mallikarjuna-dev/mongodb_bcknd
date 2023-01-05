
const mongoose = require("mongoose");


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


module.exports = mongoose.model("mock", userSchema);
