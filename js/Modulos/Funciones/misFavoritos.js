let us = JSON.parse(localStorage.getItem("usuariosLogueados"))
let usuarios = JSON.parse(localStorage.getItem("users"))

let user= usuarios.find(function(u){
    return u.userName==us[0].userName
})

mostrarMisFav()
function mostrarMisFav(){
    if(user){
    console.log("Entre a la funcion de cargar Favoritos")
    console.log(user)
    let containerMisCursos= document.getElementById("favCursos");
    containerMisCursos.innerHTML=""
    let cursos = JSON.parse(localStorage.getItem("cursos"))
    for(let i=0; i< user.userFavoritos.length;i++){
        favCurso= cursos.find(function(c){
            return c.idCurso==user.userFavoritos[i].idCurso
        })
        console.log(favCurso)
        if(favCurso.estadoCurso===1){
            let badgeColor
            if(favCurso.nivelCurso=="Principiante"){
                badgeColor= `<span class="badge badge-success" id="badgeNivel">${favCurso.nivelCurso}</span>`
            }else if(user.userFavoritos[i].nivelCurso=="Intermedio"){
                badgeColor= `<span class="badge badge-warning" id="badgeNivel">${favCurso.nivelCurso}</span>`
            }else{
                badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${favCurso.nivelCurso}</span>`
            }

            let cursoContenido= `<div class="col-12 col-md-6 col-lg-4">
            <div class="card card-curso m-2">
                <img src="https://picsum.photos/id/1/400/300" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><strong>${favCurso.nombreCurso}</strong></h5>
                    ${badgeColor}
                    <p class="card-text">${favCurso.descripcionCurso}</p>
                    <button onclick="mostrarModalCurso(${favCurso.idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
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
        <img src="https://picsum.photos/id/1/500/200" id="imagenModal" alt="" class="img-fluid">
        <span class="badge badge-warning categorias">${cursoDB.categoriaCurso}</span>
        <span class="badge badge-primary fecha">Inicia 15/10/20</span>
        <span class="badge badge-pill badge-info cupos">${cursoDB.cupoCurso} Lugares Disponibles</span>
        <div class="text-center">
            <p>${cursoDB.descripcionCurso}</p>
        </div>
    </div>
    <div class="modal-footer justify-content-center">
        <button class="btn btn-primary-curso" onclick="validarAddCurso(${cursoDB.idCurso})">Inscribirse<i class="far fa-user ml-1 white-text"></i></button>
        <button class="btn btn-primary-curso" onclick="validarRemoveFav(${cursoDB.idCurso})">Eliminar de Favoritos<i class="far fa-heart ml-1 white-text"></i></button>
    </div> `
    modalForm.innerHTML= contentModalForm;
}

function validarRemoveFav(idCurs){
    console.log("Entre a la funcion de remover Fav")
    console.log(user)
    console.log(user.userFavoritos)
    let index = user.userFavoritos.findIndex(function (curs) {
        return curs.idCurso ===idCurs;
    });
    if (index != -1) {
        user.userFavoritos.splice(index, 1);
    } else {
        console.warn("No se encuentra en Favoritos");
    }
    mostrarMisFav()
}