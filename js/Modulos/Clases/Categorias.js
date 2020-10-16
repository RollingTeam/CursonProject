class Categoria {
    constructor (categoria, estado){
        this.categoria = categoria;
        this.estado = estado;
    }
}

let categorias = [];

let categoriaUno = new Categoria ("Programación", "Activa");

let categoriaDos = new Categoria ("Arte", "Activa");

let categoriaTres = new Categoria ("Idiomas", "Activa");

let categoriaCuatro = new Categoria ("Carpintería", "Inactiva");

categorias.push(categoriaUno, categoriaDos, categoriaTres, categoriaCuatro);

// LocalStorage

localStorage.clear();
localStorage.setItem("categorias", JSON.stringify(categorias));
