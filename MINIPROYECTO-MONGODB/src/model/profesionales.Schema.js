let mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const professionalSchema = new mongoose.Schema(
    {
        name:              String,
        age:               Number,
        genre:             String,
        weight:            Number,
        height:            Number,
        oscarsNumber:      Number,
        profession:        String,
        

    })
    
module.exports = model("Profesionales", professionalSchema, "Profesionales");   












