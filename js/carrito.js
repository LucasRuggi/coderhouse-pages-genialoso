const mostrarCarrito = document.querySelector('.carrito');
const pantalla = document.querySelector('.numero');

let carrito = [];
let resultadofinal = 0;




function preciocompleto(articulo) {

    hardcodingProduct.forEach(x => {
        if (articulo == x.titulo) {
            resultadofinal += x.precio;
            pantalla.innerHTML = resultadofinal;
            carrito.push(x);
        }
    })

    var carritoitems = '';
    carrito.forEach(c => {
        let citemnombre = c.titulo;
        let citemprecio = c.precio;
        let citemfoto = c.foto;
        carritoitems += `<li>${citemfoto} ${citemnombre}: ${citemprecio}</li>`;
        mostrarCarrito.innerHTML = carritoitems;

    })
}

function asd(hola){
    console.log(hola)
}