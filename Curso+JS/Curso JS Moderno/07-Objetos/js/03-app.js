
const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio: 380,
  disponible: true,
}

producto.imagen = "imagen.jpg";
delete producto.disponible;

console.log(producto);