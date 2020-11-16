class Usuario{
    constructor(userName,userPassword,userFirstName,userLastName,userRole,userStatus,userEmail,userCursos=[],userFavoritos=[]){
    this.userName= userName
    this.userPassword=userPassword
    this.userFirstName=userFirstName
    this.userLastName=userLastName
    this.userRole=userRole
    this.userStatus=userStatus
    this.userEmail=userEmail
    this.userCursos= userCursos
    this.userFavoritos= userFavoritos
    }
}

// Definicion de Array de Roles para los Usuarios
let Roles=[
    {RoleId:"1", RoleName: "Admin"},
    {RoleId:"2", RoleName:"Estudiante"},
    {RoleID:"3", RoleName:"Profesor"}
]

let userArray = (localStorage.getItem("users")) || [];
if(userArray.length>0){
    users = JSON.parse(userArray)
}else{
    users = []
    let adminUser = new Usuario("admintest","12345","Admin","Test","1","1","adminTest@gmail.com");
    let regularUser = new Usuario("usertest","12345","User","Test","2","1","userTest@gmail.com");
    users.push(adminUser,regularUser)
    localStorage.setItem("users",JSON.stringify(users))
}

let userLogueados = localStorage.getItem("usuariosLogueados")||[];
inicioLanding();
function inicioLanding(){
    if(userLogueados.length!=0){
        menuUserOn()
        publicarCursoOn()
        agregarReviewOn()
    }
}

function logOut(){
    if(userLogueados.length!=0){
        userLogueados= []
        localStorage.setItem("usuariosLogueados",userLogueados)
        console.log(userLogueados.length)
        window.location="index.html"
        inicioLanding()
    }
}

function validarAcceso(){
    let us= document.getElementById("inputUser").value.toLowerCase()
    let pass= document.getElementById("inputPassword").value
    let usuarios= localStorage.getItem("users",users);
    usuarios = JSON.parse(usuarios);
    let u = usuarios.find(function(i){
        return i.userName===us
    })
    if(u){
        if(u.userPassword===pass){
            userLogueados.push(u);
            localStorage.setItem("usuariosLogueados",JSON.stringify(userLogueados))
            if(u.userRole==="1"){
                //MOSTRAR PAGINA DE ADMINISTRADOR
                window.location="adminHome.html"
            }else{
                publicarCursoOn()
                agregarReviewOn()
                menuUserOn()
            }
        }else{
            alert("Usuario o contraseña invalido")
        }
    }else{
        alert("No te encuentras registrado en CursOn")
    }
}

function publicarCursoOn(){
    //BORRAR BOTON LOGIN y MOSTRAR BOTON DE PUBLiCAR CURSO
    let publicarLogIn = document.getElementById('publicarLogIn')
    botonesPublicar.removeChild(publicarLogIn)
   //Haciendo visible el Boton para Publicar Curso
    document.getElementById('enviarSolicitud').style = 'display:inline-block'
}
function agregarReviewOn(){
    // MOSTRAR BOTON PARA CARGAR REVIEWS 
    let btnAddReviews= document.createElement("button")
    btnAddReviews.innerText="Nueva Review"
    btnAddReviews.className="btn-review"
    mainRevContainer.appendChild(btnAddReviews)
    btnAddReviews.addEventListener("click",function(e){
        let numOpenForm= document.getElementsByClassName("form-review")
        if(numOpenForm.length>=1){
            return "";
        }else{
        let fecReview= getFecha();
        let userLog= getUserLogueado();
        console.log(userLog)
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
                    <input type="text" id="reviewUser"  class="input-review" value="${userLog}">
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
                    <input type="text" id="reviewCurso" maxlength="40" placeholder="Curso" class="input-review">
                </div>
            </div>
            <div class="col-md-5">
                <div class="form-group d-flex justify-content-center">
                    <label class="color-rosa">Comentario:</label>
                </div>
                <div class="form-group d-flex justify-content-center">
                    <textarea id="reviewComentario" maxlength="80" placeholder="Ingresa aqui tu comentario" class="form-control"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
           <div class="col-md-5">
                <div class="form-group d-flex justify-content-center">
                    <label class="color-rosa">Calificacion:</label>
                </div>
                <div class="form-check-inline d-flex justify-content-center">
                    <input class="form-check-input" type="radio" name="calificacion" id="calificacion" value="5" checked>
                    <label class="form-check-label" for="exampleRadios1">
                    5
                    </label>
                </div>
                <div class="form-check-inline d-flex justify-content-center">
                    <input class="form-check-input" type="radio" name="calificacion" id="calificacion" value="4">
                    <label class="form-check-label" for="exampleRadios1">
                    4
                    </label>
                </div>
                <div class="form-check-inline d-flex justify-content-center">
                    <input class="form-check-input" type="radio" name="calificacion" id="calificacion" value="3">
                    <label class="form-check-label" for="exampleRadios1">
                    3
                    </label>
                </div>
                <div class="form-check-inline d-flex justify-content-center">
                    <input class="form-check-input" type="radio" name="calificacion" id="calificacion" value="2">
                    <label class="form-check-label" for="exampleRadios1">
                    2
                    </label>
                </div>
                <div class="form-check-inline d-flex justify-content-center">
                    <input class="form-check-input" type="radio" name="calificacion" id="calificacion" value="1">
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
        }
    })
}

