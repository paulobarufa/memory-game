import './styles/Card.css'

/* <Card name={pokemon.name} url={pokemon.url} key={pokemon.id} cardProps={cardProps} />

  const cardProps = {
    topScore: topScore,
    setTopScore: setTopScore,
    currentScore: currentScore,
    setCurrentScore: setCurrentScore,
    guessArray: guessArray,
    setGuessArray: setGuessArray,
    shufflePokemons: shufflePokemons
  }
*/

function Card({name, url, id, cardProps}) {

    const handleClick = (e) => {
        const clicked = e.target.dataset.id;

        if (cardProps.guessArray.includes(clicked)) {
            if (cardProps.currentScore > cardProps.topScore) cardProps.setTopScore(cardProps.currentScore)
            cardProps.setGuessArray([clicked])
            cardProps.setCurrentScore(1)
        } else {
            cardProps.setGuessArray([...cardProps.guessArray, clicked])
            cardProps.setCurrentScore(cardProps.currentScore + 1)
        }
        cardProps.shufflePokemons()

    }

    return (
        <div className='card' onClick={handleClick} data-id={id}>
            <div className='img-wrapper' data-id={id}>
                <img className='card-img' src={url} data-id={id}/>
            </div>
            <p className='card-name' data-id={id}>{name}</p>
        </div>
    )
}

export default Card