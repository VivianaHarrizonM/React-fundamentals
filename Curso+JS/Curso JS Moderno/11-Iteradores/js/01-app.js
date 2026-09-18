
/*for (let i = 0; i <= 10; i++) {
  console.log(`Numero: ${i}`);
  
}*/

//En un for loop como identificas los numeros que seas pares y nones

/*for (let i = 1; i <= 28; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es PAR`)
  }else{
    console.log(`Numero: ${i} es IMPAR`);
  }
  
}*/

const carrito =[
  {nombre: 'Monitor 27 Pulgadas', precio: 580},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 280},
  {nombre: 'Audifonod', precio: 380},
  {nombre: 'Teclado', precio: 480},
  {nombre: 'Celular', precio: 700},
];

console.log(carrito[0]);

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
  
}
