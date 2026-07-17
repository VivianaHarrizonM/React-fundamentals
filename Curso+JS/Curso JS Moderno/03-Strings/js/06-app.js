const producto6 = 'Monitor 32 pulgadas';

//.repeat te va a prepetir una cadena de texto..

const texto = 'En Promocion'.repeat(3);

console.log(texto);
console.log(`${producto6} ${texto}  |!|`);

//split, dividir un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, correr, escuchar música, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo js #Viviana123348";
console.log(tweet.split('#'));