// class Peliculas {
//     title;
//     releaseYear;
//     actors;
//     nacionality;
//     director;
//     writer;
//     language;
//     plataform;
//     isMCU;
//     mainCharacterName;
//     producer;
//     distributor;
//     genre;

//     constructor(title, releaseYear, actors, nacionality, director, writer, language, plataform, 
//                 isMCU, mainCharacterName, producer, distributor, genre) {

//         this.title              = title;
//         this.releaseYear        = releaseYear;
//         this.actors             = actors;
//         this.nacionality        = nacionality;
//         this.director           = director;
//         this.writer             = writer;
//         this.language           = language;
//         this.plataform          = plataform;
//         this.isMCU              = isMCU;
//         this.mainCharacterName  = mainCharacterName;
//         this.producer           = producer;
//         this.distributor        = distributor;
//         this.genre              = genre;

//     }

// }
    
class Peliculas {
    title;
    releaseYear;
    actors;
    nacionality;
    director;
    writer;
    producer;
    genre;

    constructor(title, releaseYear, actors, nacionality, director, writer, producer, genre) {
            

        this.title              = title;
        this.releaseYear        = releaseYear;
        this.actors             = actors;
        this.nacionality        = nacionality;
        this.director           = director;
        this.writer             = writer;
        this.producer           = producer;
        this.genre              = genre;

    }

}

function getPeliculas() {

    let newPelicula   = "";

    let id = document.getElementById("id").value;
    let url;

    if(id){

        url = `http://localhost:3000/peliculas/${id}`;
        console.log(url);

    } else {

        url =`http://localhost:3000/peliculas`

    }


        let param =
        {
            headers: {"Content-type": "application/json; charset = UTF-8"},
            method: "GET"
        }

        fetch(url, param)

        .then(function(data) {

            return data.json()

        })  

        .then(function(result) {

            console.log("Entro por getElement")
            console.log(result);
            console.log(result.title);

            if (result.length > 0) {

                console.log("Entro por mostrar multiples elementos")
                    
                for (let i = 0; i < result.length; i++) {

                    console.log("Paso por For" + i)


                    newPelicula += ` <h4 class = "h4_datRes">PELICULA</h4>
                                    <ul>
                                        <li>Title:           ${result[i].title}</li>
                                        <li>Release Year:    ${result[i].releaseYear}</li>           
                                        <li>Actors:          ${result[i].actors}</li>
                                        <li>Nacionality:     ${result[i].nacionality}</li>
                                        <li>Director:        ${result[i].director}</li>   
                                        <li>Writer:          ${result[i].writer}</li>
                                        <li>Producer:        ${result[i].producer}</li>
                                        <li>Genre:           ${result[i].genre}</li>         
                                    </ul> `

                }
                                                 
            } else {
    
                        console.log("Voy a imprimir un solo elemento")
                        console.log(result);
                        
                        newPelicula = ` <h4 class = "h4_datRes">PELICULA</h4> 

                                        <ul>
                                            <li>Title:           ${result.title}</li>
                                            <li>Release Year:    ${result.releaseYear}</li>           
                                            <li>Actors:          ${result.actors}</li>
                                            <li>Nacionality:     ${result.nacionality}</li>
                                            <li>Director:        ${result.director}</li>   
                                            <li>Writer:          ${result.writer}</li>
                                            <li>Producer:        ${result.producer}</li>
                                            <li>Genre:           ${result.genre}</li>       
                                        </ul> `

                                             
            }
                       
            console.log(newPelicula);
            document.getElementById('displayJson').innerHTML = newPelicula;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })

}



function postPeliculas() {

    console.log("Entro en POST")

    let newPelicula = new Peliculas(document.getElementById("title").value,
                                    document.getElementById("releaseYear").value,
                                    document.getElementById("actors").value,
                                    document.getElementById("nacionality").value,
                                    document.getElementById("director").value,
                                    document.getElementById("writer").value,
                                    document.getElementById("producer").value,
                                    document.getElementById("genre").value)

                                              
                            
    console.log(newPelicula)      
        
    const url = "http://localhost:3000/peliculas";

    // if (validar(newProfesional)) {   

    if (newPelicula != "") {

        console.log("Entro por validar")
        // validar(newPelicula)

        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newPelicula),
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
         
                showToast("Pelicula creada correctamente", "bg-success" )
                console.log(newPelicula)
                console.log(result)
            //  form-profesionales.reset();
        })

        .catch(function(error) {
            console.log(error)
        })

    }
}


function putPeliculas() {

    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/peliculas/?_id=${id}`
  
    console.log("Indice del PUT");
      
  
    let auxPut = 
                    {
                     title:              document.getElementById("title").value,
                     releaseYear:        document.getElementById("releaseYear").value,
                     actors:             document.getElementById("actors").value,
                     nacionality:        document.getElementById("nacionality").value,      
                     director:           document.getElementById("director").value,
                     writer:             document.getElementById("writer").value,
                     producer:           document.getElementById("producer").value, 
                     genre:              document.getElementById("genre").value           
                    }


    let param = 
                {
                    headers: {"Content-type":   "application/json; charset= UTF-8"},
                    body: JSON.stringify(auxPut),
                    method: "PUT"
                }
    
    console.log(id);
    console.log(auxPut);
    console.log(url);
    console.log(param);

    fetch(url, param)

        .then(function(data) {

            return data.json()
           
        })

        .then(function(result) {

            if (result.error)
                showToast("ERROR:" + result.mensaje, "bg-danger")
            else
                showToast("Pelicula actualizada correctamente", "bg-success" )
                // console.log(newPelicula)
                // console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })

}


function deletePeliculas() {

    
    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/peliculas/?_id=${id}`

    console.log("Indice del DELETE");
    console.log(id)

               
    let auxDelete =  {id:   document.getElementById("id").value,}

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

            showToast("Pelicula eliminada correctamente", "bg-success" )
         
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



