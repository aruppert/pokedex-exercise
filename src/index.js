// required to use async/wait
import 'babel-polyfill';

import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput
} from './api/elements';
import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);

function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');

  // Get all Pokemons
  const allPokemons = getAllPokemons();
  const allSortedPokemons = sortPokemonsByName(allPokemons);
  // Reset input and results
  resetInput(searchInput);
  const allPokemonElements = createPokemonElements(allSortedPokemons);
  setChild(resultsElement, allPokemonElements);
  // Add event listeners

  /**
   * Find the correct event to listen for input changes.
   */
  searchInput.addEventListener('input', event => {
    const searchValue = event.target.value;
    const pokemons = getPokemonsByName(searchValue);

    if (pokemons.length === 0) {
      console.log('YEah');
      setChild(resultsElement, createNoPokemons());
    } else {
      const pokemonElements = createPokemonElements(pokemons);
      setChild(resultsElement, pokemonElements);
    }
  });

  /**
   * Later, you can add sort functionality.
   */
}
