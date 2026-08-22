
const carrito = [
  {nombre: 'Monitor', precio: 4560},
  {nombre: 'television', precio: 5060},
  {nombre: 'Tablet', precio: 2600},
  {nombre: 'Audifonos', precio: 560},
  {nombre: 'Celular', precio: 6500},
];

for (let i = 0; i < carrito.length; i++) {
   console.log(carrito[i].nombre);
}

carrito.forEach(function(producto) {
  console.log(`${producto.nombre} - Precio:${producto.precio}`);
});