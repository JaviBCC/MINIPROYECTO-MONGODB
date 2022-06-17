let Profesional    = require("../model/profesionales.Schema");
const connection    = require("../database")
const mongoose      = require('mongoose')


function getStart(request, response) {
 
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
    next();
}


function getProfesionales(request, response)
{
    
   if (request.params.id == null) {

        Profesional.find({})

        .then( (user) =>
        {
            console.log(user);
            response.send(user)

        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    } 
    else
    {
        Profesional.findOne({name: request.params.id})
        .then( (user) =>
        {
            console.log(user);
            response.send(user)
        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }    
}


function postProfesionales(request, response) 
{
    let myProfesional = new Profesional({ name:         request.body.name,           
                                          age:          request.body.age,            
                                          genre:        request.body.genre,   
                                          weight:       request.body.weight,
                                          height:       request.body.height,
                                          hairColor:    request.body.hairColor,
                                          eyeColor:     request.body.eyeColor,
                                          race:         request.body.race,
                                          isRetired:    request.body.isRetired,
                                          nationality:  request.body.nationality,
                                          oscarsNumber: request.body.oscarsNumber,                
                                          profession:   request.body.profession}) 
                                          

    
    myProfesional.save()

    .then( (user) => 
    {
        console.log("Profesional guardado correctamente")
        console.log(user);
        response.send(user);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
    
}



module.exports = {getStart, getProfesionales, postProfesionales};