import './styles/Card.css'

function Card({name, url}) {

    return (
        <div className='card'>
            <div className='img-wrapper'>
                <img className='card-img' src={url}/>
            </div>
            <p className='card-name'>{name}</p>
        </div>
    )
}

export default Card