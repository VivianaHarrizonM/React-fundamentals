const producto = {
  nombre: "Monitor 45 pulgadas",
  precio: 4500,
  disponibilidad: true,
}

// const nombre = producto.nombre;
// Console.log(nombre);

//Destructuring
const {nombre} = producto;
console.log(nombre);

//Destructuring whit arrays
const numeros = [10,20,30,40,50];

const [primero, ...quinto ] = numeros;
console.log(primero);

console.log(quinto);