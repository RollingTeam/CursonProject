let datos = localStorage.getItem("cursos") || []
let cursos = JSON.parse(datos)

function verNumeroCursos(){
    //NUMERO TOTAL DE CURSOS
    numberCursos.innerHTML = "";
    let numeroTotal = cursos.length
    let total = `<span class = "statisticsData">${numeroTotal}</span>`
    numberCursos.innerHTML = total

    //NUMERO DE CURSOS ACTIVOS
    activeCursos.innerHTML = "";
    let totalActivos = 0;
    cursos.map(function (curso){
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
    cursos.map(function (curso){
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
    cursos.map(function(curso){
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
    datos = JSON.parse(localStorage.getItem('cursos'))
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
        <th scope="row">${curso.nombreCurso}</th>
            <td>${curso.categoriaCurso}</td>
            <td>${curso.cupoCurso}</td>
            <td>${estadoCurso}</td>
            <td><button type="button" class = "btn btn-danger mr-1" onclick= "eliminarCurso(${curso.idCurso});">Eliminar</button>${btnSuspender} ${btnActivar}</td>
        </tr>`;

    tbody.innerHTML += tablaCurso
    })
}


cargarTablaCursos()
verNumeroCursos()