import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component{
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.pokemon.map(pokemon => {
      return (
        <li key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image_url}></img>   
        </li>
      )
    })

    return (
      <ul>
        {allPokemon}
      </ul>
    )
  }
}

export default PokemonIndex;