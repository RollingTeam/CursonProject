class Categoria{
    constructor(idCategoria,nombreCategoria,estadoCategoria){
        this.idCategoria= idCategoria
        this.nombreCategoria=nombreCategoria
        this.estadoCategoria= estadoCategoria
    }
}

let categorias = JSON.parse(localStorage.getItem("categorias")) || []
let identificadorCat;
function obtenerIdCategoria(){
    categorias = JSON.parse(localStorage.getItem("categorias"))
    if(categorias!=null){
        if(categorias.length < 1){
            identificadorCat = 1;
        }else{
        let ultimaCat = categorias[categorias.length-1]
        identificadorCat= ultimaCat.idCategoria +1 
        }
    }else{
        categorias =[]
        identificadorCat = 1
    }
}

function crearCategoria(){
    console.log("Entre a la funcion crearCategoria")
    obtenerIdCategoria();
    console.log(identificadorCat)
    let nombreCat= document.getElementById("inputCategoria")
    let estadoCat = document.getElementById("inputState")
    let categoria= new Categoria(identificadorCat,nombreCat.value,estadoCat.value)
    categorias.push(categoria)
    localStorage.setItem("categorias",JSON.stringify(categorias))
    limpiarFormCategoria()
    nombreCat.value = "";
    estadoCat.value = "";
}
function limpiarFormCategoria(){
    let nombreCat= document.getElementById("nputCategoria");
    let estadoCat = document.getElementById("inputState");
    nombreCat.value = "";
    estadoCat.value = "";
};
function eliminarCategoria(idCategoria){
    let catSearch = categorias.find(function(c){
        return c.idCategoria === idCategoria
    })

    let newArray = categorias.filter(function (c) {
        return c.idCategoria != catSearch.idCategoria;
    });

    let valor = confirm(`¿Esta seguro de eliminar la categoria ${catSearch.nombreCategoria}?`)
    if(valor){
        localStorage.setItem("categorias", JSON.stringify(newArray));
        cargarCategorias();
    }
}
function suspenderCategoria(idCategoria){
    let categoriaSearch = categorias.find(function(c){
        return c.idCategoria === idCategoria
    })
    let valor = confirm(`¿Esta seguro de desacativar la categoria ${categoriaSearch.nombreCategoria}?`)
    if(valor){
        categoriaSearch.estadoCategoria = "2"
        localStorage.setItem("categorias", JSON.stringify(categorias));
        cargarCategorias();
    }
}

function activarCategoria(idCategoria){
    let categoriaSearch = categorias.find(function(c){
        return c.idCategoria === idCategoria
    })
    let valor = confirm(`¿Esta seguro de activar la categoria ${categoriaSearch.nombreCategoria}?`)
    if(valor){
        categoriaSearch.estadoCategoria = "1"
        localStorage.setItem("categorias", JSON.stringify(categorias));
        cargarCategorias();
    }
}

if (location.pathname ==="/CursonProject/crearCatAdmin.html"){
    cargarCategorias()
}
function cargarCategorias(){
    categorias = JSON.parse(localStorage.getItem("categorias"))
    let tablaBody = document.getElementById("cuerpoTabla");
    tablaBody.innerHTML = ""
    categorias.map((cat) => {
        console.log(cat)
        console.log(cat.estadoCategoria)
        let estadoCategoria = '';
        switch (cat.estadoCategoria){
            case "1":
                estadoCategoria = 'Activa'
                break;
            case "2":
                estadoCategoria = 'Inactiva'
                break;
        }
        let btnSuspender
        let btnActivar
        if(cat.estadoCategoria==1){
            btnSuspender = `<button type="button" class = "btn btn-danger" onclick= "suspenderCategoria(${cat.idCategoria});">Desactivar</button>`
        }else{
            btnSuspender= ""
        }
        if(cat.estadoCategoria==2){
            btnActivar = `<button type="button" class = "btn btn-danger" onclick= "activarCategoria(${cat.idCategoria});">Activar</button>`
        }else{
            btnActivar = ""
        }

        let tabla =`<tr class="text-center">
        <th scope="row">${cat.idCategoria}</th>
        <th scope="row">${cat.nombreCategoria}</th>
        <th scrope="row"> ${estadoCategoria}</th>
        <th><button type="button" class = "btn btn-danger mr-1" onclick= "eliminarCategoria(${cat.idCategoria});">Eliminar</button>${btnSuspender} ${btnActivar}</th>
        </tr>`;
    tablaBody.innerHTML += tabla
    })
}