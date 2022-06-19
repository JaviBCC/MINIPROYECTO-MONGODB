let Pelicula        = require("../model/peliculas.Schema");
const connection    = require("../database")
const mongoose      = require('mongoose')


function getStart(request, response) {
 
    let respuesta = {error: true, codigo: 200, mensaje: "Punto de Inicio"};
    response.send(respuesta);
    next();
}


function getPeliculas(request, response)
{
    
   if (request.params.id == null) {

        Pelicula.find({})

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
        Pelicula.findById(request.params.id)
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


function getPeliculasActor(request, response)
{
    
   if (request.params.id != null) {

        Pelicula.findById(request.params.id)

        .then( (user) =>
        {
            console.log(user)
            console.log(user.actors);
            response.send(user.actors)
        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }
}



function getPeliculasDirector(request, response)
{
    
   if (request.params.id != null) {

        Pelicula.findById(request.params.id)
       
        .then( (user) =>
        {
            console.log(user)
            console.log(user.director);
            response.send(user.director)
        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }
}


function getPeliculasGuionista(request, response)
{
    
   if (request.params.id != null) {

        Pelicula.findById(request.params.id)

        .then( (user) =>
        {
            console.log(user)
            console.log(user.writer);
            response.send(user.writer)
        })

        .catch( (err) =>
        {
            console.log(err);
            process.exit(-1);
        })
    }
}


function getPeliculasProductora(request, response)
{
    
   if (request.params.id != null) {

        Pelicula.findById(request.params.id)

        .then( (user) =>
        {
            console.log(user)
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



function postPeliculas(request, response) 
{
    let myPelicula = new Pelicula({ title:        request.body.title,           
                                    releaseYear:  request.body.releaseYear,            
                                    actors:       request.body.actors,   
                                    nacionality:  request.body.nacionality,
                                    director:     request.body.director,
                                    writer:       request.body.writer,
                                    producer:     request.body.producer,                
                                    genre:        request.body.genre}) 
                                          

    
    myPelicula.save()

    .then( (user) => 
    {
        console.log("Pelicula Guardada Correctamente")
        console.log(user);
        response.send(user);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}



function postPeliculasActor(request, response) 
{
    Pelicula.updateOne({id : {$eq: request.body.id}}, { $push: {actors: request.body.actors}})                                       

    console.log(myNewActors)
    
    myNewActors.save()

    .then( (user) =>    
    {
        console.log("Pelicula Guardada Correctamente")
        console.log(user);
        response.send(user);
    })
    .catch( (error) =>
    {
        console.log(error)
    })
}



function putPeliculas(request, response) 
{
     
    if (request.query._id != null) {    

            Pelicula.updateOne({_id: request.query._id},    

                                   {title:            request.body.title, 
                                    releaseYear:      request.body.releaseYear, 
                                    actors:           request.body.actors, 
                                    nacionality:      request.body.nacionality, 
                                    director:         request.body.director,
                                    writer:           request.body.writer,
                                    producer:         request.body.producer,
                                    genre:            request.body.genre})    
        

        .then( (user) =>
        {
            console.log("Pelicula Modificada Correctamente")
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


function deletePeliculas(request, response) 
{
    
    if (request.query._id != "") { 
 
         Pelicula.deleteOne({_id: request.query._id})
 
         .then( (user) =>
         {
             console.log("Pelicula Borrada Correctamente")
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


module.exports = {getStart, getPeliculas, getPeliculasActor, getPeliculasDirector, getPeliculasGuionista, getPeliculasProductora, 
                  postPeliculas, postPeliculasActor, putPeliculas, deletePeliculas};