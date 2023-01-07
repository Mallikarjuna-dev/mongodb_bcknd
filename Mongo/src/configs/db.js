const mongoose = require("mongoose");

//step 1: connect to mongoDB
mongoose.set("strictQuery", false);

const connect = () => {
    return mongoose.connect("mongodb+srv://mallikarjuna27:Ajju_2748@cluster0.orelrvq.mongodb.net/project?retryWrites=true&w=majority")
}

module.exports = connect;