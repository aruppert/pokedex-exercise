import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput,
  listElement
} from './api/elements';
import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get all Pokemons
const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonElement = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonElement);

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
