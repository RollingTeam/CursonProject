let categoriasArray = localStorage.getItem("categorias") || []
let categorias;
if(categoriasArray.length >0){
    categorias = JSON.parse(categoriasArray)
}else{
    categorias=[]
}
cursos = JSON.parse(localStorage.getItem("cursos"))
mostrarCategorias();
filtrarCursosPorCategoria();
function mostrarCategorias(){
    let opcionCategorias = document.getElementById("listaCategorias")
    opcionCategorias.innerHTML=""
    for(let i=0; i< categorias.length;i++){
        let opcionCat= `<option id="${categorias[i].idCategoria}" value="${categorias[i].nombreCategoria}">${categorias[i].nombreCategoria}</option>`
        opcionCategorias.innerHTML+= opcionCat
    }
}


function filtrarCursosPorCategoria(){
    let opcion = document.getElementById("listaCategorias").value
    cursosArray = localStorage.getItem("cursos") || []
    if(cursosArray.length>0){
        cursos= JSON.parse(cursosArray)
    }else{
        cursos=[]
    }
    let busquedaCursos = cursos.filter(function (cur) {
        return cur.categoriaCurso === opcion
    });

    let containerCursos = document.getElementById("containerCursCat")
    containerCursos.innerHTML=""
    for(let i=0; i<3;i++){
        let badgeColor
        if(busquedaCursos[i].nivelCurso=="Principiante"){
            badgeColor= `<span class="badge badge-success" id="badgeNivel">${busquedaCursos[i].nivelCurso}</span>`
        }else if(busquedaCursos[i].nivelCurso=="Intermedio"){
            badgeColor= `<span class="badge badge-warning" id="badgeNivel">${busquedaCursos[i].nivelCurso}</span>`
        }else{
            badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${busquedaCursos[i].nivelCurso}</span>`
        }
        let contenCurso= `<div class="col-md-4 my-1">
        <div class="card card-curso my-2">
            <img src=${busquedaCursos[i].imagenCurso} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><strong>${busquedaCursos[i].nombreCurso}</strong></h5>
                ${badgeColor}
                <p class="card-text">${busquedaCursos[i].descripcionCurso}
                </p>
                <button onclick="mostrarModalCurso(${busquedaCursos[i].idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                    Ver Más
                </button>
            </div>
        </div>`
        i+=1;
        containerCursos.innerHTML+= contenCurso

    }
}
function verPrincipalesCursos(){
    filtrarCursosPorCategoria()
    let btnMenos= document.getElementById("verMenosCursos")
    btnMenos.style = 'display:none'
    let btnMas = document.getElementById("verTodosLosCursos")
    btnMas.style = 'display:inline-block'
}
function mostrarTodosLosCursos(){
    console.log("Vine por mostrarTodos")
    let opcion = document.getElementById("listaCategorias").value
    cursos = JSON.parse(localStorage.getItem("cursos")) 
    let busquedaCursos = cursos.filter(function (cur) {
        return cur.categoriaCurso === opcion
    });
    console.log(busquedaCursos)
    let containerCursos = document.getElementById("containerCursCat")
    containerCursos.innerHTML=""
    for(let i=0; i<busquedaCursos.length;i++){
        let badgeColor
        if(busquedaCursos[i].nivelCurso=="Principiante"){
            badgeColor= `<span class="badge badge-success" id="badgeNivel">${busquedaCursos[i].nivelCurso}</span>`
        }else if(busquedaCursos[i].nivelCurso=="Intermedio"){
            badgeColor= `<span class="badge badge-warning" id="badgeNivel">${busquedaCursos[i].nivelCurso}</span>`
        }else{
            badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${busquedaCursos[i].nivelCurso}</span>`
        }
        let contenCurso= `<div class="col-md-4">
        <div class="card card-curso my-2">
            <img src=${busquedaCursos[i].imagenCurso} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><strong>${busquedaCursos[i].nombreCurso}</strong></h5>
                ${badgeColor}
                <p class="card-text">${busquedaCursos[i].descripcionCurso}
                </p>
                <button onclick="mostrarModalCurso(${busquedaCursos[i].idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                    Ver Más
                </button>
            </div>
        </div>`
        containerCursos.innerHTML+= contenCurso
    }

   let btnMas = document.getElementById("verTodosLosCursos")
   btnMas.style = 'display:none'
   let btnMenos= document.getElementById("verMenosCursos")
   btnMenos.style = 'display:inline-block'
   btnMenos.className="btn btn-primary-curso"
}