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
const producto4 = {
  nombre: "Teclado2",
  precio: 200
}
carrito.unshift(producto3);
carrito.push(producto3);

console.table(carrito);
/*
//Eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar primer elemento de un arreglo
carrito.shift();
console.table(carrito) */

carrito.splice(3, 1);
console.table(carrito);