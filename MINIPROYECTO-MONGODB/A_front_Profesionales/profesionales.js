class Alumnos {
    first_name;
    last_name;
    income_year;
    student_id

    constructor(first_name, last_name, income_year, student_id) {
            this.first_name   = first_name;
            this.last_name    = last_name;
            this.income_year  = income_year;
            this.student_id   = student_id;
           
    }
}



function getAlumnos() {

    let newAlumno   = "";


    let id = document.getElementById("id").value;
    let url;

    if(id){

        url = `http://localhost:3000/alumnos/${id}`;
        console.log(url);

    } else {

        url =`http://localhost:3000/alumnos`

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

                    newAlumno += ` <h4 class = "h4_datRes">Alumno</h4>

                                    <ul>
                                        <li>First Name:     ${result[i].first_name}</li>
                                        <li>Last Name:      ${result[i].last_name}</li>
                                        <li>Income Year:    ${result[i].income_year}</li>
                                        <li>Student ID:     ${result[i].student_id}</li>
                                        <br>
                                    </ul> `


                }
                                                 
            } else {
    
                    console.log("Voy a imprimir un solo elemento")
                    console.log(result);
                    
                    newAlumno = ` <h4 class = "h4_datRes">Alumno</h4> 

                                    <ul>
                                        <li>First Name:     ${result.first_name}</li>
                                        <li>Last Name:      ${result.last_name}</li>
                                        <li>Income Year:    ${result.income_year}</li>
                                        <li>Student ID:     ${result.student_id}</li>
                                        <br>
                                    </ul> `

                                             
            }
                       
            console.log(newAlumno);
            document.getElementById('displayJson').innerHTML = newAlumno;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })


}


function postAlumnos() {

    console.log("Entro en POST")

    let newAlumno = new Alumnos(document.getElementById("first_name").value,
                                document.getElementById("last_name").value,
                                document.getElementById("income_year").value)
                               
                           
                            
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


function putAlumnos() {

    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/alumnos/?id=${id}`
  
    console.log("Indice del PUT");
      
  
    let auxPut = 
                    {first_name:      document.getElementById("first_name").value,
                     last_name:       document.getElementById("last_name").value,
                     student_id:      document.getElementById("id").value
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

            showToast("Usuario actualizado correctamente", "bg-success" )
                // console.log(newAlumno)
                // console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })

}


function deleteAlumnos() {

    
    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/alumnos/?id=${id}`

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

            showToast("Alumno eliminado correctamente", "bg-success" )
         
                console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })


}



function validar(newAlumno) {

    let resultado = false

    if (newAlumno.first_name == "" || newAlumno.first_name == "null") {

        showToast("AVISO: Campo First Name no informado", "bg-warning")

    } 
    else if (newAlumno.last_name == "" || newAlumno.last_name == "null") {

        showToast("AVISO: Campo Last Name no informado", "bg-warning")

    // }
    // else if (newAlumno.income_year == "" || newAlumno.income_year == "null") {
    
    //     showToast("AVISO: Campo Income Year no informado", "bg-warning")   
    
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




