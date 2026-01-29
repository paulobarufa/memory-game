import { useState, useEffect } from 'react'
import './styles/App.css'
import { Pokedex } from 'pokeapi-js-wrapper';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const P = new Pokedex({ cacheImages: true })

  useEffect(() => {

    (async () => {
      try {
        const data = await P.resource([
          "/api/v2/pokemon/1",
          "/api/v2/pokemon/6",
          "/api/v2/pokemon/7",
          "/api/v2/pokemon/14",
          "/api/v2/pokemon/18",
          "/api/v2/pokemon/25",
          "/api/v2/pokemon/21",
          "/api/v2/pokemon/30",
          "/api/v2/pokemon/35",
          "/api/v2/pokemon/37",
          "/api/v2/pokemon/39",
          "/api/v2/pokemon/28",
        ])
        const pokemons = [];
        data.forEach((pokemon) => {
          pokemons.push({
            name: pokemon.name,
            url: pokemon.sprites.other["official-artwork"].front_shiny
          })
        })
        setPokemons(pokemons);
      } catch(err) {
        console.error(err);
      }
    })()

  })

  return (
    <>
    </>
  )
}

export default App
