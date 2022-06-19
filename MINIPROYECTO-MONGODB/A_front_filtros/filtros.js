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
    
  

function getPeliculasActor() {

    let newPeliculaActor   = "";

    let id = document.getElementById("id").value;
    let url;

    console.log(id);


    if(id){
        url = `http://localhost:3000/peliculas/actors/${id}`;
        console.log(url);
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
    

            if (result.length > 0) {

                console.log("Entro por mostrar multiples elementos")
                    
                for (let i = 0; i < result.length; i++) {

                    console.log("Paso por For" + i)
                    console.log(result[0].actors);

                    newPeliculaActor += ` <h4 class = "h4_datRes">ACTORES</h4>
                                            <ul>
                                                <li>Actores:          ${result[i]}</li>
                                            </ul> `

                }
                                                 
            } 
                       
            console.log(newPeliculaActor);
            document.getElementById('displayJson').innerHTML = newPeliculaActor;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })

}


function getPeliculasDirector() {

    let newPeliculaDirector   = "";

    let id = document.getElementById("id").value;
    let url;

    console.log(id);


    if(id){
        url = `http://localhost:3000/peliculas/director/${id}`;
        console.log(url);
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
    

            if (result.length > 0) {

                console.log("Entro por mostrar multiples elementos")
                    
                for (let i = 0; i < result.length; i++) {

                    console.log("Paso por For" + i)
                    console.log(result[0].actors);

                    newPeliculaDirector += ` <h4 class = "h4_datRes">DIRECTORES</h4>
                                                <ul>
                                                    <li>Directores: ${result[i]}</li>
                                                </ul> `

                }
                                                 
            } 
                       
            console.log(newPeliculaDirector);
            document.getElementById('displayJson').innerHTML = newPeliculaDirector;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })

}


function getPeliculasGuionista() {

    let newPeliculaGuionista   = "";

    let id = document.getElementById("id").value;
    let url;

    console.log(id);


    if(id){
        url = `http://localhost:3000/peliculas/guionista/${id}`;
        console.log(url);
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
    

            if (result.length > 0) {

                console.log("Entro por mostrar multiples elementos")
                    
                for (let i = 0; i < result.length; i++) {

                    console.log("Paso por For" + i)
                    console.log(result[0].actors);

                    newPeliculaGuionista += ` <h4 class = "h4_datRes">GUIONISTAS</h4>
                                                <ul>
                                                    <li>Guionistas: ${result[i]}</li>
                                                </ul> `

                }
                                                 
            } 
                       
            console.log(newPeliculaGuionista);
            document.getElementById('displayJson').innerHTML = newPeliculaGuionista;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })

}


function getPeliculasProductora() {

    let newPeliculaProductora   = "";

    let id = document.getElementById("id").value;
    let url;

    console.log(id);


    if(id){
        url = `http://localhost:3000/peliculas/productora/${id}`;
        console.log(url);
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
            console.log("Estoy aqui: " + result);

            console.log("Voy con un solo elemento")

            newPeliculaProductora = ` <h4 class = "h4_datRes">PRODUCTORA</h4>
                                        <ul>
                                            <li>Productora: ${result.producer}</li>
                                        </ul> `

        
                                                          
            console.log(newPeliculaProductora);
            document.getElementById('displayJson').innerHTML = newPeliculaProductora;
    
                
        })
        
        .catch(err =>{
            console.log(err);
        })

}





// // function validar(newPelicula) {

// //     let resultado = false

// //     if (newPelicula.title == "" || newPelicula.title == "null") {

// //         showToast("AVISO: Campo Title no informado", "bg-warning")

// //     } 
// //     else if (newPelicula.releaseYear == "" || newPelicula.releaseYear == "null") {

// //         showToast("AVISO: Campo Release Year no informado", "bg-warning")

// //     }
// //     else if (newPelicula.actors == "" || newPelicula.actors == "null") {
    
// //         showToast("AVISO: Campo Actors no informado", "bg-warning")   
     
// //     }
// //     else if (newPelicula.nacionality == "" || newPelicula.nacionality == "null") {
    
// //         showToast("AVISO: Campo Nacionality no informado", "bg-warning") 

// //     }
// //     else if (newPelicula.director == "" || newPelicula.director == "null") {
    
// //         showToast("AVISO: Campo Director no informado", "bg-warning") 

// //     }
// //     else if (newPelicula.writer == "" || newPelicula.writer == "null") {
    
// //         showToast("AVISO: Campo Writers no informado", "bg-warning") 

// //     }
// //     else if (newPelicula.producer == "" || newPelicula.producer == "null") {
    
// //         showToast("AVISO: Campo Producer no informado", "bg-warning")     


// //     }
// //     else
// //         resultado = true

// //     return resultado

// // }


function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}



