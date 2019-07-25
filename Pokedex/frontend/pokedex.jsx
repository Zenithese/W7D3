import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors'
// import * as PokemonAPIUtil from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
  // window.PokemonAPIUtil = {};
  // window.PokemonAPIUtil.fetchAllPokemon = PokemonAPIUtil.fetchAllPokemon;
  
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  


  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

