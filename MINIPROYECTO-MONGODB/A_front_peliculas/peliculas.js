class Notas {
    student_id;
    subject_id;
    date;
    mark

    constructor(student_id, subject_id, date, mark) {
            this.student_id     = student_id;
            this.subject_id     = subject_id;
            this.date           = date;
            this.mark           = mark;     
    }
}



function getNotas() {

    let newMark   = "";


    let id = document.getElementById("id").value;
    let url;


        url = `http://localhost:3000/notas/${id}`;


        let param =
        {
            headers: {"Content-type": "application/json; charset = UTF-8"},
            method: "GET"
        }

        console.log(url);
        console.log(param);


        fetch(url, param)

        .then(function(data) {

            return data.json()

        })  

        .then(function(result) {

            console.log("Entro por getElement")
            console.log(result);
            console.log(result.mark);

            if (result.length > 0) {

                console.log("Entro por mostrar multiples elementos")
                    
                for (let i = 0; i < result.length; i++) {

                    console.log("Paso por For" + i)

                    newMark += ` <h4 class = "h4_datRes">NOTA</h4>

                                    <ul>
                                        <li>Student:        ${result[i].student_id}</li>
                                        <li>Subject:        ${result[i].subject_id}</li>
                                        <li>Date:           ${result[i].date}</li>
                                        <li>Mark:           ${result[i].mark}</li>
                                        <br>
                                    </ul> `
                }
                                                 
            } else {
    
                    console.log("Voy a imprimir un solo elemento")
                    console.log(result);
                    
                    newMark = ` <h4 class = "h4_datRes">NOTA</h4>

                                    <ul>
                                        <li>Student:      ${result.student_id}</li>
                                        <li>Subject:      ${result.subject_id}</li>
                                        <li>Date:         ${result.date}</li>
                                        <li>Mark:         ${result.mark}</li>
                                        <br>
                                    </ul> `

                                             
            }
                       
            console.log(newMark);
            document.getElementById('displayJson').innerHTML = newMark;
    
                
            })
        
        .catch(err =>{
            console.log(err);
        })

}


function postNotas() {

    console.log("Entro en POST")

    let newMark = new Notas(document.getElementById("id").value,
                            document.getElementById("subject_id").value,
                            document.getElementById("date").value,
                            document.getElementById("mark").value)
                               
                           
                            
     console.log(newMark)      
        
    const url = "http://localhost:3000/notas";

    if (validar(newMark)) {
        
        let param = 
            {
                headers: {"Content-type":   "application/json; charset= UTF-8"},
                body: JSON.stringify(newMark),
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
         
            showToast("Nota registrada correctamente", "bg-success" )
                console.log(newMark)
                console.log(result)
                // form-profesionales.reset();
        })

        .catch(function(error) {
            console.log(error)
        })

    }
}


function putNotas() {

    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/notas/?id=${id}`
  
    console.log("Indice del PUT");
      
  
    let auxPut = 
                    {student_id:      document.getElementById("id").value,
                     subject_id:      document.getElementById("subject_id").value,
                     date:            document.getElementById("date").value,
                     mark:            document.getElementById("mark").value
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

            showToast("Usuario actualizado correctamente", "bg-success")
                // console.log(newAlumno)
                // console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })

}


function deleteNotas() {

    
    let id = document.getElementById("id").value;

    const url = `http://localhost:3000/notas/?id=${id}`

    console.log("Indice del DELETE");
    console.log(id)

               
    let auxDelete =  {id:           document.getElementById("id").value,
                      subject_id:   document.getElementById("subject_id").value }

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

            showToast("Notas eliminadas correctamente", "bg-success" )
         
                console.log(result)
        })

        .catch(function(error) {
            console.log(error)
        })


}



function validar(newMark) {

    let resultado = false

    if (newMark.student_id == "" || newMark.student_id == "null") {

        showToast("AVISO: Campo First Name no informado", "bg-warning")

    } 
    else if (newMark.mark == "" || newMark.mark == "null") {

        showToast("AVISO: Campo Mark no informado", "bg-warning")

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




