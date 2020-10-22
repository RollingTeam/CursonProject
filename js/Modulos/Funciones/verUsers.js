class Usuario{
    constructor(userName,userPassword,userFirstName,userLastName,userRole,userStatus,userEmail){
    this.userName= userName
    this.userPassword=userPassword
    this.userFirstName=userFirstName
    this.userLastName=userLastName
    this.userRole=userRole
    this.userStatus=userStatus
    this.userEmail=userEmail
    }
}

// // Definicion de Array de Roles para los Usuarios
// let Roles=[
//     {RoleId:"1", RoleName: "Admin"},
//     {RoleId:"2", RoleName:"Estudiante"},
//     {RoleID:"3", RoleName:"Profesor"}
// ]

// // Definicion de Array de Estados Posibles para los Usuarios

// let EstadosUser=[
//     {estadoId:"1", estadoName: "Activo"},
//     {estadoId:"2", estadoName:"Inactivo"},
// ]

let usuarios = localStorage.getItem('usuarios') || []

// let adminUserB = new Usuario("belenadmin","12345","Belen","Neme","1","1","belen@gmail.com");
// //adminUserB.userRole=Roles[0]

// let regularUserB = new Usuario("BelenUser","654321","Belen","Neme","2","2","b@gmail.com");
// //regularUserB.userRole=Roles[1]

// let regularUserF = new Usuario("FlorUser","654321","Flor","Pistan","2","2","FlorUser@gmail.com");

// let adminUserR = new Usuario('rodrigoM', '12345', 'Rodrigo', 'Martinez', '1', '1', 'rodrigoM@gmail.com')

// let profesorUserG = new Usuario('profesorGabriel', '12345', 'Gabriel', 'Moreira', '2', '2', 'profesorG@gmail.com')

// usuarios.push(adminUserB,regularUserB, regularUserF, adminUserR, profesorUserG);

//manejo de local storage
// localStorage.clear()
// localStorage.setItem('usuarios', JSON.stringify(usuarios))

let datos = JSON.parse(usuarios)
//Se asigna a una variable el cuerpo de la tabla
const tbody = document.getElementById('cuerpoTabla')
const numberUsers = document.getElementById('numberUsers')
const activeUsers = document.getElementById('activeUsers')
const inactveUsers = document.getElementById('inactiveUsers')
const mentorUsers = document.getElementById('mentorUsers')

function verNumeroUsuarios(){
    //NUMERO TOTAL DE USUARIOS
    numberUsers.innerHTML = "";
    let numeroTotal = datos.length
    let total = `<span class = "statisticsData">${numeroTotal}</span>`
    numberUsers.innerHTML = total

    //NUMERO DE USUARIOS ACTIVOS
    activeUsers.innerHTML = "";
    let totalActivos = 0;
    datos.map(function (user){
        if (user.userStatus === '1'){
            totalActivos += 1
        } else {
            totalActivos = totalActivos
        }
    })
    let totalActive = `<span class = "statisticsData">${totalActivos}</span>`
    activeUsers.innerHTML = totalActive;

    //NUMERO DE USUARIOS INACTIVOS
    inactveUsers.innerHTML = "";
    let numeroInactivos = numeroTotal - totalActivos
    let totalInactive = `<span class = "statisticsData">${numeroInactivos}</span>`
    inactveUsers.innerHTML = totalInactive

    // NUMERO DE USUARIOS MENTORES
    mentorUsers.innerHTML = "";
    let totalMentores = 0;
    datos.map(function(user){
        if(user.userRole === '3'){
            totalMentores += 1;
        } else {
            totalMentores = totalMentores;
        }
    })
    mentoresTotales = `<span class = "statisticsData">${totalMentores}</span>`
    mentorUsers.innerHTML = mentoresTotales; 

}

//FUNCIONES PARA FILTRAR
// filtrarDatos = () =>{
//     tbody.innerHTML = ''
//     let arrayFiltrado = [];
//     let estado = document.getElementById('estado')
//     let role = document.getElementById('role')
    
//     //Se filtra y guardan en un array los objetos que coinciden con el value del select
//     let personaEstado = datos.filter(function (user){
//                 return user.userStatus === estado.value
//     })

//     let personaRole = datos.filter(function (user){
//                 return user.userRole === role.value
//     })

//     for(i=0; i<personaEstado.length; i++){
//         for(j=0;j<personaRole.length; j++){
//             if(personaEstado[i] === personaRole[j]){
//                 arrayFiltrado.push(personaEstado[i])
//                 console.log(arrayFiltrado)
//             }
//         }
//     }

