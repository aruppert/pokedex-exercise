// import pokemons from './pokemon.json';
// import { createNoPokemons } from './elements';
// import { all } from 'q';
// console.log(pokemons);

let pokemons = [];

export async function initPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const data = await response.json();
  pokemons = data.results;
}

export async function getPokemonDetails(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  return data;
}

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

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
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
