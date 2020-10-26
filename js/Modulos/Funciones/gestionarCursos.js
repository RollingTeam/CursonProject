class Cursos{
    constructor(idCurso,nombreCurso,descripcionCurso,categoriaCurso,nivelCurso,cupoCurso,duracionCurso,imagenCurso,estadoCurso=1,contactoCurso){
        this.idCurso=idCurso
        this.nombreCurso= nombreCurso
        this.descripcionCurso= descripcionCurso
        this.categoriaCurso=categoriaCurso
        this.nivelCurso=nivelCurso
        this.cupoCurso=cupoCurso
        this.duracionCurso=duracionCurso
        this.imagenCurso=imagenCurso
        this.estadoCurso=estadoCurso
        this.contactoCurso=contactoCurso
    }
}

let solicitudes = JSON.parse(localStorage.getItem('Solicitudes')) || [];
const cuerpoTabla = document.getElementById('cuerpoTabla')

class Solicitud{
    constructor (idSolicitud,autor, estado = 'Pendiente', descripcionCurso){
        this.idSolicitud = idSolicitud
        this.autor = autor
        this.estado = estado
        this.descripcionCurso = descripcionCurso
    }
};


// ESTADO DEL CURSO
// 1 == Activo
// 2 == Pendiente de Aprobacion
// 3 == Inactivo

let cursosArray = localStorage.getItem("cursos") || [];

if(cursosArray.length>0){
    cursos = JSON.parse(cursosArray)
}else{
    cursos = []
    let curso1 = new Cursos(1,"Introducción al diseño UX","Descubrirás la importancia de la investigación UX, y lo que puede salir mal si no lo haces correctamente. Aprenderás a realizar entrevistas, grupos de discusión y encuestas. Conviértete en un experto en resolver problemas, explorando técnicas como el mapeo de afinidad. Luego, aprenderás todo sobre la creación de personajes y cómo crear un mapa de viaje.Aprenderás a medir el UX y a presentar tus hallazgos de forma creativa a un cliente, así como a mostrar la importancia del diseño UX dentro de una empresa. Crearás tu propio caso de estudio desde cero, documentando todo tu proceso de diseño UX y mostrando tu trabajo para tu porfolio, y terminarás el curso con los consejos de Ethan a la hora de hacer entrevistas para puestos de UX.","Tecnologia","Avanzado","30","24","https://cdn.domestika.org/c_fill,dpr_1.0,h_116,t_base_params.format_jpg,w_206/v1593186407/course-covers/000/001/235/1235-original.jpg?1593186407",1,"https://www.domestika.org");
    let curso2 = new Cursos(2,"Caligrafía inglesa de la A a la Z","Aprende a trabajar la caligrafía Copperplate y recupera el valor de la letra hecha a mano.Cada letra refleja algo en concreto y expresa su propio carácter, esto es lo que Bego Viñuela —calígrafa y fundadora del taller Caligrafía Bilbao— descubrió al adentrarse en el mundo de la caligrafía.En este curso aprenderás a dominar y entender la caligrafía inglesa sin conocimientos previos. Poco a poco aprenderás a utilizar las herramientas y trazarás minúsculas y mayúsculas, hasta completar un alfabeto completo de Copperplate.","Arte","Principiante","20","20","https://lh3.googleusercontent.com/proxy/Xj5R9spmnhiO-73E40RpHVFvxT46bEXdA_aO6iONXV0BZQ_8pEu1o4bGTaE-vp6GcmAREjq8iSQ4D7JRFrKhkwnstsIfmQ5TDWQnJUDPWeHP5c75UXlsLrJSLFP_wKvrqb1InEwIfPI7FFNwE3GEWgQduSHv5qNc-UgJ_x44gJ8",1,"https://www.platzi.com");
    let curso3 = new Cursos(3,"Introducción al Desarrollo Web Responsive con HTML y CSS","Este curso parte desde un conocimiento cero de HTML y CSS. Incluye las etiquetas fundamentales de HTML y propiedades de CSS tipográficas, herramientas de layout como Floats o Position, fondos, bordes, esquinas redondeadas, sombras, Web Fonts y herramientas fundamentales de Desarrollo Responsive como las Media Queries.","Tecnologia","Intermedio",15,30,"https://cuatropf.com/wp-content/uploads/2018/07/desarrollo-web-300x300.png",1,"https://www.domestika.org");
    cursos.push(curso1,curso2,curso3)
    localStorage.setItem("cursos",JSON.stringify(cursos))
}

