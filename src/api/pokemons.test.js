import { getPokemonsByName, sortPokemonsByName } from './pokemons';
import getPokemons from 'json-pokemon/getPokemon';

test('filter pokemons by `pik` returns Pikachu and Pikipek', () => {
  const pokemons = getPokemonsByName('pik');

  expect(pokemons.length).toBe(2);
  expect(pokemons[0].name).toBe('Pikachu');
  expect(pokemons[1].name).toBe('Pikipek');
});

test('ascending sort pokemons by name', () => {
  const snover = getPokemons.getPokemonByName('Snover');
  const bonsly = getPokemons.getPokemonByName('Bonsly');
  const excadrill = getPokemons.getPokemonByName('Excadrill');
  const pokemons = [snover, bonsly, excadrill];

  const sortedPokemons = sortPokemonsByName(pokemons, 'ASC');
  expect(sortedPokemons.length).toBe(3);
  expect(sortedPokemons[0].name).toBe('Bonsly');
  expect(sortedPokemons[1].name).toBe('Excadrill');
  expect(sortedPokemons[2].name).toBe('Snover');
});

test('descending sort pokemons by name', () => {
  const snover = getPokemons.getPokemonByName('Snover');
  const bonsly = getPokemons.getPokemonByName('Bonsly');
  const excadrill = getPokemons.getPokemonByName('Excadrill');
  const pokemons = [snover, bonsly, excadrill];

  const sortedPokemons = sortPokemonsByName(pokemons, 'DESC');

  expect(sortedPokemons.length).toBe(3);
  expect(sortedPokemons[0].name).toBe('Snover');
  expect(sortedPokemons[1].name).toBe('Excadrill');
  expect(sortedPokemons[2].name).toBe('Bonsly');
});

// blub
