import { RECEIVE_ALL_POKEMON } from '../../actions/pokemon_actions';

export default pokemonReducer = (state = {}, action) => {
  const oldState = Object.freeze(state);
  const { pokemon } = action;
  let newState;

  switch(action.type){
    case RECEIVE_ALL_POKEMON: 
      newState = {};
      action.pokemon.forEach(pokemon => {
        newState[pokemon.id] = pokemon;
      });
      return newState;    
    default:
      return state;
  }
}