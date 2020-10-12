//import {Usuario} from "../Clases/Usuarios"
//import {Reviews} from '..Clases/Reviews.js'
import {cargarReviews} from './gestionarReviews'

class Usuario{
    constructor(userName,userPassword,userFirstName,userLastName,userRole,userStatus,userEmail){
    this.userName= userName
    this.userPassword=userPassword
    this.userFirstName=userFirstName
    this.userLastName=userLastName
    this.userRole=userRole
    this.userStatus=userStatus
    this.userEmail=userEmail
    }
}

// Definicion de Array de Roles para los Usuarios
let Roles=[
    {RoleId:"1", RoleName: "Admin"},
    {RoleId:"2", RoleName:"Estudiante"},
    {RoleID:"3", RoleName:"Profesor"}
]

// Definicion de Array de Estados Posibles para los Usuarios

let EstadosUser=[
    {estadoId:"1", estadoName: "Activo"},
    {estadoId:"2", estadoName:"Inactivo"},
]

//Creacion de Usuarios para guardar en LocalStorage

let users=[];
let adminUserB = new Usuario("belenadmin","12345","Belen","Neme","1","1","belen@gmail.com");
//adminUserB.userRole=Roles[0]

let regularUserB = new Usuario("BelenUser","654321","Belen","Neme","2","2","b@gmail.com");
//regularUserB.userRole=Roles[1]
users.push(adminUserB,regularUserB);

//Manejo del LocalStorage
localStorage.clear();
localStorage.setItem("users",JSON.stringify(users));

//Validar Acceso de los Usuarios

function validarAcceso(){

    let us= document.getElementById("inputUser").value
    console.log(us)
    let pass= document.getElementById("inputPassword").value

    //Traigo del LocalStorage el Array de Usuarios
    let usuarios= localStorage.getItem("users",users);
    usuarios = JSON.parse(usuarios);

    let u = usuarios.find(function(i){
        return i.userName===us
    })
    //console.log(u);
    if(u){
        if(u.userPassword===pass){
            if(u.userRole==="1"){
                //MOSTRAR PAGINA DE ADMINISTRADOR
                window.location.replace("file:///C:/Users/belen/OneDrive/Documentos/RollingCode/3I/CursonProject/adminHome.html")
                //alert("ERES UN ADMINISTRADOR")
            }else{
                //alert("NO ERES UN ADMINISTRADOR")
                // MOSTRAR BOTON PARA CARGAR REVIEWS Y ACTUALIZAR LO Q SERIA EL PERFIL
                let btnAddReviews= document.createElement("button")
                btnAddReviews.innerText="Nueva Review"
                btnAddReviews.className="btn-review"
                mainRevContainer.appendChild(btnAddReviews)
                btnAddReviews.addEventListener("click",function(e){
                    let fecReview= getFecha();
                    console.log(fecReview)
                    let formReview= document.createElement("div");
                    formReview.className="form-review"
                    let formRevContent= 
                    `<form autocomplete="off">
                    <div class="row mt-3">
                        <div class="col-md-5">
                            <div class="form-group d-flex justify-content-center">
                                <label class="color-rosa">Nombre:</label>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                                <input type="text" id="reviewUser" placeholder="Ingresa tu nombre" class="input-review">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="form-group d-flex justify-content-center">
                                <label class="color-rosa">Fecha:</label>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                                <input type="date" id="reviewDate" placeholder="Fecha" class="input-review" value="${fecReview}" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group d-flex justify-content-center">
                                <label class="color-rosa">Nombre del Curso:</label>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                                <input type="text" id="reviewCurso" placeholder="Curso" class="input-review">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="form-group d-flex justify-content-center">
                                <label class="color-rosa">Comentario:</label>
                            </div>
                            <div class="form-group d-flex justify-content-center">
                                <input type="text" id="reviewComentario" placeholder="Ingresa aqui tu comentario" class="input-review">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                       <div class="col-md-5">
                            <div class="form-group d-flex justify-content-center">
                                <label class="color-rosa">Calificacion:</label>
                            </div>
                            <div class="form-check-inline d-flex justify-content-center">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="calificacion" value="5" checked>
                                <label class="form-check-label" for="exampleRadios1">
                                5
                                </label>
                            </div>
                            <div class="form-check-inline d-flex justify-content-center">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="calificacion" value="4">
                                <label class="form-check-label" for="exampleRadios1">
                                4
                                </label>
                            </div>
                            <div class="form-check-inline d-flex justify-content-center">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="calificacion" value="3">
                                <label class="form-check-label" for="exampleRadios1">
                                3
                                </label>
                            </div>
                            <div class="form-check-inline d-flex justify-content-center">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="calificacion" value="2">
                                <label class="form-check-label" for="exampleRadios1">
                                2
                                </label>
                            </div>
                            <div class="form-check-inline d-flex justify-content-center">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="calificacion" value="1">
                                <label class="form-check-label" for="exampleRadios1">
                                1
                                </label>
                            </div>
                        </div>
                    </div> 
                    <div class="mt-2 mb-3 d-flex justify-content-around">
                        <button type="button" class="btn-review-form" onclick="ocultarReview()">Cancelar</button>
                        <button type="button" class="btn-review-form" onclick="validarReview()">Enviar</button>
                        <button type="button" class="btn-review-form" onclick="limpiarFormReview()">Resetear</button>
                    </div>
                    </form>`
                    formReview.innerHTML=formRevContent;
                    mainRevContainer.appendChild(formReview);
                    
                })

            }
        }else{
            alert("Usuario o contraseña invalido")
        }
    }else{
        alert("No te encuentras registrado en CursOn")
    }
}

