/**
 * <div class="results__empty">
 *    No Pokemons found
 * </div>
 */
import pokemons from 'json-pokemon';

export function createNoPokemons() {
  const element = document.createElement('div');
  element.className = 'results__empty';
  const content = document.createTextNode('No Pokemons found');
  element.appendChild(content);
  return element;
}
// console.log(pokemons.find('Pikachu'));

export function createPokemons(pokemons) {
  // const pokemonFind = pokemons.filter(obj => {
  //   return obj.name === "Pikachu";
  // console.log(pokemonName);
  /**
   * This function could receive an array of pokemons and creates elements for each of them.
   * You can use createPokemon to create a single element.
   */
}

export function createPokemon(pokemon) {
  /**
   * This function could create a new element and displays the properties of a pokemon.
   */
}

export function removeChilds(parent) {
  parent.innerHTML = '';
}

export function appendChild(parent, child) {
  parent.appendChild(child);
}

export function setChild(parent, child) {
  removeChilds(parent);
  appendChild(parent, child);
}

export function resetInput(input) {
  input.value = '';
}
