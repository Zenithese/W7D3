import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.pokemon.map(pokemon => {
      return <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
    })

    return (
      <ul>
        {allPokemon}
      </ul>
    )
  }
}

export default PokemonIndex;