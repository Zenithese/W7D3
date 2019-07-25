import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  const { pokemon } = props;
  return (
    <li key={pokemon.id}>
      <Link to={`pokemon/${pokemon.id}`}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url}></img>
      </Link>
    </li>
  )
}



export default PokemonIndexItem;       