class Cursos {
  constructor(
    idCurso,
    nombreCurso,
    descripcionCurso,
    categoriaCurso,
    nivelCurso,
    cupoCurso,
    duracionCurso,
    imagenCurso,
    estadoCurso = 1
  ) {
    this.idCurso = idCurso;
    this.nombreCurso = nombreCurso;
    this.descripcionCurso = descripcionCurso;
    this.categoriaCurso = categoriaCurso;
    this.nivelCurso = nivelCurso;
    this.cupoCurso = cupoCurso;
    this.duracionCurso = duracionCurso;
    this.imagenCurso = imagenCurso;
    this.estadoCurso = estadoCurso;
  }
}

// ESTADO DEL CURSO
// 1 == Activo
// 2 == Pendiente de Aprobacion
// 3 == Inactivo

let cursos = localStorage.getItem("cursos") || [];

let identificadorCurso;
function agregarCurso() {
  let nombreCurso = document.getElementById("nombreCursoInput");
  let descripCurso = document.getElementById("contenidoCursoInput");
  let categoriaCruso = document.getElementById("categoriaCursoInput");
  let nivelCurso = document.getElementById("dificultadCursoInput");
  let cupoCurso = document.getElementById("cuposCursoInput");
  let duracionCurso = document.getElementById("duracionCursoInput");
  let imagenCurso = document.getElementById("imagenCursoInput");

  //DEBERIAMOS AGREGAR AQUI LA VALIDACION PARA CADA CAMPO DEL FORM

  if (
    nombreCurso.value == "" ||
    descripCurso.value == "" ||
    categoriaCruso.value == "" ||
    nivelCurso.value == "" ||
    cupoCurso.value == "" ||
    duracionCurso.value == "" ||
    imagenCurso.value == ""
  ) {
    return "";
  }

  cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  //Manejar de Forma Automática la asignacion del ID
  if (cursos.length < 1) {
    identificadorCurso = 1;
    console.log("El array estaba vacio, pase por aqui");
  } else {
    let ultimoCurso = cursos[cursos.length - 1];
    console.log(ultimoCurso);
    identificadorCurso = ultimoCurso.idCurso + 1;
  }

  let newCurso = new Cursos(
    identificadorCurso,
    nombreCurso.value,
    descripCurso.value,
    categoriaCruso.value,
    nivelCurso.value,
    cupoCurso.value,
    duracionCurso.value,
    imagenCurso.value
  );
  cursos.push(newCurso);
  localStorage.setItem("cursos", JSON.stringify(cursos));
  limpiarFormCurso();
  alert("El curso fue guardado en el Local Storage");
  cargarCursos();
}

function limpiarFormCurso() {
  let nombreCurso = document.getElementById("nombreCursoInput");
  let descripCurso = document.getElementById("contenidoCursoInput");
  let categoriaCruso = document.getElementById("categoriaCursoInput");
  let nivelCurso = document.getElementById("dificultadCursoInput");
  let cupoCurso = document.getElementById("cuposCursoInput");
  let duracionCurso = document.getElementById("duracionCursoInput");
  let imagenCurso = document.getElementById("imagenCursoInput");

  nombreCurso.value = "";
  descripCurso.value = "";
  categoriaCruso.value = "";
  nivelCurso.value = "";
  cupoCurso.value = "";
  duracionCurso.value = "";
  imagenCurso.value = "";
}

cargarCursos();
function cargarCursos() {
  cursos = localStorage.getItem("cursos");
  let cursosDB = JSON.parse(cursos);
  cursosContainer.innerHTML = "";
  for (let i = 0; i < cursosDB.length; i++) {
    while (i < 6) {
      let badgeColor;
      if (cursosDB[i].nivelCurso == "Principiante") {
        badgeColor = `<span class="badge badge-success" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`;
      } else if (cursosDB[i].nivelCurso == "Intermedio") {
        badgeColor = `<span class="badge badge-warning" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`;
      } else {
        badgeColor = `<span class="badge badge-secondary" id="badgeNivel">${cursosDB[i].nivelCurso}</span>`;
      }

      let cursoContenido = `<div class="col-12 col-md-6 col-lg-4">
            <div class="card card-curso m-2">
                <img src="https://picsum.photos/id/1/400/300" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><strong>${cursosDB[i].nombreCurso}</strong></h5>
                    ${badgeColor}
                    <p class="card-text">${cursosDB[i].descripcionCurso}</p>
                    <button onclick="mostrarModalCurso(${cursosDB[i].idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                    Ver Más
                    </button>
                </div>
            </div>
            </div>`;

      cursosContainer.innerHTML += cursoContenido;
      i += 1;
    }
  }
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
        <img src="https://picsum.photos/id/1/500/200" id="imagenModal" alt="" class="img-fluid">
        <span class="badge badge-warning categorias">${cursoDB.categoriaCurso}</span>
        <span class="badge badge-primary fecha">Inicia 15/10/20</span>
        <span class="badge badge-pill badge-info cupos">${cursoDB.cupoCurso} Lugares Disponibles</span>
        <div class="text-center">
            <p>${cursoDB.descripcionCurso}</p>
        </div>
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



