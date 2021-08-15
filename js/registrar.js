

function nuevoUsuario(event){
    event.preventDefault();
    let email = $("#registroEmail").value;
    let pass = $("#registroPass").value;
    cargarUsuario(email,pass)
}   


function cargarUsuario(email,pass){

    if(!corroborrarEmail(email)){

        localStorage.setItem(email,pass);
        localStorage.setItem("usuarioLogueado","yes");
        window.open("./login.html" , "_self");
    }else{
        alert("El email ya esta en uso");
    }

}

function corroborrarEmail(email){
    return localStorage.getItem(email);
}


