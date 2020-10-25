let userLogueados = (localStorage.getItem("usuariosLogueados"));
let usuarioLogueado;
if(userLogueados.lenght>0){
    usuarioLogueado= JSON.parse(userLogueados);
}else{
    usuarioLogueado=[]
}
validacionAdminPage();

function validacionAdminPage(){
    let pagina = location.pathname;
    if (pagina ==="/CursonProject/adminHome.html"){
        if(userLogueados===""){
            location = "/CursonProject/index.html";
        }else if (usuarioLogueado[0].userRole != "1") {
            console.log("No eres Administrador")
            location = "/CursonProject/index.html";
        }
    }
};