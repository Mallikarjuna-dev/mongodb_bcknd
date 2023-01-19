const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017/project")
    //127.0.0.1
}
