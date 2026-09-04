const dinero = 500;
const totalPagar = 1389;
let resultado;
const tarjeta = false;

if (dinero > totalPagar) {
  console.log("El total a pagar es: " + totalPagar);
  console.log("Usted paga con: " + dinero);
  resultado = dinero - totalPagar;
  console.log("Pago realzado, su cambio es: " + resultado);
}else if(tarjeta){
  console.log("si puedo pagar con tarjeta")
}
 else {
  console.log("Sin fondos suficientes");
}

