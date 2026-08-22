const carrito = [];


//Definir un producto
const producto = {
  nombre: "Monitor 45 pulgadas",
  precio: 4000,
}

const producto2 ={
  nombre: "celular",
  precio: 4500,
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 200
}
carrito.unshift(producto3);

console.table(carrito);

