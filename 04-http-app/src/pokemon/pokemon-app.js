import { getPokeonById } from "./actions/get-pokemon-by-id.action";

/**
 * ESta función crea la aplicación en el div enviado
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = ( element ) => {

  document.title = "Pokemon App";
  const titleElement = document.querySelector('#app-title');
    
  //if (element) titleElemnt.innerHTML='Pokemon App';
  titleElement && ( titleElement.innerHTML = 'Pokemon App');

  console.log('Hola mundo');
  console.log( element );

  getPokeonById( 1 );
}