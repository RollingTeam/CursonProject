let destacados = JSON.parse(localStorage.getItem("cursos")) || [];

function agregarDestacados() {
    //console.log("entramos a la funcion")
    let cards = document.getElementById("tarjetas");
    for (let i = 0; i < destacados.length; i++) {
        while (i < 3) {
            let badgeColor
            if(destacados[i].nivelCurso=="Principiante"){
                badgeColor= `<span class="badge badge-success" id="badgeNivel">${destacados[i].nivelCurso}</span>`
            }else if(destacados[i].nivelCurso=="Intermedio"){
                badgeColor= `<span class="badge badge-warning" id="badgeNivel">${destacados[i].nivelCurso}</span>`
            }else{
                badgeColor= `<span class="badge badge-secondary" id="badgeNivel">${destacados[i].nivelCurso}</span>`
            }
            let cuerpoCard = `<div class="col-md-4 mt-3"
            <div class="card card-curso m-2">
            <img src=${destacados[i].imagenCurso} class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title"><strong>${destacados[i].nombreCurso}</strong></h5>
                ${badgeColor}
                <p class="card-text p-1">${destacados[i].descripcionCurso}</p>
                <button onclick="mostrarModalCurso(${destacados[i].idCurso})" class="btn btn-primary-curso float-right" data-toggle="modal" data-target="#modalVerMas">
                Ver más
                </button>
                </div>
            </div>
        </div>`;
            i += 1;
            cards.innerHTML += cuerpoCard;
        }
    }
}
agregarDestacados();
