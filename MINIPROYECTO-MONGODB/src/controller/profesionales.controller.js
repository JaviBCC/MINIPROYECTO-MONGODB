let Profesional     = require("../model/profesionales.Schema");
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
        Profesional.findById(request.params.id)
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
                                          oscarsNumber: request.body.oscarsNumber,                
                                          profession:   request.body.profession}) 
                                          

    
    myProfesional.save()

    .then( (user) => 
    {
        console.log("Profesional Guardado Correctamente")
        console.log(user);
        response.send(user);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
    
}



function putProfesionales(request, response) 
{
     
    if (request.query._id != null) {    

            Profesional.updateOne({_id: request.query._id},    

                                   {name:            request.body.name, 
                                    age:             request.body.age, 
                                    genre:           request.body.genre, 
                                    weight:          request.body.weight, 
                                    height:          request.body.height,
                                    oscarsNumber:    request.body.oscarsNumber,
                                    profession:      request.body.profession})    
        

        .then( (user) =>
        {
            console.log("Profesional Modificado Correctamente")
            console.log(user);
            response.send(user);
        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })  
    }
}


function deleteProfesionales(request, response) 
{
    
    if (request.query._id != "") { 
 
         Profesional.deleteOne({_id: request.query._id})
 
         .then( (user) =>
         {
             console.log("Profesional Borrado Correctamente")
             console.log(user);
             response.send(user);
         })
 
         .catch( (err) =>
         {
             console.log(err);
             process.exit(-1);
         })
     } 

}




module.exports = {getStart, getProfesionales, postProfesionales, putProfesionales, deleteProfesionales};