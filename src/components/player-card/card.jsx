import { Component } from "react";
import './card-style.css';

class Card extends Component {
    render() {

        // use exact props name as defined in parent component (yankee) when accessing / de-structuring this.props
        const { PlayerID, FanDuelName, Jersey, Position, BatHand, ThrowHand, Status, Height, Weight, Experience } = this.props.yankee;

        return (
            <div className="card-container" key={PlayerID}>
                {/* <div className="card"> */}
                    <div className="card-header"></div>
                    <div className="card-body">
                        <div className="img-holder">
                            <img alt="yankee faceshot" src={`https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/mlb/low-res/${PlayerID}.png`}></img>
                        </div>
                        <h2 className="player-name">{FanDuelName} <span className="player-number"> #{Jersey}  </span></h2>
                        <h3 className="player-info">{Position} | B/T: {BatHand}/{ThrowHand}</h3>
                        <p>{Status}</p>
                        <div className="card-footer">
                            <div className="item">
                                <h4 className="value">{Height}</h4>
                                <h5 className="stat">Height (in)</h5>
                            </div>
                            <div className="item">
                                <h4 className="value">{Weight}</h4>
                                <h5 className="stat">Weight (lbs)</h5>
                            </div>
                            <div className="item">
                                <h4 className="value">{Experience}</h4>
                                <h5 className="stat">Years Experience</h5>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default Card;



// to access props without destructuring: this.props.yankee.Position