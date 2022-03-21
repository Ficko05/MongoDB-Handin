const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
})

const twitterSchema = mongoose.model("twitter", testSchema)
module.exports = twitterSchema