//     //Se hace un map para cargar de forma dinamica los usuarios que coinciden con la busqueda
//     arrayFiltrado.map(function(user){
//         let estado = user.userStatus== '1' ? 'Activo' : 'Inactivo';
//         let role = '';
//         switch (user.userRole){
//             case '1':
//                 role = 'Admin'
//                 break;
//             case '2':
//                 role = 'Estudiante'
//                 break;
//             case '3':
//                 role = 'Mentor'
//                 break;
//         }
//         let tablaStatus = `<tr class="text-center">
//     <th scope="row">${user.userFirstName} ${user.userLastName}</th>
//         <td>${user.userName}</td>
//         <td>${estado}</td>
//         <td>${role}</td>
//         <td><button type="button" class = "btn btn-danger" onclick= "suspenderUsuario(${user.userName});">Suspender</button><button class = "btn btn-primary">Alta Admin</button></td></td>
//     </tr>`

//     tbody.innerHTML += tablaStatus  
//     })
    
//     if (estado.value === '0'){
//         cargarUsuarios()
//     }
// }


// FUNCIONES DE FILTROS
filtrarDatos = () =>{
    let estado = document.getElementById('estado')
    let role = document.getElementById('role')
    console.log(estado.value)
    let busquedaEstado = datos.filter(function (user){
                return (user.userStatus === estado.value && user.userRole === role.value)
    })
    console.log(busquedaEstado)
    
    if (busquedaEstado != false){
        datos = busquedaEstado
    } else {
        datos = JSON.parse(localStorage.getItem('usuarios')) || [];
    }

    cargarUsuarios()
}


//FUNCIONES DE USUARIO
function suspenderUsuario (name) {
    
    datos = JSON.parse(localStorage.getItem('usuarios')) || [];

    //buscar el usuario
    let persona = datos.find(function(user){
        if(user.userName === name) {
            let confirmar = confirm(`¿Deseas suspender a ${user.userFirstName} ${user.userLastName}?`)
            if (confirmar){
                return user.userStatus='2'
            }
        }
    })
    
    localStorage.setItem('usuarios', JSON.stringify(datos))
    cargarUsuarios()
    verNumeroUsuarios()
}

function habilitarUsuario (name) {
    
    datos = JSON.parse(localStorage.getItem('usuarios')) || []

    //buscar el usuario
    let persona = datos.find(function(user){
        if(user.userName === name) {
            let confirmar = confirm(`¿Deseas habilitar a ${user.userFirstName} ${user.userLastName}?`)
            if (confirmar){
                return user.userStatus='1'
            }
        }
    })
    
    localStorage.setItem('usuarios', JSON.stringify(datos))
    cargarUsuarios()
    verNumeroUsuarios()
}

function altaAdmin (name) {

    datos = JSON.parse(localStorage.getItem('usuarios')) || []

    let persona = datos.find(function(user){
        if(user.userName === name && user.userRole != '1') {
            let confirmar = confirm(`¿Deseas convertir a ${user.userFirstName} ${user.userLastName} en administrador?`)
            if (confirmar){
                return user.userRole='1'
            }
        }
    })
    
    localStorage.setItem('usuarios', JSON.stringify(datos))
    cargarUsuarios()
    verNumeroUsuarios()
}




// Se define la funcion cargar
function cargarUsuarios () {
    tbody.innerHTML = ""
    datos.map((usuario) => {
        let estado = usuario.userStatus== '1' ? 'Activo' : 'Inactivo';
        let role = '';
        switch (usuario.userRole){
            case '1':
                role = 'Admin'
                break;
            case '2':
                role = 'Estudiante'
                break;
            case '3':
                role = 'Mentor'
                break;
        }
        let btnSuspender;
        let btnHabilitar;
        let btnAlta;

        if(usuario.userStatus === '1'){
            btnSuspender = `<button type = 'button' class='btn btn-danger mr-2' onclick = "suspenderUsuario('${usuario.userName}')">Suspender</button>`
            btnAlta = `<button type = 'button' class = 'btn btn-info mr-2' onclick = "altaAdmin('${usuario.userName}')">Alta admin</button>`
        } else {
            btnSuspender = ""
            btnAlta = ""
        }
        if(usuario.userStatus === '2'){
            btnHabilitar = `<button type = 'button' class='btn btn-success  ' onclick = "habilitarUsuario('${usuario.userName}')">Habilitar</button>`
        } else {
            btnHabilitar = ""
        }
        
        let tablaUsuario =`<tr class="text-center">
        <th scope="row">${usuario.userFirstName} ${usuario.userLastName}</th>
            <td>${usuario.userName}</td>
            <td>${estado}</td>
            <td>${role}</td>
            <td>${btnHabilitar}${btnSuspender}${btnAlta}</td>
        </tr>`;
    tbody.innerHTML += tablaUsuario
    })
}


cargarUsuarios()
verNumeroUsuarios()