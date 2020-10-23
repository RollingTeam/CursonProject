class Categoria {
    constructor(nombre, estado) {
        this.nombre = nombre;
        this.estado = estado;
    }
}

let categorias = [];

let categoriaUno = new Categoria("Programación", "Activa");

let categoriaDos = new Categoria("Arte", "Activa");

let categoriaTres = new Categoria("Idiomas", "Activa");

let categoriaCuatro = new Categoria("Carpintería", "Inactiva");

categorias.push(categoriaUno, categoriaDos, categoriaTres, categoriaCuatro);

// LocalStorage

// localStorage.clear();
let datos = localStorage.getItem("categorias") || []
localStorage.setItem("categorias", JSON.stringify(categorias));

//Cargar Categorías
