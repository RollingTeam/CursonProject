class Cursos{
    constructor(nombreCurso,descripcionCurso,categoriaCurso,nivelCurso,cupoCurso,duracionCurso,imagenCurso,estadoCurso=1,fechaCurso){
        this.nombreCurso= nombreCurso
        this.descripcionCurso= descripcionCurso
        this.categoriaCurso=categoriaCurso
        this.nivelCurso=nivelCurso
        this.cupoCurso=cupoCurso
        this.duracionCurso=duracionCurso
        this.imagenCurso=imagenCurso
        this.estadoCurso=estadoCurso
        this.fechaCurso=fechaCurso
    }
}
let cursos = []

// ESTADO DEL CURSO 
// 1 == Activo
// 2 == Pendiente de Aprobacion
// 3 == Inactivo
let curso1= new Cursos("PHP","Curso de Programacion donde aprenderemos a programar paso a paso con todas las herramientas fundamentales actuales de la programación","Programacion","principiante",15,"6 meses","https://picsum.photos/id/1/400/200",1,"Comienza 12/11/2020");
let curso2= new Cursos("JS","Curso de Programacion","Programacion","Avanzado",20,1);

cursos.push(curso1,curso2);
let cursos= localStorage.setItem("cursos",JSON.stringify(cursos)) || []

// // TOMAR DATOS PARA TARJETA
// function agregarCurso() {
//   let nombreCurso = document.getElementById("nombreCursoInput");
//   let descripCurso = document.getElementById("contenidoCursoInput");
//   let categoriaCurso = document.getElementById("categoriaCursoInput");
//   let nivelCurso = document.getElementById("dificultadCursoInput");
//   let cupoCurso = document.getElementById("cuposCursoInput");
//   let duracionCurso = document.getElementById("duracionCursoInput");
//   let imagenCurso = document.getElementById("imagenCursoInput");
//   let fechaCurso = document.getElementById("fechaCursoInput");

//   //DEBERIAMOS AGREGAR AQUI LA VALIDACION PARA CADA CAMPO DEL FORM

//   if (
//     nombreCurso.value == "" ||
//     descripCurso.value == "" ||
//     categoriaCurso.value == "" ||
//     nivelCurso.value == "" ||
//     cupoCurso.value == "" ||
//     duracionCurso.value == "" ||
//     imagenCurso.value == "" ||
//     fechaCurso.value == ""
//   ) {
//     return "";
//   }

//   //GUARDAR EL CURSO EN EL ARRAY DEL LOCALSTORAGE
//   let cursosDB = JSON.parse(localStorage.getItem("cursos"));
//   let newCurso = new Cursos(
//     nombreCurso.value,
//     descripCurso.value,
//     categoriaCurso.value,
//     nivelCurso.value,
//     cupoCurso.value,
//     duracionCurso.value,
//     imagenCurso.value,
//     fechaCurso.value
//   );
//   cursosDB.push(newCurso);
//   localStorage.setItem("cursos", JSON.stringify(cursosDB));
//   limpiarFormCurso();
//   alert("El curso fue guardado en el Local Storage");
//   //LLAMAR A LA FUNCION PARA ACTUALIZAR EL ARRAYS DE CURSOS EN EL LANDING PAGE
//   cargarCursos();
// }


// TARJETA DE TODOS LOS CURSOS
let tarjetasTodosCursos = document.getElementById("cursos");

cursosDB.map(function (tarj, i) {
let card = `<div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="${tarj.imagenCurso}" class="card-img-top" id="imagenCursoInput" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" id="nombreCursoInput"><strong>${tarj.nombreCurso}</strong></h5>
                            <span class="badge badge-success" id="dificultadCursoInput">${tarj.nivelCurso}</span><span class="badge badge-dark" id="categoriaCursoInput">${tarj.categoriaCurso}</span>
                            <p class="card-text" id="contenidoCursoInput">${tarj.descripCurso}</p>
                            <span class="badge badge-info" id="fechaCursoInput">INICIA ${tarj.fechaCurso}</span>
                            <button type="button" class="btn btn-primary float-right" data-toggle="modal"
                                data-target="#modalVerMas">
                                Ver Más
                            </button>
                        </div>
                    </div>
                </div>`;

tarjetasTodosCursos.innerHTML += card;
});

// MODAL DE LOS CURSOS
let tarjetasModalVerMas = document.getElementById("modalTarjeta");

cursosDB.map(function (tarj, i) {
let card = `<div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <div class="nombreCurso">
                        <p class="heading lead" id="nombreCursoInput">${tarj.nombreCurso}</p>
                    </div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="black-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body">

                    <img src="${tarj.imagenCurso}" id="imagenCursoInput" alt="" class="img-fluid">
                    
                        <span class="badge badge-primary" id="duracionCursoInput">${tarj.duracionCurso}</span>
                
                        <span class="badge badge-pill badge-info" id="cuposCursoInput">${tarj.cupoCurso}</span>
                    

                    <div class="text-center mt-2" id="contenidoCursoInput">
                        <p>${tarj.descripCurso}</p>
                    </div>
                </div>

                <!--Footer-->
                <div class="modal-footer justify-content-center">
                    <a href="" type="button" class="btn btn-primary">Inscribirse <i class="far fa-user ml-1 white-text"></i></a>
                    <a type="button" class="btn btn-outline-info waves-effect">Añadir a favoritos <i class="far fa-heart"></i></a>
                </div>
            </div>`;

tarjetasModalVerMas.innerHTML += card;
});

console.log('cursos');