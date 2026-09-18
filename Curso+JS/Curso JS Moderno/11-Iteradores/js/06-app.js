
console.log("*********ForEach*********");

const pendientes = ["Tarea","Comer","Proyecto","Estudiar"];

//pendientes.forEach( (pendiente) => console.log(pendiente));

pendientes.forEach( (pendiente, indice) => 
{
  console.table(`${indice} : ${pendiente}`);
});

const carrito =[
  {nombre: 'Monitor 27 Pulgadas', precio: 580},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 280},
  {nombre: 'Audifonod', precio: 380},
  {nombre: 'Teclado', precio: 480},
  {nombre: 'Celular', precio: 700},
];
/*
carrito.forEach( (producto) => {
  console.table(producto.precio);
});
carrito.map( (producto) => {
  console.log(producto.nombre);
});*/
const nuevoArreglo = carrito.forEach(producto =>  producto.nombre);
const nuevoArreglo2 = carrito.map( producto => producto.precio);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);