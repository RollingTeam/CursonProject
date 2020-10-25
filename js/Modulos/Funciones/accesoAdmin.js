userLogueados= (localStorage.getItem("usuariosLogueados"));
let usuarioLogueado;
if(userLogueados!=""){
    usuarioLogueado= JSON.parse(userLogueados);
}
validacionAdminPage();

function validacionAdminPage(){
    let pagina = location.pathname;
    if (pagina ==="/C:/Users/Florencia/OneDrive/Documentos/Programaci%C3%B3n/Proyectos/CursOn/CursonProject/adminHome.html"){
        if(userLogueados===""){
            location = "/C:/Users/Florencia/OneDrive/Documentos/Programaci%C3%B3n/Proyectos/CursOn/CursonProject/index.html";
        }else if (usuarioLogueado[0].userRole != "1") {
            console.log("No eres Administrador")
            location = "/C:/Users/Florencia/OneDrive/Documentos/Programaci%C3%B3n/Proyectos/CursOn/CursonProject/index.html";
        }
    }
};