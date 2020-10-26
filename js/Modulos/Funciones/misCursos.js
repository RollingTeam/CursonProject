let us = JSON.parse(localStorage.getItem("usuariosLogueados"))
let usuarios = JSON.parse(localStorage.getItem("users"))

let user= usuarios.find(function(u){
    return u.userName==us[0].userName
})

mostrarMisCursos()
function mostrarMisCursos(){
    if(user){
    console.log("Entre a la funcion de cargar Mis Cursos")
    console.log(user)
    let containerMisCursos= document.getElementById("misCursos");
    containerMisCursos.innerHTML=""
    let cursos = JSON.parse(localStorage.getItem("cursos"))
    for(let i=0; i< user.userCursos.length;i++){
        miCurso= cursos.find(function(c){
            return c.idCurso==user.userCursos[i].idCurso
        })
        console.log(miCurso)
        if(miCurso.estadoCurso===1){
            let badgeColor
            if(miCurso.nivelCurso=="Principiante"){
                badgeColor= `<span class="badge badge-success" id="badgeNivel">${miCurso.nivelCurso}</span>`
            }else if(miCurso.nivelCurso=="Intermedio"){
                badgeColor= `<span class="badge badge-warning" id="badgeNivel">${miCurso.nivelCurso}</span>`
            }else{
                badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${miCurso.nivelCurso}</span>`
            }

            let cursoContenido= `<div class="col-12 col-md-6 col-lg-4">
            <div class="card card-curso m-2">
            <img src=${miCurso.imagenCurso} class="card-img-top img-fluid" alt="...">                
            <div class="card-body">
                    <h5 class="card-title"><strong>${miCurso.nombreCurso}</strong></h5>
                    ${badgeColor}
                    <p class="card-text">${miCurso.descripcionCurso}</p>
                    <button onclick="mostrarModalCurso(${miCurso.idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                    Ver Más
                    </button>
                </div>
            </div>
            </div>`
            containerMisCursos.innerHTML+=cursoContenido
        }
    }
}
}

function mostrarModalCurso (idCurs){
    let cursosLS= JSON.parse(localStorage.getItem("cursos"))
    let cursoDB = cursosLS.find(function (cur) {
      return cur.idCurso === idCurs;
    });
    let modalForm= document.getElementById("modal-form-content");
    let contentModalForm= `
    <div class="modal-header p-1">
        <div class="nombreCurso">
            <p class="heading lead">${cursoDB.nombreCurso}</p>
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
        <div class="text-center">Contacto: ${cursoDB.contactoCurso}</div>
    </div>
    <div class="modal-footer justify-content-center">
        <button class="btn btn-primary-curso" onclick="validarRemoveCurso(${cursoDB.idCurso})">Eliminar de Mis Cursos<i class="far fa-user ml-1 white-text"></i></button>
        <button class="btn btn-primary-curso" onclick="validarAddFav(${cursoDB.idCurso})">Agregar a Favoritos<i class="far fa-heart ml-1 white-text"></i></button>
    </div> `
    modalForm.innerHTML= contentModalForm;
}

function validarRemoveCurso(idCurs){
    let newCursos= user.userCursos.filter(function(c){
        return c.idCurso!=idCurs
    })
    let indexUser = usuarios.findIndex(function(u){
        return u.userName== user.userName
    })
    usuarios[indexUser].userCursos = newCursos
    localStorage.setItem("users",JSON.stringify(usuarios))
    mostrarMisCursos()
}