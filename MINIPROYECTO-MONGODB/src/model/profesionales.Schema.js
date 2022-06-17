const {Schema, model} = require("mongoose");

const professionalSchema = new Schema(
    {
        name:              String,
        age:               Number,
        genre:             String,
        weight:            Number,
        height:            Number,
        hairColor:         String,
        eyeColor:          String, 
        race:              String,
        isRetired:         Boolean,
        nationality:       Boolean,
        oscarsNumber:      Number,
        profession:        String,  

    });
    
module.exports = model("Professional", professionalSchema, "Professional" )   












