import { Component } from "react";
import Card from "../player-card/card";
import './card-list-style.css';

class CardList extends Component {

    render() {

        console.log(this.props);
        const { yankees } = this.props;
        
        return (
            <div className="card-list">
                {
                    yankees.map((yankee) => {
                        return (
                            <Card yankee={yankee} key={yankee.PlayerID} />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;