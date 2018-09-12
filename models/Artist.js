const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema ({
    name: String,
    sortName: [],
    type: {
        person: String,
        group: String,
        orchestra: String,
        choir: String,
        character: String,
        other: String
    },
    gender: String,
    area: String,
    ipi: Number,
    isni: Number,
    alias: String
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    } 

});

