import {type Hero, heroes, Owner } from "../data/heroes.data"

const getHeroById = (id: number): Hero|undefined => {
  const hero = heroes.find((hero) =>{
    return hero.id === id;
  });

  // if(!hero){
  //   throw new Error(`No existe un héroe con el id ${id}`);
  // }

  return hero;
}
console.log(getHeroById(5));

export const getHeroByOwner = (owner: Owner) => {
  const heroByOwner = heroes.filter((hero) => hero.owner);
    return heroByOwner;
  };
// export const getHeroByOwner = (owner: Owner) => 
//   heroes.filter((hero) => hero.owner === owner);
// ;