for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("Este es el Cinco");
    break;
  }
  console.log(`Numero: ${i}`);
  
}


//break rompe totalmente
//Continuo continua el ciclo

const carrito =[
  {nombre: 'Monitor 27 Pulgadas', precio: 580},
  {nombre: 'Televisión', precio: 100},
  {nombre: 'Tablet', precio: 280},
  {nombre: 'Audifonod', precio: 380},
  {nombre: 'Teclado', precio: 480},
  {nombre: 'Celular', precio: 700},
];
for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} Tiene desciento`);
    continue;
  }
  console.log(carrito[i].nombre);
  
}
