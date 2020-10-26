userLogueados= (localStorage.getItem("usuariosLogueados"));
let usuarioLogueado;
if(userLogueados!=""){
    usuarioLogueado= JSON.parse(userLogueados);
}
validacionAdminPage();

function validacionAdminPage(){
    let pagina = location.pathname;
    if (pagina ==="/CursonProject/adminHome.html"){
        if(userLogueados===""){
            location = "/CursonProject/";
        }else if (usuarioLogueado[0].userRole != "1") {
            console.log("No eres Administrador")
            location = "/CursonProject/";
        }
    }
};