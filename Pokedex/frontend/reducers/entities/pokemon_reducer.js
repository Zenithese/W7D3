import { RECEIVE_ALL_POKEMON } from '../../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  const oldState = Object.freeze(state);
  const { pokemon } = action;
  let newState;

  switch(action.type){
    case RECEIVE_ALL_POKEMON: 
      // return Object.assign({},action.pokemon);
      return merge({}, oldState, pokemon);    
    default:
      return state;
  }
}