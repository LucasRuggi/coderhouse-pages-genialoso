



$.getJSON("../db/productos.json", mostrarLosProductos)

function mostrarLosProductos(jsonProductos){
    
jsonProductos.forEach(producto => 
      $("#productosHardcoding").prepend(
        `
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
            <button class="botonesProductos" onclick="precioCompleto(${producto.id})">Agregar</button>
            </div>
            </div>
        `
      )
    )
}




    















/*$.getJSON(jsonProductos, function (response, status) {
  if (status === "success") {
    for (const producto of response.productos) {
      $("#productosHardcoding").prepend(
        `
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
      );
    }
  }
});*/
