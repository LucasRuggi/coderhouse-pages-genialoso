let hardcodingProduct = [{
    titulo: "Velador Cubo",
    img: "../imagenes/velador1.png",
    descripcion: "Es un velador cubo de 7x7 de madera de pino, cuenta con un acabado de barniz para una mejor terminacion",
    precio: 1799,
    id: 1,
}, {
    titulo: "Velador Tulipa",
    img: "../imagenes/velador2.png",
    descripcion: "El velador tulipa cuenta con una base de madera de aglomerado con un acabado en barniz y una tulipa de vidrio",
    precio: 2199,
    id: 2,
}, {
    titulo: "Espejo Loren",
    img: "../imagenes/espejo.png",
    descripcion: "Es un espjero con luces, su medida es de 45cm x 70 cm, las luces son leds con un consumo de 3W y tiene una terminacion en color blanco",
    precio: 6699,
    id: 3,
}, {
    titulo: "Lampara Colgante",
    img: "../imagenes/colgante.png",
    descripcion: "Es una lampara para pared, que cuenta con un cable de color negro y un acabado de barniz. La madera es de pino para mejor terminacion",
    precio: 2199,
    id: 4,
}];


let productos = [];

class Producto {
    constructor(categoria, nombre, precio, id) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
    mostrarProducto() {
        console.log(this.categoria, this.nombre, this.precio, this.id);

    }
}

function cargarProducto() {

    let nombre;
    let precio;
    let id;
    let categoria;
    let nuevoProducto;


    categoria = prompt("Ingrese la categoria del producto: ");
    nombre = prompt("Ingrese el nombre del producto: ");
    precio = parseInt(prompt("Ingrese el precio del producto: "));
    id = parseInt(prompt("Ingrese el id del producto: "));

    nuevoProducto = new Producto(categoria, nombre, precio, id);
    nuevoProducto.mostrarProducto();

    productos.push(nuevoProducto);
    localStorage.setItem("productos", productos);
}


function mostrarListadoProductos() {
    productos.forEach(x => console.log(x));
}

function eliminarProducto() {

    let nombreProducto = prompt("Ingresa el nombre del producto que queres eliminar: ");
    productos = productos.filter(x => nombreProducto != x.nombre);
    localStorage.setItem("productos", productos);

}


// let productosJson = JSON.stringify(productos);

