import { combineReducers} from 'redux';
import PokemonReducer from './pokemon_reducer';

export const entitiesReducer = combineReducers({
    pokemon: PokemonReducer,
});