let identificadorCurso;
function agregarCurso(){

let nombreCurso= document.getElementById("nombreCursoInput");
let descripCurso = document.getElementById("contenidoCursoInput");
let categoriaCurso= document.getElementById("listaCategorias");
let nivelCurso= document.getElementById("dificultadCursoInput")
let cupoCurso= document.getElementById("cuposCursoInput")
let duracionCurso= document.getElementById("duracionCursoInput");
let imagenCurso= document.getElementById("imagenCursoInput");
let contactoCurso = document.getElementById("contactoCursoInput")

  //DEBERIAMOS AGREGAR AQUI LA VALIDACION PARA CADA CAMPO DEL FORM

  if (
    nombreCurso.value == "" ||
    descripCurso.value == "" ||
    categoriaCurso.value == ""||
    nivelCurso.value==""||
    cupoCurso.value==""||
    duracionCurso.value==""||
    imagenCurso.value==""||
    contactoCurso.value==""
) {
<<<<<<< HEAD
    return ""
}

  cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  //Manejar de Forma Automática la asignacion del ID
  if (cursos.length < 1) {
    identificadorCurso = 1;
 }else{
    let ultimoCurso = cursos[cursos.length-1]
    identificadorCurso= ultimoCurso.idCurso +1 
 }

 let newCurso = new Cursos(identificadorCurso,nombreCurso.value,descripCurso.value,categoriaCurso.value,nivelCurso.value,cupoCurso.value,duracionCurso.value,imagenCurso.value,1,contactoCurso.value)
 cursos.push(newCurso);
 localStorage.setItem("cursos",JSON.stringify(cursos))
 limpiarFormCurso();
 alert("El curso fue guardado en el Local Storage");
cargarCursos();
}

function limpiarFormCurso(){
    let nombreCurso= document.getElementById("nombreCursoInput");
    let descripCurso = document.getElementById("contenidoCursoInput");
    let categoriaCurso= document.getElementById("categoriaCursoInput");
    let nivelCurso= document.getElementById("dificultadCursoInput")
    let cupoCurso= document.getElementById("cuposCursoInput")
    let duracionCurso= document.getElementById("duracionCursoInput");
    let imagenCurso= document.getElementById("imagenCursoInput");
    let contactoCurso = document.getElementById("contactoCursoInpt")

=======
    alert("Debes completar todos los Campos");
}else{
    cursos = JSON.parse(localStorage.getItem("cursos")) || [] 
    //Manejar de Forma Automática la asignacion del ID
    if(cursos.length < 1){
        identificadorCurso = 1;
    }else{
        let ultimoCurso = cursos[cursos.length-1]
        identificadorCurso= ultimoCurso.idCurso +1 
    }
    let newCurso = new Cursos(identificadorCurso,nombreCurso.value,descripCurso.value,categoriaCurso.value,nivelCurso.value,cupoCurso.value,duracionCurso.value,imagenCurso.value,1,contactoCurso.value)
    cursos.push(newCurso);
    localStorage.setItem("cursos",JSON.stringify(cursos))
>>>>>>> 37771c614309776e7772425cc71c699707906872
    nombreCurso.value = "";
    descripCurso.value = "";
    categoriaCurso.value = "";
    nivelCurso.value="";
    cupoCurso.value="";
    duracionCurso.value="";
    imagenCurso.value="";
    contactoCurso.value="";
    alert("El nuevo curso fue guardado");
    cargarCursos();
    }
}

