function mostrarNavBar(){
    if(localStorage.getItem("usuarioLogueado") === "yes"){
        $("#login").hide()
        $("#logout").show()
        $("#carrito").show()

    }else{
        $("#login").show()
        $("#logout").hide()
        $("#carrito").hide()

    }    
}

mostrarNavBar();