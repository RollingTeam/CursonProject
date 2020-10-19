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

/*//Funcion suspender usuario: debe cambiar de estado "activo" a "inactivo"
function suspenderUsuario (name) {
    //buscar el usuario
    console.log(name)
    let persona = datos.find(function(user){
        return user.userName === name
    })
    console.log(persona)
    confirm(`${persona.userFirstName} ${persona.userLastName}`)
    //cambiar la propiedad
    //enviar nuevaente datos al local storage
}*/

function cargarTablaCursos () {
    tbody.innerHTML = ""
    datos = JSON.parse(localStorage.getItem('cursos'))
    datos.map((curso) => {
        //let estado = curso.estadoCurso== '1' ? 'Activo' : 'Inactivo';
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
        let tablaCurso =`<tr class="text-center">
        <th scope="row">${curso.nombreCurso}</th>
            <td>${curso.categoriaCurso}</td>
            <td>${curso.cupoCurso}</td>
            <td>${estadoCurso}</td>
            <td><button type="button" class = "btn btn-danger" onclick= "EliminarCurso(${curso.idCurso});">Suspender</button></td>
        </tr>`;

    tbody.innerHTML += tablaCurso
    })
}


cargarTablaCursos()
verNumeroCursos()