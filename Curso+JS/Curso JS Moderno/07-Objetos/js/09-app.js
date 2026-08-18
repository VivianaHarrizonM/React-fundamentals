//Para hacer que un objeto se comporte como una constante
"use strict";

const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio: 380,
  disponible: true,
}


Object.seal(producto);
producto.disponible = false;

console.log(producto);

console.log(Object.isSealed(producto));
