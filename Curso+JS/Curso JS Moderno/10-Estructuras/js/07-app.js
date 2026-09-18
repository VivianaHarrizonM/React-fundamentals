const efectivo = 300;
const credito = 900;

const disponible = efectivo + credito;
const totalPagar = 680;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Sipodemos pagar');
}else{
  console.log('Fondos insuficientes');
}