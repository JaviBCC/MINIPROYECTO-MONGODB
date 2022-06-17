const {Schema, model} = require("mongoose");

const peliculasSchema = new Schema(
    {
        title:              String,
        releaseYear:        Number,
        actors:             [String],
        nacionality:        String,
        director:           [String],
        writer:             [String],
        language:           String,
        plataform:          String,
        isMCU:              Boolean,
        mainCharacterName:  String,
        producer:           String,
        distributor:        String,
        genre:              String,
    });
    
module.exports = model("Peliculas", peliculasSchema, "Peliculas" )   















