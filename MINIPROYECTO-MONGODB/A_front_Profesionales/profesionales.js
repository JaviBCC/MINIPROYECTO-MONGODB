
class Profesionales {
    name;
    age;
    genre;
    weight;
    height;
    hairColor;
    eyeColor;
    race;
    isRetired;
    nationality;
    oscarsNumber;
    profession;

    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber,profession) {
        this.name           = name;
        this.age            = age;
        this.genre          = genre;
        this.weight         = weight;
        this.height         = height;
        this.hairColor      = hairColor;
        this.eyeColor       = eyeColor;
        this.race           = race;
        this.isRetired      = isRetired;  
        this.nationality    = nationality;
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
                                        <li>HairColor:      ${result[i].hairColor}</li>
                                        <li>EyeColor:       ${result[i].eyeColor}</li>
                                        <li>Race:           ${result[i].race}</li>
                                        <li>IsRetired:      ${result[i].isRetired}</li>
                                        <li>Nationality:    ${result[i].nationality}</li>    
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
                                        <li>HairColor:      ${result.hairColor}</li>
                                        <li>EyeColor:       ${result.eyeColor}</li>
                                        <li>Race:           ${result.race}</li>
                                        <li>IsRetired:      ${result.isRetired}</li>
                                        <li>Nationality:    ${result.nationality}</li>    
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


function postAlumnos() {

    console.log("Entro en POST")

    let newProfesional = new Profesional(document.getElementById("name").value,
                                         document.getElementById("age").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value,
                                         document.getElementById("").value)
                               
                           
                            
     console.log(newAlumno)      
        
    const url = "http://localhost:3000/alumnos";

    if (validar(newAlumno)) {
        
        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newAlumno),
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
                console.log(newAlumno)
                console.log(result)
                // form-profesionales.reset();
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



// function validar(newAlumno) {

//     let resultado = false

//     if (newAlumno.first_name == "" || newAlumno.first_name == "null") {

//         showToast("AVISO: Campo First Name no informado", "bg-warning")

//     } 
//     else if (newAlumno.last_name == "" || newAlumno.last_name == "null") {

//         showToast("AVISO: Campo Last Name no informado", "bg-warning")

//     // }
//     // else if (newAlumno.income_year == "" || newAlumno.income_year == "null") {
    
//     //     showToast("AVISO: Campo Income Year no informado", "bg-warning")   
    
//     }
//     else
//         resultado = true

//     return resultado

// }


// function showToast(message, color)
// {
//     document.getElementById("toastText").innerText=message;
//     let toastElement  = document.getElementById('toast')

//     toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

//     let toast = new bootstrap.Toast(toastElement)
//     toast.show()
// }




