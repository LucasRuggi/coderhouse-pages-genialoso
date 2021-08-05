function mostrarNavBar(){
    if(localStorage.getItem("usuarioLogueado") === "yes"){
        document.getElementById("login").style.display="none"
        document.getElementById("logout").style.display="block"
        document.getElementById("carrito").style.display="block"
    }else{
        document.getElementById("login").style.display="block"
        document.getElementById("logout").style.display="none"
        document.getElementById("carrito").style.display="none"
    }    
}

mostrarNavBar();