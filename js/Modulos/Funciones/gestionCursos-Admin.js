let datos = JSON.parse(localStorage.getItem("cursos")) || []

function verNumeroCursos(){
    console.log("Entre a la function de verNumeroCursos")
    datos = JSON.parse(localStorage.getItem("cursos"))

    //NUMERO TOTAL DE CURSOS
    numberCursos.innerHTML = "";
    let numeroTotal = datos.length
    let total = `<span class = "statisticsData">${numeroTotal}</span>`
    numberCursos.innerHTML = total

    //NUMERO DE CURSOS ACTIVOS
    activeCursos.innerHTML = "";
    let totalActivos = 0;
    datos.map(function (curso){
        if (curso.estadoCurso === 1){
            totalActivos += 1
        }else{
            console.log("Pase por el else "+ curso.estadoCurso)
            totalActivos = totalActivos
        }
    })
    let totalActive = `<span class = "statisticsData">${totalActivos}</span>`
    activeCursos.innerHTML = totalActive;

    //NUMERO DE CURSOS INACTIVOS
    inactiveCursos.innerHTML = "";
    let totalInactivos=0;
    datos.map(function (curso){
        if (curso.estadoCurso === 3){
            totalInactivos += 1
            console.log(curso.estadoCurso)
        }
    })
    let totalInactive = `<span class = "statisticsData">${totalInactivos}</span>`
    inactiveCursos.innerHTML = totalInactive

    // NUMERO DE CURSOS PENDIENTES
    pendientesCursos.innerHTML = "";
    let totalPendientes = 0;
    datos.map(function(curso){
        if (curso.estadoCurso === 2){
            totalPendientes += 1
            console.log(curso.estadoCurso)
        }else{
            totalPendientes = totalPendientes
        }
    })
    let totalPending = `<span class = "statisticsData">${totalPendientes}</span>`
    pendientesCursos.innerHTML = totalPending
}

// FUNCION DE FILTROS
filtrarDatos = () => {
    cursos = JSON.parse(localStorage.getItem("cursos"));
    let estado = document.getElementById("estado");
    let categoria = document.getElementById("categoria");
    console.log(typeof categoria.value)
    if (estado.value > 0 && categoria.value !="") {
      let busquedaEstado = cursos.filter(function (curso) {
        return curso.estadoCurso == estado.value && curso.categoriaCurso === categoria.value;
      });
      datos = busquedaEstado;
    }else {
      if (estado.value > 0) {
        let busquedaEstado = cursos.filter(function (curso) {
            console.log(typeof(curso.estadoCurso))
          return curso.estadoCurso == estado.value;
        });
        datos = busquedaEstado;
      } else {
        if (categoria.value !="Todas" ) {
          let busquedaEstado = cursos.filter(function (curso) {
              console.log(curso.categoriaCurso)
            return curso.categoriaCurso === categoria.value;
          });
          datos = busquedaEstado;
        } else {
          datos = cursos;
        }
      }
    }
    cargarTablaCursos();
};

const tbody = document.getElementById('cuerpoTablaCursos')

function eliminarCurso(idCurso){
    let cursoSearch = datos.find(function(cur){
        return cur.idCurso === idCurso
    })

    let newArray = datos.filter(function (cur) {
        return cur.idCurso != cursoSearch.idCurso;
    });

    let valor = confirm(`¿Esta seguro de eliminar el curso ${cursoSearch.nombreCurso}?`)
    if(valor){
        localStorage.setItem("cursos", JSON.stringify(newArray));
        cargarTablaCursos();
        verNumeroCursos();
    }
}

function suspenderCurso(idCurso){
    let cursoSearch = datos.find(function(cur){
        return cur.idCurso === idCurso
    })
    let valor = confirm(`¿Esta seguro de inactivar el curso ${cursoSearch.nombreCurso}?`)
    if(valor){
        cursoSearch.estadoCurso = 3
        console.log(cursoSearch.estadoCurso)
        localStorage.setItem("cursos", JSON.stringify(datos));
        cargarTablaCursos();
        verNumeroCursos()
    }
}

function activarCurso(idCurso){
    let cursoSearch = datos.find(function(cur){
        return cur.idCurso === idCurso
    })
    let valor = confirm(`¿Esta seguro de activar el curso ${cursoSearch.nombreCurso}?`)
    if(valor){
        cursoSearch.estadoCurso = 1
        console.log(cursoSearch.estadoCurso)
        localStorage.setItem("cursos", JSON.stringify(datos));
        cargarTablaCursos();
        verNumeroCursos();
    }
}

