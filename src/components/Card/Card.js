import '../../styles/card.css'

export const Card = (props) => {
 
    return(
        <div className="card">
            <img src={props.src} className="card__image"/>
            <div className="card__information">
                <p className="countri-name">{props.name}</p>
                <div className="information__block">
                    <p className="information__title">Popaltion</p>
                    <p className="information__subtitle">{props.population}</p>
                </div>
                <div className="information__block">
                    <p className="information__title">Region</p>
                    <p className="information__subtitle">{props.region}</p>
                </div>
                <div className="information__block">
                    <p className="information__title">Capital</p>
                    <p className="information__subtitle">{props.capital}</p>
                </div>
            </div>
        </div>
    )
}