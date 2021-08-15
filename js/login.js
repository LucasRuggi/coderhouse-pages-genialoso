




function loginUsuario(event){
    event.preventDefault();

    let email = $("#ingresoEmail").value;
    let pass = $("#ingresoPass").value;
    const passyEmail = localStorage.getItem(email);

    if(passyEmail == pass){
        localStorage.setItem("usuarioLogueado","yes");
        window.open("../index.html" , "_self");
    }else{
        alert("El email o la contraseña es incorrecto");
    }

}



function logoutUsuario(){
    localStorage.setItem("usuarioLogueado","no");
    mostrarNavBar()
}