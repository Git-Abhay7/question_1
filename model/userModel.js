const mongoose = require("mongoose")
const schema = mongoose.Schema
const userKey = new schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required:true
    }
},
    {
        timestamps: true
    });
module.exports = mongoose.model("user", userKey, "user")