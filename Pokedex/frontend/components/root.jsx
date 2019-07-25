import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonIndexItem from './pokemon/pokemon_index_item';
export const Root = ({store}) => (
  <HashRouter>
    <Provider store={store}>
      {/* <PokemonIndexContainer/> */}
      
      <div>
        <Switch>
          {/* <Route path={`pokemon/${pokemon.id}`} component={PokemonIndexItem}/> */}
          <Route path="/" component={PokemonIndexContainer}/>
          {/* <Route path="" component={PokemonDetail}/> */}
        </Switch>
      </div>
    </Provider>
  </HashRouter>
);