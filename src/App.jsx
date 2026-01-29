import { useState, useEffect } from 'react'
import './styles/App.css'
import Score from './Score.jsx'
import pokeBall from './assets/pokeball.png'
import pokeText from './assets/logo.png'
import Card from './Card.jsx'
import { Pokedex } from 'pokeapi-js-wrapper';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

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
            url: pokemon.sprites.other["official-artwork"].front_shiny,
            id: pokemon.id
          })
        })
        setPokemons(pokemons);
      } catch(err) {
        console.error(err);
      }
    })()

  })

  const cardList = pokemons.map(pokemon => 
    <Card name={pokemon.name} url={pokemon.url} key={pokemon.id} />
  );

  return (
    <>
      <div className='top-wrapper'>
        <div className='logo'>
          <img src={pokeBall} id='pokeball' />
          <img src={pokeText} id='poketext' />
        </div>
        <div className='score-wrapper'>
          <Score name="Current Score" score={currentScore}/>
          <Score name="Top Score" score={topScore}/>
        </div>
      </div>
      <div className='main-container'>
        {cardList}
      </div>
    </>
  )
}

export default App
