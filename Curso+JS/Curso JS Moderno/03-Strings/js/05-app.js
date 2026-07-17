const producto5 = 'Monitor 20 pulgadas ';


// .replace reemplazar
console.log(producto5);
console.log(producto5.replace('Pulgadas', '"'));
console.log(producto5.replace('Monitor', 'Monitor curvo'));

//.slice para cortar
console.log(producto5.slice(0, 18));
console.log(producto5.slice(3,1));

//Alternativa a slice
console.log(producto5.substring(0, 10));
console.log(producto5.substring(3,1));
