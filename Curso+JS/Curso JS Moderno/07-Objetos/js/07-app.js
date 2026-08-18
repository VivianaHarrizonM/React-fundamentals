const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio: 380,
  disponible: true,
}


producto.disponible = false;
delete producto.precio;

console.log(producto);