cargarSolicitudes()
cargarCursos();
function cargarCursos(){
    cursos = localStorage.getItem("cursos") || []
    let cursosDB;
    if(cursos.length >0){
        cursosDB = JSON.parse(cursos)
    }else{
        cursosDB=[]
    }
    cursosContainer.innerHTML=""
    for(let i=0 ; i< cursosDB.length ; i++){
        if(cursosDB[i].estadoCurso==1){
            while(i<6){
                let badgeColor
                if(cursosDB[i].nivelCurso=="Principiante"){
                    badgeColor= `<span class="badge badge-success" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`
                }else if(cursosDB[i].nivelCurso=="Intermedio"){
                    badgeColor= `<span class="badge badge-warning" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`
                }else{
                    badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`
                }

                let cursoContenido= `<div class="col-12 col-md-6 col-lg-4">
                <div class="card card-curso m-2">
                    <img src=${cursosDB[i].imagenCurso} class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><strong>${cursosDB[i].nombreCurso}</strong></h5>
                        ${badgeColor}
                        <p class="card-text">${cursosDB[i].descripcionCurso}</p>
                        <button onclick="mostrarModalCurso(${cursosDB[i].idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                        Ver Más
                        </button>
                    </div>
                </div>
                </div>`
                cursosContainer.innerHTML+=cursoContenido
                i+=1
            }
        }
    }
}

function verPrincipales(){
    cargarCursos()
    let btnMenos= document.getElementById("verMenos")
    btnMenos.style = 'display:none'
    let btnMas = document.getElementById("verTodosCursos")
    btnMas.style = 'display:inline-block'
}

function mostrarTodo(){
    console.log("Vine por mostrarTodo")
    cursos = localStorage.getItem("cursos")
    let cursosDB = JSON.parse(cursos)
    cursosContainer.innerHTML=""
   for(let i=0 ; i< cursosDB.length ; i++){
       if(cursosDB[i].estadoCurso==1){
            let badgeColor
            if(cursosDB[i].nivelCurso=="Principiante"){
                badgeColor= `<span class="badge badge-success" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`
            }else if(cursosDB[i].nivelCurso=="Intermedio"){
                badgeColor= `<span class="badge badge-warning" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`
            }else{
                badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`
            }

            let cursoContenido= `<div class="col-12 col-md-6 col-lg-4">
            <div class="card card-curso m-2">
            <img src=${destacados[i].imagenCurso} class="card-img-top img-fluid" alt="...">                <div class="card-body">
                    <h5 class="card-title"><strong>${cursosDB[i].nombreCurso}</strong></h5>
                    ${badgeColor}
                    <p class="card-text">${cursosDB[i].descripcionCurso}</p>
                    <button onclick="mostrarModalCurso(${cursosDB[i].idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                    Ver Más
                    </button>
                </div>
            </div>
            </div>`
            cursosContainer.innerHTML+=cursoContenido
       }
   }
   let btnMas = document.getElementById("verTodosCursos")
   btnMas.style = 'display:none'
  let btnMenos= document.getElementById("verMenos")
  btnMenos.style = 'display:inline-block'
  btnMenos.className="btn btn-primary-curso"
}

function mostrarModalCurso(idCurs) {
  let cursosLS = JSON.parse(localStorage.getItem("cursos"));
  let cursoDB = cursosLS.find(function (cur) {
    return cur.idCurso === idCurs;
  });

  let modalForm = document.getElementById("modal-form-content");
  let contentModalForm = `
    <div class="modal-header p-1">
        <div class="nombreCurso">
            <h5 class="modal-title p-2" id="staticBackdropLabel">${cursoDB.nombreCurso}</h5>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="white-text">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <img src=${cursoDB.imagenCurso} class="card-img-top img-fluid" alt="...">
        <span class="badge badge-warning categorias">${cursoDB.categoriaCurso}</span>
        <span class="badge badge-pill badge-info cupos">${cursoDB.cupoCurso} Lugares Disponibles</span>
        <div class="text-center">
            <p>${cursoDB.descripcionCurso}</p>
        </div>
        <div class="text-center">Contacto:<a href="link">${cursoDB.contactoCurso}</a></div>
    </div>
    <div class="modal-footer justify-content-center">
    <a href="" type="button" class="btn btn-primary-curso">Inscribirse<i class="far fa-user ml-1 white-text"></i></a>
    <a type="button" class="btn btn-primary-curso">Agregar a mis Favoritos<i class="far fa-heart ml-1 white-text"></i></a>
</div> `;
modalForm.innerHTML = contentModalForm;
}

function validarAddCurso(idCurso){
    let userLog = JSON.parse(localStorage.getItem("usuariosLogueados"))||[]
    if(userLog.length<1){
        alert("Debes iniciar sesion")
        //PERMITIR QUE HAGA EL LOGUEO (O MOSTRAMOS EL LOGIN O MOSTRAMOS ALERT DE QUE NECESITA INICIAR SESION)
    }else{
        cursos= JSON.parse(localStorage.getItem("cursos"))
        let curso = cursos.find(function(cur){
            return cur.idCurso===idCurso
        })
        let users = JSON.parse(localStorage.getItem("users"))
        let us= users.find(function(u){
            return userLog[0].userName == u.userName
        })
        let existCurso= us.userCursos.find(function(cur){
            return cur.idCurso===curso.idCurso
        })
        if(!existCurso){
        us.userCursos.push(curso)
        localStorage.setItem("users",JSON.stringify(users))
        }else{
            alert("El curso ya fue agregado a Mis Cursos")
        }
    }
}

function validarAddFav(idCurso){
    let userLog = JSON.parse(localStorage.getItem("usuariosLogueados"))||[]
    console.log(userLog.length)
    if(userLog==[]){
        alert("Debes iniciar sesion")
        //PERMITIR QUE HAGA EL LOGUEO (O MOSTRAMOS EL LOGIN O MOSTRAMOS ALERT DE QUE NECESITA INICIAR SESION)
    }else{
        cursos= JSON.parse(localStorage.getItem("cursos"))
        let curso = cursos.find(function(cur){
            return cur.idCurso===idCurso
        })
        let users = JSON.parse(localStorage.getItem("users"))
        let us= users.find(function(u){
            return userLog[0].userName == u.userName
        })
        let existCurso= us.userFavoritos.find(function(fav){
            return fav.idCurso===curso.idCurso
        })
        if(!existCurso){
        us.userFavoritos.push(curso)
        localStorage.setItem("users",JSON.stringify(users))
        }else{
            alert("El curso ya fue agregado a Favoritos")
        }
    }
}



//PUBLICAR CURSOS

function crearSolicitud (event) {
  event.preventDefault()
  let identificadorSolicitud;
  if (solicitudes.length < 1) {
    identificadorSolicitud = 1;
    console.log("El array estaba vacio, pase por aqui");
  } else {
    let ultimaSolicitud = solicitudes[solicitudes.length - 1];
    console.log(ultimaSolicitud);
    identificadorSolicitud = ultimaSolicitud.idSolicitud + 1;
  }
  let nombreSolicitante = document.getElementById('autorCursoInput')
  let contenidoCurso = new Cursos()
  contenidoCurso.nombreCurso = document.getElementById('nombreCursoInput').value;
  contenidoCurso.descripcionCurso = document.getElementById('contenidoCursoInput').value;
  contenidoCurso.categoriaCurso = document.getElementById('categoriaCursoInput').value;
  contenidoCurso.nivelCurso = document.getElementById('dificultadCursoInput').value;
  contenidoCurso.cupoCurso = document.getElementById('cuposCursoInput').value;
  contenidoCurso.duracionCurso = document.getElementById('duracionCursoInput').value;
  let nuevaSolicitud = new Solicitud (nombreSolicitante.value, this.estado, contenidoCurso)
    // console.log(nuevaSolicitud)
    alert('Tu solicitud fue enviada al administrador.')
    solicitudes = JSON.parse(localStorage.getItem('Solicitudes'))
    solicitudes.push(nuevaSolicitud)
    // console.log(solicitudes)
    localStorage.setItem('Solicitudes', JSON.stringify(solicitudes))
  }

function aprobarSolicitud(){
  
}  


function cargarSolicitudes(){
  console.log('hola')
  // solicitudes = JSON.parse(localStorage.getItem('Solicitudes'))
  cuerpoTabla.innerHTML = ""
  let btnAprobar = `<button type = 'button' title = 'Aprobar solicitud' class='btn btn-success' onclick = "aprobarSolicitud()"><i class="fas fa-check"></i></button>`;
  let btnRechazar = `<button type = 'button' title = 'Rechazar solicitud' class='btn btn-danger' onclick = "rechazarSolicitud()"><i class="fas fa-times"></i></button>`;

  solicitudes.map(function(sol){
    let tablaSolicitud = `<tr class="text-center">
    <th scope="row">${sol.autor}</th>
        <td>${sol.estado}</td>
        <td><button class = 'btn btn success'>Descripción</td>
        <td>${btnAprobar}  ${btnRechazar}</td>
        </tr>`

        cuerpoTabla.innerHTML += tablaSolicitud;
  })
}

