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

let usuarios = []

let adminUserB = new Usuario("belenadmin","12345","Belen","Neme","1","1","belen@gmail.com");
//adminUserB.userRole=Roles[0]

let regularUserB = new Usuario("BelenUser","654321","Belen","Neme","2","2","b@gmail.com");
//regularUserB.userRole=Roles[1]

let regularUserF = new Usuario("FlorUser","654321","Flor","Pistan","2","2","FlorUser@gmail.com");

let adminUserR = new Usuario('rodrigoM', '12345', 'Rodrigo', 'Martinez', '1', '1', 'rodrigoM@gmail.com')

let profesorUserG = new Usuario('profesorGabriel', '12345', 'Gabriel', 'Moreira', '2', '2', 'profesorG@gmail.com')

usuarios.push(adminUserB,regularUserB, regularUserF, adminUserR, profesorUserG);

//manejo de local storage
//localStorage.clear()
let datos = localStorage.getItem("usuarios") || []
localStorage.setItem('usuarios', JSON.stringify(usuarios))

//let datos = []
const numberUsers = document.getElementById('numberUsers')
const activeUsers = document.getElementById('activeUsers')
const inactveUsers = document.getElementById('inactiveUsers')
const mentorUsers = document.getElementById('mentorUsers')

function verNumeroUsuarios(){
    //NUMERO TOTAL DE USUARIOS
    numberUsers.innerHTML = "";
    let numeroTotal = usuarios.length
    let total = `<span class = "statisticsData">${numeroTotal}</span>`
    numberUsers.innerHTML = total

    //NUMERO DE USUARIOS ACTIVOS
    activeUsers.innerHTML = "";
    let totalActivos = 0;
    usuarios.map(function (user){
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
    usuarios.map(function(user){
        if(user.userRole === '3'){
            totalMentores += 1;
        } else {
            totalMentores = totalMentores;
        }
    })
    mentoresTotales = `<span class = "statisticsData">${totalMentores}</span>`
    mentorUsers.innerHTML = mentoresTotales; 

}

//Se asigna a una variable el cuerpo de la tabla
const tbody = document.getElementById('cuerpoTabla')

//Funcion suspender usuario: debe cambiar de estado "activo" a "inactivo"
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
}



// Se define la funcion cargar
function cargarUsuarios () {
    tbody.innerHTML = ""
    datos = JSON.parse(localStorage.getItem('usuarios'))
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
        let tablaUsuario =`<tr class="text-center">
        <th scope="row">${usuario.userFirstName} ${usuario.userLastName}</th>
            <td>${usuario.userName}</td>
            <td>${estado}</td>
            <td>${role}</td>
            <td><button type="button" class = "btn btn-danger" onclick= "suspenderUsuario(${usuario.userName});">Suspender</button><button class = "btn btn-primary">Alta Admin</button></td></td>
        </tr>`;

    tbody.innerHTML += tablaUsuario
    })
}


cargarUsuarios()
verNumeroUsuarios()