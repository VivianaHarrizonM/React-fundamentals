
function sumar(a, b){
  return( a + b)
}

const resultado = sumar(2 , 3);

//console.log(resultado);

//Ejemplo más avanzado
let total = 8;
function agregarCarrito(precio){
  return total += precio;

}
function calcularImpuesto(total){
  return total * 1.16;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(500);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar es de ${totalPagar}`)
