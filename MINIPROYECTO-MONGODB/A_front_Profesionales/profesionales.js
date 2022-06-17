
class Profesionales {
    name;
    age;
    genre;
    weight;
    height;
    oscarsNumber;
    profession;

    constructor(name, age, genre, weight, height, oscarsNumber, profession) {
        this.name           = name;
        this.age            = age;
        this.genre          = genre;
        this.weight         = weight;
        this.height         = height;
        this.oscarsNumber   = oscarsNumber;
        this.profession     = profession;

    }

}
    


function getProfesionales() {

    let newProfesional   = "";

    let id = document.getElementById("id").value;
    let url;

    if(id){

        url = `http://localhost:3000/profesionales/${id}`;
        console.log(url);

    } else {

        url =`http://localhost:3000/profesionales`

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
            console.log(result.first_name);

            if (result.length > 0) {

                console.log("Entro por mostrar multiples elementos")
                    
                for (let i = 0; i < result.length; i++) {

                    console.log("Paso por For" + i)


                    newProfesional += ` <h4 class = "h4_datRes">PROFESIONALES</h4>
                                    <ul>
                                        <li>Name:           ${result[i].name}</li>
                                        <li>Age:            ${result[i].age}</li>           
                                        <li>Genre:          ${result[i].genre}</li>
                                        <li>Weight:         ${result[i].weight}</li>
                                        <li>Height:         ${result[i].height}</li>   
                                        <li>OscarsNumber:   ${result[i].oscarsNumber}</li>
                                        <li>Profession:     ${result[i].profession}</li>
                                    </ul> `

                }
                                                 
            } else {
    
                    console.log("Voy a imprimir un solo elemento")
                    console.log(result);
                    
                    newProfesional = ` <h4 class = "h4_datRes">PROFESIONALES</h4> 

                                    <ul>
                                        <li>Name:           ${result.name}</li>
                                        <li>Age:            ${result.age}</li>           
                                        <li>Genre:          ${result.genre}</li>
                                        <li>Weight:         ${result.weight}</li>
                                        <li>Height:         ${result.height}</li> 
                                        <li>OscarsNumber:   ${result.oscarsNumber}</li>
                                        <li>Profession:     ${result.profession}</li>
                                    </ul> `

                                             
            }
                       
            console.log(newProfesional);
            document.getElementById('displayJson').innerHTML = newProfesional;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })

}

        
function postProfesionales() {

    console.log("Entro en POST")

    let newProfesional = new Profesionales( document.getElementById("name").value,
                                            document.getElementById("age").value,
                                            document.getElementById("genre").value,
                                            document.getElementById("weight").value,
                                            document.getElementById("height").value,
                                            document.getElementById("oscarsNumber").value,
                                            document.getElementById("profession").value)

                                              
                            
    console.log(newProfesional)      
        
    const url = "http://localhost:3000/profesionales";

    // if (validar(newProfesional)) {   

    if (newProfesional != "") {

        console.log("Entro por validar")
        // validar(newProfesional)

        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newProfesional),
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
         
            showToast("Usuario creado correctamente", "bg-success" )
                console.log(newProfesional)
                console.log(result)
            //  form-profesionales.reset();
        })

        .catch(function(error) {
            console.log(error)
        })

    }
}


// function putAlumnos() {

//     let id = document.getElementById("id").value;

//     const url = `http://localhost:3000/alumnos/?id=${id}`
  
//     console.log("Indice del PUT");
      
  
//     let auxPut = 
//                     {first_name:      document.getElementById("first_name").value,
//                      last_name:       document.getElementById("last_name").value,
//                      student_id:      document.getElementById("id").value
//                     }


//     let param = 
//                 {
//                     headers: {"Content-type":   "application/json; charset= UTF-8"},
//                     body: JSON.stringify(auxPut),
//                     method: "PUT"
//                 }
    
//     console.log(id);
//     console.log(auxPut);
//     console.log(url);
//     console.log(param);

//     fetch(url, param)

//         .then(function(data) {

//             return data.json()
           
//         })

//         .then(function(result) {

//             if (result.error)
//                 showToast("ERROR:" + result.mensaje, "bg-danger")
//             else

//             showToast("Usuario actualizado correctamente", "bg-success" )
//                 // console.log(newAlumno)
//                 // console.log(result)
//         })

//         .catch(function(error) {
//             console.log(error)
//         })

// }


// function deleteAlumnos() {

    
//     let id = document.getElementById("id").value;

//     const url = `http://localhost:3000/alumnos/?id=${id}`

//     console.log("Indice del DELETE");
//     console.log(id)

               
//     let auxDelete =  {id:   document.getElementById("id").value,}

//     console.log(auxDelete);

//     let param = 
//                 {
//                     headers: {"Content-type":   "application/json; charset= UTF-8"},
//                     body: JSON.stringify(auxDelete),
//                     method: "DELETE"
//                 }

//     fetch(url, param)

//         .then(function(data) {

//             return data.json()
           
//         })

//         .then(function(result) {

//             if (result.error)
//                 showToast("ERROR:" + result.mensaje, "bg-danger")
//             else

//             showToast("Alumno eliminado correctamente", "bg-success" )
         
//                 console.log(result)
//         })

//         .catch(function(error) {
//             console.log(error)
//         })


// }



function validar(newProfesional) {

    let resultado = false

    if (newProfesional.name == "" || newAlumno.name == "null") {

        showToast("AVISO: Campo Name no informado", "bg-warning")

    } 
    else if (newProfesional.age == "" || newProfesional.age == "null") {

        showToast("AVISO: Campo Age no informado", "bg-warning")

    }
    else if (newProfesional.genre == "" || newProfesional.genre == "null") {
    
        showToast("AVISO: Campo Genre no informado", "bg-warning")   
     
    }
    else if (newProfesional.weight == "" || newProfesional.weight == "null") {
    
        showToast("AVISO: Campo Weight no informado", "bg-warning") 

    }
    else if (newProfesional.height == "" || newProfesional.height == "null") {
    
        showToast("AVISO: Campo Height no informado", "bg-warning") 

    }
    else if (newProfesional.oscarsNumber == "" || newProfesional.oscarsNumber == "null") {
    
        showToast("AVISO: Campo Oscars no informado", "bg-warning") 

    }
    else if (newProfesional.profession == "" || newProfesional.profession == "null") {
    
        showToast("AVISO: Campo Profession no informado", "bg-warning")     


    }
    else
        resultado = true

    return resultado

}


function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}


