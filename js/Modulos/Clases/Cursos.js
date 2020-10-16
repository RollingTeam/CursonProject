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
/*
let tarjetas = []
class TarjetaCurso {
    constructor(nombre, descripcion, fecha, nivel, cupos, categoria, imagen){
        this.nombre = nombre
        this.descripcion = descripcion
        this.fecha = fecha
        this.nivel = nivel
        this.cupos = cupos
        this.categoria = categoria
        this.imagen = imagen
    }
}

// let tarjeta1 =new TarjetaCurso("Carpintería", "Curso básico de nivelación de manualidades con diferentes tipos de madera", "15/10/2020", "PRINCIPIANTE", "20", "Manualidades", img.src='carpinteria.png')

let nombre = document.getElementById('nombre');
let descripcion = document.getElementById('descripcion');
let fecha = document.getElementById('fecha');
let nivel = document.getElementById('nivel');
let cupos = document.getElementById('cupos');
​let categoria = document.getElementById('categoria')
let imagen = document.getElementById('imagen')​

function NuevoCurso(event){
// console.log("mostrar -> event", event)

event.preventDefault() 


let tarjeta =new TarjetaCurso(nombre.value, descripcion.value, fecha.value, nivel.value, cupos.value, categoria.value, imagen.value) 

nombre.value = "";
descripcion.value = "";
fecha.value = "";
nivel.value = "";
cupos.value = "";
categoria.value = "";
imagen.value = "";

tarjetas.push(tarjeta);
localStorage.setItem('tarjetas', JSON.stringify(tarjetas))
*/