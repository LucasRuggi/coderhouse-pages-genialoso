const mostrarCarrito = document.querySelector('.carrito');
const pantalla = document.querySelector('.numero');


let resultadofinal = 0;

if(localStorage.getItem("productos") == null){
    localStorage.setItem("productos", JSON.stringify([]))
}


    async function precioCompleto(id){
  
        let productos = await $.getJSON("../db/productos.json")
        let producto = productos.find(producto => producto.id == id)
        

        let carrito = localStorage.getItem("productos")
        carrito = JSON.parse(carrito);

        carrito.push(producto)


        localStorage.setItem("productos",JSON.stringify(carrito))

        mostrarCarritoEnHtml();

    }
 
 
function mostrarCarritoEnHtml(){


    let carrito = localStorage.getItem("productos")
    carrito = JSON.parse(carrito);

    let carritoItems = '';
    let precioTotalCarrito = 0;


    carrito.forEach(x => {
    let citemnombre = x.titulo;
    let citemprecio = x.precio;
    let citemfoto = x.foto;

    precioTotalCarrito += citemprecio;
    pantalla.innerHTML = precioTotalCarrito;

    carritoItems += `<li>${citemfoto} ${citemnombre}: ${citemprecio}</li>`;
    mostrarCarrito.innerHTML = carritoItems;

})}
 
mostrarCarritoEnHtml();

 
 
function resetCarrito(){

    localStorage.setItem("productos",JSON.stringify([]))
    mostrarCarrito.innerHTML = "";
    pantalla.innerHTML = "";



}