let hardcodingProduct = 
[{
    titulo: "Velador Cubo",
    img: "../imagenes/velador1.png",
    descripcion: "Es un velador cubo de 7x7 de madera de pino, cuenta con un acabado de barniz para una mejor terminacion",
    precio: 1799,
    id: 0,
    foto: "<i class=\"fas fa-lightbulb\"></i>",
}, {
    titulo: "Velador Tulipa",
    img: "../imagenes/velador2.png",
    descripcion: "El velador tulipa cuenta con una base de madera de aglomerado con un acabado en barniz y una tulipa de vidrio",
    precio: 2199,
    id: 1,
    foto: "<i class=\"fas fa-lightbulb\"></i>",
}, {
    titulo: "Espejo Loren",
    img: "../imagenes/espejo.png",
    descripcion: "Es un espjero con luces, su medida es de 45cm x 70 cm, las luces son leds con un consumo de 3W y tiene una terminacion en color blanco",
    precio: 6699,
    id: 2,
    foto: "<i class=\"fas fa-adjust\"></i>",
}, {
    titulo: "Lampara Colgante",
    img: "../imagenes/colgante.png",
    descripcion: "Es una lampara para pared, que cuenta con un cable de color negro y un acabado de barniz. La madera es de pino para mejor terminacion",
    precio: 2199,
    id: 3,
    foto: "<i class=\"fas fa-lightbulb\"></i>",
} , {
    titulo: "Lampara Colgante1",
    img: "../imagenes/colgante.png",
    descripcion: "Es una lampara para pared, que cuenta con un cable de color negro y un acabado de barniz. La madera es de pinopara mejor terminacion",
    precio: 2199,
    id: 4,
    foto: "<i class=\"fas fa-lightbulb\"></i>",
} , {
    titulo: "Velador Tulipa1",
    img: "../imagenes/velador2.png",
    descripcion: "El velador tulipa cuenta con una base de madera de aglomerado con un acabado en barniz y una tulipa de vidrio",
    precio: 2199,
    id: 5,
    foto: "<i class=\"fas fa-lightbulb\"></i>",
}];



let productosJS = document.getElementById('productosHardcoding');


function generarProductoHTML(){
    hardcodingProduct.forEach(producto => {
        productosJS.innerHTML = productosJS.innerHTML + `
        <div class="col-xs-12 col-sm-12 col-md-3 contenedorCadaProducto">
        <div class="titulo__img">
            ${producto.titulo}
        </div>
        <div class="divInicioImg">
                <img class="inicioImagenes" src="${producto.img}" alt="velador1">
        </div>
        <h3 class="precioProductos">
            ${producto.precio}
        </h3> 
        <div class="txt__imgProductos">
            ${producto.descripcion}
        </div>
        <div class="contenedorBotonesDelCarrito">
            <button class="botonesProductos" onclick="preciocompleto('${producto.titulo}')">Agregar</button>
        </div>
    </div>
    `
    })
}

generarProductoHTML();




