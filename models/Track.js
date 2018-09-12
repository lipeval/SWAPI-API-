const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const trackSchema = new Schema ({
    title: String,
    artist: String,
    duration: Number,

})

module.exports = mongoose.model('Track', trackSchema)