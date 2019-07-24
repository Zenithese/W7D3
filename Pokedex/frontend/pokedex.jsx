import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
// import * as PokemonAPIUtil from './util/api_util'


document.addEventListener('DOMContentLoaded', () => {
  // window.PokemonAPIUtil = {};
  // window.PokemonAPIUtil.fetchAllPokemon = PokemonAPIUtil.fetchAllPokemon;

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.store = configureStore();



  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

