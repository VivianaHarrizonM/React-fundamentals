const autenticado = false;
const puedePagar = true;

console.log(autenticado ? 'Si, puede pagar' : 'No, esta autenticado');

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 680;
if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
  if(efectivo > totalPagar){
    console.log('Si,pagaste en efectivo');
  }else{
    console.log('No pagaste con efectivo');
  }
  console.log('Si podemos pagar');
}else{
  console.log('Fondos Insuficientes')
}