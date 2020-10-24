
let imagenCurso = ""; //Variable donde se guardará la imagen

//Funcion para manejar el guardado de la imagen
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      //guardar en localStorage------------------------
      imagenCurso = e.target.result;
      //---------------------------------------------------
    };
    reader.readAsDataURL(input.files[0]);
  }
}
//Llamar a la funcion cuando se hace clic en seleccionar archivo y este cambia
let fileUpload = document.getElementById("file-upload");
fileUpload.onchange = function (e) {
  readFile(e.srcElement);
};

//uso eventlistener para escuchar cuando se hace submit en el formulario
//guardo la data del formulario y la imagen en localstorage

var el = document.getElementById("formulario");
if(el){el.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Hizo submit");
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    let nombreCurso= document.getElementById("nombreCursoInput").value;
    let descripCurso = document.getElementById("contenidoCursoInput").value;
    let categoriaCruso= document.getElementById("categoriaCursoInput").value;
    let nivelCurso= document.getElementById("dificultadCursoInput").value;
    let cupoCurso= document.getElementById("cuposCursoInput").value;
    let duracionCurso= document.getElementById("duracionCursoInput").value;




    cursos.push({
      nombre: nombreCurso,
      descripcion: descripCurso,
      categoria: categoriaCruso,
      nivel: nivelCurso,
      cupo: cupoCurso,
      duracion: duracionCurso,
      img: imagenCurso,
    });

    localStorage.setItem("cursos", JSON.stringify(cursos));

    // limpiarDatos();
  });}

//Funcion que limpia los campos
const limpiarDatos = () => {
  imagenCurso = "";
  document.getElementById("nombreCursoInput").value = "";
  document.getElementById("contenidoCursoInput").value = "";
  document.getElementById("categoriaCursoInput").value = "";
  document.getElementById("dificultadCursoInput").value = "";
  document.getElementById("cuposCursoInput").value = "";
  document.getElementById("duracionCursoInput").value = "";


  fileUpload.value = "";
};



