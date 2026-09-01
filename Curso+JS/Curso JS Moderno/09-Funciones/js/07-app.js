
iniciarApp();
function iniciarApp(){
  console.log('Iniciando App');

  segundaFuncion();
}

function segundaFuncion(){
  console.log('Desde la segunda funcion');

  usuarioAutenticado('Viviana');
}

function usuarioAutenticado(usuario){
  console.log('Autenticando usuario...');
  console.log(`Usuario autenticado exitosamente: Bienvenido ${usuario} °° `)
}
