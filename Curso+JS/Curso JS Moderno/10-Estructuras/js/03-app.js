//Operador mayor que > y menor que <
const dinero = 500;
const totalPagar = 389;
let resultado;

if (dinero > totalPagar) {
  console.log("El total a pagar es: " + totalPagar);
  console.log("Usted paga con: " + dinero);
  resultado = dinero - totalPagar;
  console.log("Pago realzado, su cambio es: " + resultado);
} else {
  console.log("Sin fando suficiente");
}