function menuUserOn(){
    let btnLogin= document.getElementById("LogInOpcion");
    let btnSingUp= document.getElementById("SignUpOpcion")
    ulNav.removeChild(btnLogin)
    ulNav.removeChild(btnSingUp)
    document.getElementById('menuUser').style = 'display:inline-block'
}

function validarReview(){
    let rUser = document.getElementById("reviewUser")
    let rCurso = document.getElementById("reviewCurso")
    let rCalificacion = document.querySelector('input[name=calificacion]:checked');
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
    ){
        return;
    }
     let rDB= JSON.parse(localStorage.getItem("reviews"))
     let newReview = new Reviews(rCurso.value,rUser.value,rComentario.value,rFecha.value,rCalificacion.value);
     rDB.push(newReview);
     localStorage.setItem("reviews",JSON.stringify(rDB))
     limpiarFormReview();
     alert("La review fue guardada en el Local Storage");
     ocultarReview()
     cargarReviews();
}

const limpiarFormReview = () => {
    let rUser = document.getElementById("reviewUser")
    let rCurso = document.getElementById("reviewCurso")
    let rCalificacion = document.getElementById("calificacion")
    let rComentario = document.getElementById("reviewComentario")

    rUser.value = "";
    rComentario.value = "";
    rCurso.value = "";
    rCalificacion.value="";
  
    rCurso.className = "input-review";
    rUser.className = "input-review";
    rComentario.className = "input-review";
};

function ocultarReview(){
    let cont= document.getElementById("mainRevContainer");
    let formR= document.getElementsByClassName("form-review");
    cont.removeChild(formR[0]);
}

function getFecha(){
    let dia= new Date().getDate()
    let mes= new Date().getMonth()+1
    let anio= new Date().getFullYear()

    let fecha= `${anio}-${mes}-${dia}`
    return fecha;
}

function getUserLogueado(){
    let userNombre;
    let userLogDB= JSON.parse(localStorage.getItem("usuariosLogueados"));
    userLogDB.map(function(u){
        return userNombre= `${u.userFirstName}${" "}${u.userLastName}` 
    })
    return userNombre;
}

//Reviews Section 
class Reviews{
    constructor(nombreCurso,nombreUser,comentario,fecha,calificacionCurso){
        this.nombreCurso= nombreCurso
        this.nombreUser= nombreUser
        this.comentario= comentario
        this.fecha=fecha
        this.calificacionCurso=calificacionCurso
    }
}

//Cargar array de Reviews en LocalStorage
let reviewsArreglo = localStorage.getItem("reviews") || []
if(reviewsArreglo.length>0){
    reviews = JSON.parse(reviewsArreglo)
}else{
    reviews = []
    let rev1= new Reviews("Introducción al diseño UX","Florencia Pistan","Es un curso completo con informacion util para proyectos","2020-10-06",5);
    let rev2= new Reviews("Caligrafía inglesa de la A a la Z","Gabriel Moreira","Me parecio un curso super interesante y con informacion muy completa","2020-09-06",4);
    let rev3= new Reviews("Desarrollo Web Responsive HTML y CSS","Rodrigo","Estuvo muy bueno y el material para cada tema esta muy completo","2020-08-05",3);
    reviews.push(rev1,rev2,rev3)
    localStorage.setItem("reviews",JSON.stringify(reviews))
}
cargarReviews();
function cargarReviews(){
    ordenarReviews();
    let reviewsLS = localStorage.getItem("reviews",reviews)
    let reviewsDB = JSON.parse(reviewsLS)
    reviewContainer.innerHTML=""
    for(let i=0 ; i< 6 ; i++){
        let reviewContainer= document.getElementById("reviewContainer")
        let estrellas="";
        if(reviewsDB[i].calificacionCurso==1){
            estrellas= `<i class="fas fa-star fa-start-color"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>`
        }else if(reviewsDB[i].calificacionCurso==2){
            estrellas= `<i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>`
        }else if(reviewsDB[i].calificacionCurso==3){
            estrellas= `<i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>`
        }else if(reviewsDB[i].calificacionCurso==4){
            estrellas= `<i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="far fa-star fa-start-color-secondary"></i>`
        }else if(reviewsDB[i].calificacionCurso==5){
            estrellas= `<i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>
                        <i class="fas fa-star fa-start-color"></i>`
        }
        let reviewContent=`
        <div class="col-md-4 mt-3" id="contReview">
            <div class="card card-multicolor">
                <div class="card-body card-multicolor py-1 px-3">
                    <h6 class="card-title">${reviewsDB[i].nombreCurso}</h6>
                    <p class="card-text mb-2">${reviewsDB[i].comentario}</p>
                    <span class="float-left color-rosa pr-2"><i class="fas fa-user"></i></span><span class="float-left"> ${reviewsDB[i].nombreUser}</span>
                    <span class="float-right">${estrellas}</span><br>
                    <span class="float-right color-gris">${reviewsDB[i].fecha}</span>
                </div>
            </div>
        </div>`
        reviewContainer.innerHTML+=reviewContent
    }
}

function ordenarReviews(){
    let reviewsDB= JSON.parse(localStorage.getItem("reviews")) || []
    reviewsDB.sort(function(a,b){
        return new Date(b.fecha) - new Date (a.fecha)
    });
    //console.log(reviewsDB)
    let rev= JSON.stringify(reviewsDB)
    localStorage.setItem("reviews",rev)
}
