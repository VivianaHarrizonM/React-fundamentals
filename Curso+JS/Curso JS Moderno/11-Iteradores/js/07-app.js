console.log("*********ForOf*********");

const pendientes = ["Tarea","Comer","Proyecto","Estudiar"];


const carrito =[
  {nombre: 'Monitor 27 Pulgadas', precio: 580},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 280},
  {nombre: 'Audifonod', precio: 380},
  {nombre: 'Teclado', precio: 480},
  {nombre: 'Celular', precio: 700},
];

for( let pendiente of pendientes){
  console.log(pendiente);
}

for( let producto of carrito){
  console.log(producto.nombre);
}