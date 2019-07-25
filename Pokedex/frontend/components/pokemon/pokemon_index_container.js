import React from 'react';
import {connect} from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const msp = (state = {}) => {
  const { pokemon } = state.entities;
  return { pokemon: Object.values(pokemon) }
}

const mdp = (dispatch) => {
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon()),
    selectAllPokemon: () => dispatch(selectAllPokemon()),
  }
}

export default connect(msp, mdp)(PokemonIndex);