const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    subname : {
        type : Array
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema)