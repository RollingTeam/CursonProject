let solicitudes = []

class Solicitud{
    constructor (autor, estado = 'Pendiente', descripcionCurso={}){
        this.autor = autor
        this.estado = estado
        this.descripcionCurso = descripcionCurso
    }
}

let autor = document.getElementById('autorCursoInput')
let descripcionCurso = {
    Nombre: document.getElementById('nombreCursoInput').value,
    Contenido: document.getElementById('contenidoCursoInput').value,
    Duracion: document.getElementById('duracionCursoInput').value,
    Cupo: document.getElementById('cuposCursoInput').value,
    Categoria: document.getElementById('categoriaCursoInput').value,
    Dificultad: document.getElementById('dificultadCursoInput').value 
} 

let solicitudPrueba = new Solicitud (autor, estado, descripcionCurso)

console.log(solicitudPrueba)