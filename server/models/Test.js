const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    tweet: {
        type: String,
        required: true,
    }
    
})

const twitterSchema = mongoose.model("twitter", testSchema)
module.exports = twitterSchema