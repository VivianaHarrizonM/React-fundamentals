const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio: 380,
  disponible: true,
}

//const nombre = producto.nombre;
//console.log(nombre);

//Destructuring
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);