const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
})

const Test = mongoose.model("test", testSchema)
module.exports = Test