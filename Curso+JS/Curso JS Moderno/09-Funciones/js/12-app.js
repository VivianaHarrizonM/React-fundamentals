const carrito = [
  {nombre: 'Monitor', precio: 4560},
  {nombre: 'television', precio: 5060},
  {nombre: 'Tablet', precio: 2600},
  {nombre: 'Audifonos', precio: 560},
  {nombre: 'Celular', precio: 6500},
];

const nuevoArreglo = carrito.map(producto => `${producto.nombre} --Precio ${producto.precio}`);

  carrito.forEach((producto) => `${producto.nombre} -- Precio:${producto.precio}`);

console.table(nuevoArreglo);