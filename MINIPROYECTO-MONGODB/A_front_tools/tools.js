class Peliculas {
    title;
    releaseYear;
    actors;
    nacionality;
    director;
    writer;
    language;
    plataform;
    isMCU;
    mainCharacterName;
    producer;
    distributor;
    genre;

    constructor(title, releaseYear, actors, nacionality, director, writer, language, plataform, 
                isMCU, mainCharacterName, producer, distributor, genre) {

        this.title              = title;
        this.releaseYear        = releaseYear;
        this.actors             = actors;
        this.nacionality        = nacionality;
        this.director           = director;
        this.writer             = writer;
        this.language           = language;
        this.plataform          = plataform;
        this.isMCU              = isMCU;
        this.mainCharacterName  = mainCharacterName;
        this.producer           = producer;
        this.distributor        = distributor;
        this.genre              = genre;

    }

}
    
function postPeliculasActor() {

    console.log("Entro en POST")

    let id = document.getElementById("id").value;

    let newPeliculaActor = {
                            actors: (document.getElementById("actors").value)
                           }

                                          
    const url = `http://localhost:3000/peliculas/actors/?_id=${id}`;
   

    console.log("Esto lleva newPeliculasActor: " + actors.value)   
    console.log("Esto lleva url: " + url)

    // if (validar(newProfesional)) {   

    if (newPeliculaActor != "") {

        console.log("Entro por validar")
        // validar(newPelicula)

        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newPeliculaActor),
                method: "POST"
            }

        fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else
         
            showToast("Actor añadido correctamente", "bg-success" )
                console.log(newPeliculaActor)
                console.log(result)
            //  form-profesionales.reset();
        })

        .catch(function(error) {
            console.log(error)
        })

    }
}



function postPeliculasDirector() {

    console.log("Entro en POST")

    let id = document.getElementById("id").value;

    let newPeliculaDirector = {
                                 director: (document.getElementById("director").value)
                              }


    const url = `http://localhost:3000/peliculas/director/?_id=${id}`;
   

    console.log("Esto lleva newPeliculaDirector: " + director.value)   
    console.log("Esto lleva url: " + url)

    // if (validar(newPeliculaDirector)) {   

    if (newPeliculaDirector != "") {

        console.log("Entro por validar")
        // validar(newPeliculaDirector)

        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newPeliculaDirector),
                method: "POST"
            }

        fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else
         
            showToast("Director añadido correctamente", "bg-success" )
                console.log(newPeliculaDirector)
                console.log(result)
            //  form-profesionales.reset();
        })

        .catch(function(error) {
            console.log(error)
        })

    }
}



function postPeliculasGuionista() {

    console.log("Entro en POST")

    let id = document.getElementById("id").value;
    
    let newPeliculaGuionista = {
                                 writer: (document.getElementById("writer").value)
                               }


    const url = `http://localhost:3000/peliculas/guionista/?_id=${id}`;
   

    console.log("Esto lleva newPeliculaGuionista: " + writer)   
    console.log("Esto lleva url: " + url)

    // if (validar(newPeliculaGuionista)) {   

    if (newPeliculaGuionista != "") {

        console.log("Entro por validar")
        // validar(newPeliculaGuionista)

        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newPeliculaGuionista),
                method: "POST"
            }

        fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else
         
            showToast("Guionista añadido correctamente", "bg-success" )
                console.log(newPeliculaGuionista)
                console.log(result)
            //  form-profesionales.reset();
        })

        .catch(function(error) {
            console.log(error)
        })

    }
}



function deletePeliculasActor() {

    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/peliculas/actors/?_id=${id}`

    console.log("Indice del DELETE");
    console.log(id)


    let auxDelete = { actors: (document.getElementById("actors").value)}

    console.log(auxDelete);

    let param = 
                {
                    headers: {"Content-type":   "application/json; charset= UTF-8"},
                    body: JSON.stringify(auxDelete),
                    method: "DELETE"
                }

    fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else

            showToast("Actor eliminado correctamente", "bg-success" )
         
                console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })

}


function deletePeliculasDirector() {

    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/peliculas/director/?_id=${id}`

    console.log("Indice del DELETE");
    console.log(id)


    let auxDelete = { director: (document.getElementById("director").value)}

    console.log(auxDelete);

    let param = 
                {
                    headers: {"Content-type":   "application/json; charset= UTF-8"},
                    body: JSON.stringify(auxDelete),
                    method: "DELETE"
                }

    fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else

            showToast("Director eliminado correctamente", "bg-success" )
         
                console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })

}



function deletePeliculasGuionista() {

    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/peliculas/guionista/?_id=${id}`

    console.log("Indice del DELETE");
    console.log(id)


    let auxDelete = { writer: (document.getElementById("writer").value)}

    console.log(auxDelete);

    let param = 
                {
                    headers: {"Content-type":   "application/json; charset= UTF-8"},
                    body: JSON.stringify(auxDelete),
                    method: "DELETE"
                }

    fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else

            showToast("Guionista eliminado correctamente", "bg-success" )
         
                console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })

}




// function validar(newPelicula) {

//     let resultado = false

//     if (newPelicula.title == "" || newPelicula.title == "null") {

//         showToast("AVISO: Campo Title no informado", "bg-warning")

//     } 
//     else if (newPelicula.releaseYear == "" || newPelicula.releaseYear == "null") {

//         showToast("AVISO: Campo Release Year no informado", "bg-warning")

//     }
//     else if (newPelicula.actors == "" || newPelicula.actors == "null") {
    
//         showToast("AVISO: Campo Actors no informado", "bg-warning")   
     
//     }
//     else if (newPelicula.nacionality == "" || newPelicula.nacionality == "null") {
    
//         showToast("AVISO: Campo Nacionality no informado", "bg-warning") 

//     }
//     else if (newPelicula.director == "" || newPelicula.director == "null") {
    
//         showToast("AVISO: Campo Director no informado", "bg-warning") 

//     }
//     else if (newPelicula.writer == "" || newPelicula.writer == "null") {
    
//         showToast("AVISO: Campo Writers no informado", "bg-warning") 

//     }
//     else if (newPelicula.producer == "" || newPelicula.producer == "null") {
    
//         showToast("AVISO: Campo Producer no informado", "bg-warning")     


//     }
//     else
//         resultado = true

//     return resultado

// }


function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}



