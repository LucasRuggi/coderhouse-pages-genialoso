const mostrarCarrito = document.querySelector(".carrito");
const pantalla = document.querySelector(".numero");

let resultadofinal = 0;

if (localStorage.getItem("productos") == null) {
  localStorage.setItem("productos", JSON.stringify([]));
}

async function precioCompleto(id) {
  let productos = await $.getJSON("../db/productos.json");
  let producto = productos.find((producto) => producto.id == id);

  let carrito = localStorage.getItem("productos");
  carrito = JSON.parse(carrito);

  carrito.push(producto);

  localStorage.setItem("productos", JSON.stringify(carrito));

  mostrarCarritoEnHtml();
}

function mostrarCarritoEnHtml() {
  let carrito = localStorage.getItem("productos");
  carrito = JSON.parse(carrito);

  let carritoItems = "";
  let precioTotalCarrito = 0;

  carrito.forEach((x) => {
    let citemnombre = x.titulo;
    let citemprecio = x.precio;

    precioTotalCarrito += citemprecio;
    

    carritoItems += `<li> <i class=\"fas fa-lightbulb\"></i> ${citemnombre}: ${citemprecio}  <button  onclick=\"eliminarProducto(${x.id})\"  >  <i class=\"fas fa-minus-circle\"  ></i> </button> </li>`;
  });
  mostrarCarrito.innerHTML = carritoItems;
  pantalla.innerHTML = precioTotalCarrito;
}

mostrarCarritoEnHtml();

function resetCarrito() {
  localStorage.setItem("productos", JSON.stringify([]));
  mostrarCarrito.innerHTML = "";
  pantalla.innerHTML = "";
}

function eliminarProducto(id) {
  let carrito = localStorage.getItem("productos");
  carrito = JSON.parse(carrito);
  let posicion = carrito.findIndex((x) => id == x.id);
  carrito.splice(posicion, 1);
  localStorage.setItem("productos", JSON.stringify(carrito));
  console.log(posicion);
  mostrarCarritoEnHtml();
}
