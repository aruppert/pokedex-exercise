/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
import pokemons from 'json-pokemon';
import { createNoPokemons } from './elements';
import { all } from 'q';
// console.log(pokemons);
export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemon.name.toLowerCase();
    return normalizedPokemonName.startsWith(normalizedName);
  });

  return pickPokemons;

  // export function invalidInput ()
}

export function sortPokemonsByName(pokemons, sortDirection = 'DESC') {
  // const allPokemons = pokemons;

  // pokemons.name.sort(function(a, b) {
  //   const nameA = a.name.toLowerCase(),
  //     nameB = b.name.toLowerCase();
  //   if (nameA < nameB)
  //     //sort string ascending
  //     return -1;
  //   if (nameA > nameB) return 1;
  //   return 0; //default return value (no sorting)
  // });
  // /**
  //  * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
  //  *
  //  * See Array.prototype.sort()
  //  */

  const sortedPokemons = pokemons.sort((pokemonA, pokemonB) => {
    const nameA = pokemonA.name.toLowerCase();
    const nameB = pokemonB.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  if (sortDirection === 'DESC') {
    sortedPokemons.reverse();
  }
  return pokemons;
}
