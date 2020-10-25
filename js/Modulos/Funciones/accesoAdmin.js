userLogueados= (localStorage.getItem("usuariosLogueados"));
let usuarioLogueado;
if(userLogueados!=""){
    usuarioLogueado= JSON.parse(userLogueados);
}
validacionAdminPage();

function validacionAdminPage(){
    let pagina = location.pathname;
    if (pagina ==="/C:/Users/belen/OneDrive/Documentos/RollingCode/3I/CursonProject/adminHome.html"){
        if(userLogueados===""){
            location = "/C:/Users/belen/OneDrive/Documentos/RollingCode/3I/CursonProject/index.html"
        }else if (usuarioLogueado[0].userRole != "1") {
            console.log("No eres Administrador")
            location = "/C:/Users/belen/OneDrive/Documentos/RollingCode/3I/CursonProject/index.html";
        }
    }
};