function validarReview(){
    let rUser = document.getElementById("reviewUser")
    let rCurso = document.getElementById("reviewCurso")
    let rCalificacion = document.getElementById("calificacion")
    let rComentario = document.getElementById("reviewComentario")
    let rFecha= document.getElementById("reviewDate")

    if (rUser.value == "") {
        rUser.className = "input-review valida";
    } else {
        rUser.className = "input-review ok";
    }
    if (rCurso.value == "") {
        rCurso.className = "input-review valida";
    } else {
        rCurso.className = "input-review ok";
    }
    if (rComentario.value == "") {
        rComentario.className = "input-review valida";
    } else {
        rComentario.className = "input-review ok";
    }

    if (
        rCurso.value == "" ||
        rComentario.value == "" ||
        rUser.value == ""
        //rCalificacion.value==""
    ) {
        return;
    }
    
     //GUARDAR LA REVIEW EN EL ARRAY DE REVIEWS DEL LOCALSTORAGE
     let rDB= JSON.parse(localStorage.getItem("reviews"))
     let newReview = new Reviews(rCurso.value,rUser.value,rComentario.value,rFecha.value,rCalificacion.value);
     rDB.push(newReview);
     localStorage.setItem("reviews",JSON.stringify(rDB))
     limpiarFormReview();
     alert("La review fue guardada en el Local Storage");
     //LLAMAR A LA FUNCION PARA ACTUALIZAR EL ARRAYS DE REVIEWS
     cargarReviews();
}

const limpiarFormReview = () => {
    let rUser = document.getElementById("reviewUser")
    let rCurso = document.getElementById("reviewCurso")
    let rCalificacion = document.getElementById("calificacion")
    let rComentario = document.getElementById("reviewComentario")
    //let rFecha= document.getElementById("reviewDate")

    rUser.value = "";
    rComentario.value = "";
    rCurso.value = "";
    rCalificacion.value="";
  
    rCurso.className = "input-review";
    rUser.className = "input-review";
    rComentario.className = "input-review";
};

function ocultarReview(){
    let formR= document.getElementsByClassName("form-review");
    formR.className="oultarForm"
    alert("Me hiciste click")
}

function getFecha(){
    let dia= new Date().getDate()
    let mes= new Date().getMonth()+1
    let anio= new Date().getFullYear()

    let fecha= `${anio}-${mes}-${dia}`
    return fecha;
}

function actualizarReviews(){
    let reviewsDB= JSON.parse(localStorage.getItem("reviews"));
    reviewsDB.sort(function(a,b){
        return a.calificacionCurso - b.calificacionCurso
    });
    console.log(reviewsDB)
    let rev= JSON.stringify(reviewsDB)
    localStorage.setItem("reviews",rev)
    //DEBERIA CARGAR DE NUEVO LA PAGINA PARA QUE SE CARGUEN LAS NUEVAS REVIEWS
    //location.reload();
}



