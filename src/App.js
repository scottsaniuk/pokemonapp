import React, { Component } from 'react'
import './App.css'
import SearchForm from './Components/SearchForm'
import PokemonList from './Components/PokemonList'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    //once the component mounts, hit the pokemon api and look for pokemon
    this.performSearch()
  }

  performSearch = (query = 'yellow') => {
    fetch(`http://pokeapi.co/api/v2/pokemon-color/${query}`)
      .then(response => response.json())
      .then(pokemen => {
        this.setState({
          pokemen: pokemen['pokemon_species'],
          loading: false
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={this.performSearch}/>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PokemonList pokemen={this.state.pokemen} />
        }
      </div>
    )
  }

}
