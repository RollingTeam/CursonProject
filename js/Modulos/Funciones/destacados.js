let destacados = JSON.parse(localStorage.getItem("cursos"));


function agregarDestacados() {
    console.log("entramos a la funcion")
    let cards = document.getElementById("tarjetas");
    for (let i = 0; i < destacados.length; i++) {
        console.log("entramos al for")
        while (i < 3) {
            console.log("entramos al while")
            let cuerpoCard = `<div class="card">
            <img class="card-img-top img-fluid" src="https://picsum.photos/200/200/?blur"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${destacados[i.nombreCurso]}</h5>
                <span class="badge badge-pill badge-warning">${destacados[i.nivelCurso]}</span>
                <p class="card-text p-1">${destacados[i.descripcionCurso]}</p>
                <button type="button" class="btn btn-danger">Más Info</button>
            </div>
        </div>`;
            i += 1;
            cards.innerHTML += cuerpoCard;
            cards += cuerpoCard;
        }
    }
}
agregarDestacados();
