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


let cursos= localStorage.setItem("cursos",JSON.stringify(cursos)) || []
cursos.push(curso1,curso2);


function agregarCurso(){

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
    return ""
}

 //GUARDAR EL CURSO EN EL ARRAY DEL LOCALSTORAGE
 let cursosDB= JSON.parse(localStorage.getItem("cursos"))
 let newCurso = new Cursos(nombreCurso.value,descripCurso.value,categoriaCruso.value,nivelCurso.value,cupoCurso.value,duracionCurso.value,imagenCurso.value)
 cursosDB.push(newCurso);
 localStorage.setItem("cursos",JSON.stringify(cursosDB))
 limpiarFormCurso();
 alert("El curso fue guardado en el Local Storage");
 //LLAMAR A LA FUNCION PARA ACTUALIZAR EL ARRAYS DE CURSOS EN EL LANDING PAGE
cargarCursos();
}

const limpiarFormCurso = () => {
    let nombreCurso= document.getElementById("nombreCursoInput");
    let descripCurso = document.getElementById("contenidoCursoInput");
    let categoriaCruso= document.getElementById("categoriaCursoInput");
    let nivelCurso= document.getElementById("dificultadCursoInput")
    let cupoCurso= document.getElementById("cuposCursoInput")
    let duracionCurso= document.getElementById("duracionCursoInput");
    let imagenCurso= document.getElementById("imagenCursoInput");

    nombreCurso.value = "";
    descripCurso.value = "";
    categoriaCruso.value = "";
    nivelCurso.value="";
    cupoCurso.value="";
    duracionCurso.value="";
    imagenCurso.value="";
};


function cargarCursos(){
     //Buscar en el localStorage el conjunto de Cursos almacenadas
     let cursosLS = localStorage.getItem("cursos",cursos)
     let cursosDB = JSON.parse(cursosLS)
     //DEBERIAMOS BUSCAR EL CONTAINER DE TODO LO QUE ES TODOS LOS CURSOS SECTION
     cursosContainer.innerHTML=""
     for(let i=0 ; i< cursosDB.length ; i++){
         while(i<6){
            
         }
     }
}