function cargarTablaCursos () {
    tbody.innerHTML = ""
    datos.map((curso) => {
        let estadoCurso = '';
        switch (curso.estadoCurso){
            case 1:
                estadoCurso = 'Activo'
                break;
            case 2:
                estadoCurso = 'Pendiente'
                break;
            case 3:
                estadoCurso = 'Inactivo'
                break;
        }
        let btnSuspender
        let btnActivar
        if(curso.estadoCurso==1){
            btnSuspender = `<button type="button" class = "btn btn-danger" onclick= "suspenderCurso(${curso.idCurso});">Suspender</button>`
        }else{
            btnSuspender= ""
        }
        if(curso.estadoCurso==3){
            btnActivar = `<button type="button" class = "btn btn-danger" onclick= "activarCurso(${curso.idCurso});">Activar</button>`
        }else{
            btnActivar = ""
        }

        let tablaCurso =`<tr class="text-center">
        <th scope="row">${curso.idCurso}</th>
        <th scope="row">${curso.nombreCurso}</th>
            <td>${curso.categoriaCurso}</td>
            <td>${curso.cupoCurso}</td>
            <td>${estadoCurso}</td>
            <td><button type="button" class = "btn btn-dark mx-1" onclick= "editarCurso(${curso.idCurso});"data-toggle="modal" data-target="#exampleModal">Editar</button><button type="button" class = "btn btn-danger mr-1" onclick= "eliminarCurso(${curso.idCurso});">Eliminar</button>${btnSuspender} ${btnActivar}</td>
        </tr>`;

    tbody.innerHTML += tablaCurso
    })
}

cargarTablaCursos()
verNumeroCursos()

let modalCurso= document.getElementById("modalBody")
function editarCurso(idCurso){
    console.log("Entre a la funcion de editarCurso")
    datos = JSON.parse(localStorage.getItem("cursos"))
    let cursoSearch = datos.find(function(cur){
        return cur.idCurso === idCurso
    })
    console.log(cursoSearch)
    console.log(cursoSearch.nombreCurso)
    console.log(cursoSearch.descripcionCurso)
    let contenido="";
    contenido =`<form autocomplete="off">
    <div class="container">
        <div class="row">
            <div class="col">
                    <div class="row">
                        <div class="form-group col">
                            <label class="color-rosa">Nombre del Curso</label>
                            <input type="text" class="form-control" id="nombreCursoInput" value=${cursoSearch.nombreCurso}>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col">
                            <label class="color-rosa">Descripcion</label>
                            <textarea id="contenidoCursoInput" class="form-control" rows="3">${cursoSearch.descripcionCurso}</textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-12 col-sm-12 col-md-6 col-md-4">
                            <label class="color-rosa">Duracion</label>
                            <input type="number" class="form-control" id="duracionCursoInput" value=${cursoSearch.duracionCurso}>
                        </div>
                        <div class="form-group col-12 col-sm-12 col-md-6 col-md-4">
                            <label class="color-rosa">Lugares Disponibles</label>
                            <input type="number" class="form-control" id="cuposCursoInput" value=${cursoSearch.cupoCurso}>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-12 col-sm-12 col-md-6 col-md-6">
                            <label class="color-rosa">Categoría</label>
                            <select class="form-control" id="categoriaCursoInput">
                                <option value=""selected>${cursoSearch.categoriaCurso}</option>
                                <option>Tecnología</option>
                                <option>Hogar</option>
                                <option>Arte</option>
                                <option>Salud</option>
                                <option>Marketing</option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-sm-12 col-md-6 col-md-6">
                            <label class="color-rosa">Nivel</label>
                            <select class="form-control" id="dificultadCursoInput">
                                <option value ="" selected>${cursoSearch.nivelCurso}</option>
                                <option>Principiante</option>
                                <option>Intermedio</option>
                                <option>Avanzado</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col">
                            <label class="color-rosa">Imagen de Portada del Curso</label>
                            <input type="file" class="form-control-file" id="imagenCursoInput">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="form-group d-flex justify-content-center mt-4">
                <button type="button" class="btn btn-secondary mr-3" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn cursonBtn ml-3" data-dismiss="modal" onclick="updateCurso(${idCurso})">Modificar Curso</button>
            </div>
        </form>`
    modalCurso.innerHTML = contenido;
}

const updateCurso = (idCurso) => {
    console.log("Entre al updateCurso")
    // e.preventDefault();
    let nombreCurso= document.getElementById("nombreCursoInput").value;
    let descripCurso = document.getElementById("contenidoCursoInput").value;
    let categoriaCurso= document.getElementById("categoriaCursoInput").value;
    let nivelCurso= document.getElementById("dificultadCursoInput").value;
    let cupoCurso= document.getElementById("cuposCursoInput").value;
    let duracionCurso= document.getElementById("duracionCursoInput").value;
    let imagenCurso= document.getElementById("imagenCursoInput").value;

    datos.map(function (curso) {
      if (curso.idCurso === idCurso) {
        curso.nombreCurso= nombreCurso
        curso.descripcionCurso= descripCurso
        curso.categoriaCurso=categoriaCurso
        curso.nivelCurso=nivelCurso
        curso.cupoCurso=cupoCurso
        curso.duracionCurso=duracionCurso
        curso.imagenCurso=imagenCurso
      }
    });
    localStorage.setItem("cursos", JSON.stringify(datos));
    cargarTablaCursos()
};
