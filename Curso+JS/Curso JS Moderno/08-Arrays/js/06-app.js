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

const producto3 = {
  nombre: "Teclado",
  precio: 200
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]


console.table(resultado);

