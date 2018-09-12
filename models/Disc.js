const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discSchema = new Schema ({
    title: String,
    artist: String, 
    date: Number,
    country: String,
    label: String,
    catalogue: Number,
    status: String
})

module.exports = mongoose.model('Disc', discSchema);