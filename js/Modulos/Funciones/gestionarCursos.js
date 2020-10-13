class Cursos{
    constructor(nombreCurso,descripcionCurso,categoriaCurso,nivelCurso,cupoCurso,duracionCurso,imagenCurso,estadoCurso=1){
        this.nombreCurso= nombreCurso
        this.descripcionCurso= descripcionCurso
        this.categoriaCurso=categoriaCurso
        this.nivelCurso=nivelCurso
        this.cupoCurso=cupoCurso
        this.duracionCurso=duracionCurso
        this.imagenCurso=imagenCurso
        this.estadoCurso=estadoCurso
    }
}

// ESTADO DEL CURSO 
// 1 == Activo
// 2 == Pendiente de Aprobacion
// 3 == Inactivo
let curso1= new Cursos("PHP","Curso de Programacion","Programacion","Avanzado",15,1);
let curso2= new Cursos("JS","Curso de Programacion","Programacion","Avanzado",20,1);

let cursos=[]
cursos.push(curso1,curso2);

localStorage.setItem("cursos",JSON.stringify(cursos));


function agregarCurso(){

console.log("Entre a la funcion de AgregarCurso")
let nombreCurso= document.getElementById("nombreCursoInput");
let descripCurso = document.getElementById("contenidoCursoInput");
let categoriaCruso= document.getElementById("categoriaCursoInput");
let nivelCurso= document.getElementById("dificultadCursoInput")
let cupoCurso= document.getElementById("cuposCursoInput")
let duracionCurso= document.getElementById("duracionCursoInput");
let imagenCurso= document.getElementById("imagenCursoInput");

//DEBERIAMOS AGREGAR AQUI LA VALIDACION PARA CADA CAMPO DEL FORM

if (
    nombreCurso.value == "" ||
    descripCurso.value == "" ||
    categoriaCruso.value == ""||
    nivelCurso.value==""||
    cupoCurso.value==""||
    duracionCurso.value==""||
    imagenCurso.value==""
) {
    return console.log("Vine por aqui");
}

 //GUARDAR LA REVIEW EN EL ARRAY DE REVIEWS DEL LOCALSTORAGE
 let cursosDB= JSON.parse(localStorage.getItem("cursos"))
 let newCurso = new Cursos(nombreCurso.value,descripCurso.value,categoriaCruso.value,nivelCurso.value,cupoCurso.value,duracionCurso.value,imagenCurso.value)
 cursosDB.push(newCurso);
 localStorage.setItem("cursos",JSON.stringify(cursosDB))
 //limpiarFormReview();
 alert("El curso fue guardado en el Local Storage");
 //LLAMAR A LA FUNCION PARA ACTUALIZAR EL ARRAYS DE CURSOS EN EL LANDING PAGE
 //cargarCursos();
}



function cargarCursos(){
     //Buscar en el localStorage el conjunto de Cursos almacenadas
     let cursosLS = localStorage.getItem("cursos",cursos)
     let cursosDB = JSON.parse(cursosLS)
     //DEBERIAMOS BUSCAR EL CONTAINER DE TODO LO QUE ES TODOS LOS CURSOS SECTION
     cursosContainer.innerHTML=""
     for(let i=0 ; i< cursosDB.length ; i++){
         while(i<6){
             let reviewContainer= document.getElementById("reviewContainer")
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
             i+=1
         }
     }
}



