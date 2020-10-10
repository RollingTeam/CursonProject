//import {Usuario} from "../Clases/Usuarios"

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

// Definicion de Array de Roles para los Usuarios
let Roles=[
    {RoleId:"1", RoleName: "Admin"},
    {RoleId:"2", RoleName:"Estudiante"},
    {RoleID:"3", RoleName:"Profesor"}
]

// Definicion de Array de Estados Posibles para los Usuarios

let EstadosUser=[
    {estadoId:"1", estadoName: "Activo"},
    {estadoId:"2", estadoName:"Inactivo"},
]

//Creacion de Usuarios para guardar en LocalStorage

let users=[];
let adminUserB = new Usuario("belenadmin","12345","Belen","Neme","1","1","belen@gmail.com");
//adminUserB.userRole=Roles[0]

let regularUserB = new Usuario("BelenUser","654321","Belen","Neme","2","2","b@gmail.com");
//regularUserB.userRole=Roles[1]
users.push(adminUserB,regularUserB);

//Manejo del LocalStorage
localStorage.clear();
localStorage.setItem("users",JSON.stringify(users));

//Validar Acceso de los Usuarios

function validarAcceso(){

    let us= document.getElementById("inputUser").value
    console.log(us)
    let pass= document.getElementById("inputPassword").value

    //Traigo del LocalStorage el Array de Usuarios
    let usuarios= localStorage.getItem("users",users);
    usuarios = JSON.parse(usuarios);

    let u = usuarios.find(function(i){
        return i.userName===us
    })
    //console.log(u);
    if(u){
        if(u.userPassword===pass){
            if(u.userRole==="1"){
                //MOSTRAR PAGINA DE ADMINISTRADOR
                window.location.replace("file:///C:/Users/belen/OneDrive/Documentos/RollingCode/3I/CursonProject/adminHome.html")
                //alert("ERES UN ADMINISTRADOR")
            }else{
                alert("NO ERES UN ADMINISTRADOR")
                // MOSTRAR LA OPCION EN LA LANDING PAGE PARA CARGAR REVIEWS Y ACTUALIZAR LO Q SERIA EL PERFIL
                
            }
        }else{
            alert("Usuario o contraseña invalido")
        }
    }else{
        alert("No te encuentras registrado en CursOn")
    }

}

