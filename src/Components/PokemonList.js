import React from 'react'
import Pokemon from './Pokemon'
import NoPokemon from './NoPokemon'

const PokemonList = props => {
  const results = props.pokemen
  let pokemen
  console.log (results)
  if (results.length > 0) {
    pokemen = results.map(pokemon =>
      <Pokemon key={pokemon.name} name={pokemon.name} />
    )
  }
  else pokemen = <NoPokemon />

  console.log(pokemen)
  return(<ul className="pokemon-list">{pokemen}</ul>)
}


export default PokemonList
