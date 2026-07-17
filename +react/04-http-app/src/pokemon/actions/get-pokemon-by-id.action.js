/**
 * Fetch Pokemon information from PokeAPI
 * @param {number} id 
 * @returns {Object} pokemon information
 */

export const getPokeonById = async ( id ) => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  //console.log({ data });
  const pokemonData = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default
  };

  console.log({ pokemonData });
  return pokemonData;

  // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  // .then( response => {
  //   //console.log( { response } );
  //   //throw new Error('Pokemon no existe');
  //   return response.json();
  // })
  // .then( data => {
  //   console.log({ data });
  // })
  // .catch( error => {
  //   //console.log( error );
  // });
  return{}

}