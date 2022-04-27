import { Component } from "react";
import './card-style.css';

class Card extends Component {
    render() {

        // use exact props name as defined in parent component (yankee) when accessing / de-structuring this.props
        const { PlayerID, FanDuelName, Jersey, Position, BatHand, Status } = this.props.yankee;

        return (
            <div className="card-container" key={PlayerID}>
                <img alt="yankee faceshot" src={`https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/${PlayerID}.png`}></img>
                <h2>{FanDuelName}</h2>
                <h3>#{Jersey} / {Position} / {BatHand}</h3>
                <p>{Status}</p>
            </div>
        )
    }
}

export default Card;



// to access props without destructuring: this.props.yankee.Position