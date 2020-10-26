function validarLogUp(){
    console.log("Entre a la funcion de LogUp")
    let userName = document.getElementById("inputNewUser")
    console.log(userName)
    console.log(userName.value)
    let userNombre = document.getElementById("inputNewNombre")
    let userApellido = document.getElementById("inputNewApellido")
    let userPassword = document.getElementById("inputNewPassword")
    let userEmail = document.getElementById("inputNewEmail")

    if (userName.value == "") {
        userName.className = "input-review valida";
    } else {
        userName.className = "input-review ok";
    }
    if (userNombre.value == "") {
        userNombre.className = "input-review valida";
    } else {
        userNombre.className = "input-review ok";
    }
    if (userApellido.value == "") {
        userApellido.className = "input-review valida";
    } else {
        userApellido.className = "input-review ok";
    }if (userPassword.value == "") {
        userPassword.className = "input-review valida";
    } else {
        userPassword.className = "input-review ok";
    }
    if (userEmail.value == "") {
        userEmail.className = "input-review valida";
    } else {
        userEmail.className = "input-review ok";
    }

    if ( userName.value == "" || userNombre.value == "" || userApellido.value == "" || userEmail.value == "" ||
        userPassword.value == "" ){
        return;
    }else{
        
        let usersArray = localStorage.getItem("users") || []
        if(users.length>0){
            users = JSON.parse(usersArray)
        }else{
            users = []
        }
        let newUser = new Usuario()
        newUser.userName = userName.value
        newUser.userFirstName= userNombre.value
        newUser.userLastName = userApellido.value
        newUser.userEmail = userEmail.value
        newUser.userPassword= userPassword.value
        newUser.userRole = "2"
        newUser.userStatus = "1"
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users))
        limpiarFormUser();
        alert("El usuario fue guardado en el Local Storage");
    }
}

const limpiarFormUser = () => {
    let userName = document.getElementById("inputNewUser")
    let userNombre = document.getElementById("inputNewNombre")
    let userApellido = document.getElementById("inputNewApellido")
    let userPassword = document.getElementById("inputNewPassword")
    let userEmail = document.getElementById("inputNewEmail")

    userName.value = "";
    userNombre.value = "";
    userApellido.value = "";
    userPassword.value="";
    userEmail.value="";
  
    userName.className = "form-control";
    userNombre.className = "form-control";
    userApellido.className = "form-control";
    userPassword.className="form-control";
    userEmail.className="form-control"

};
