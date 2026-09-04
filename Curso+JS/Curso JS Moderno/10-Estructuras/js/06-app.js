const usuario = true;
const puedePagar = false;

if(usuario && puedePagar){
  console.log('Si puedes pagar');
}else if(!puedePagar && !usuario){
  console.log('No, no puees comprar');
}
else if(!usuario){
  console.log('Inicia sesión o crea una cuenta');
}else if(!puedePagar){
  console.log('Fondos Insuficientes');
}
