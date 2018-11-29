import React from "react";
import "./Card.css";



const Card = props => (

    <div className="col s6 l3">
        <div className="row">
            <div className="cardSize card hoverable" id={props.id}>
                <img className="image"
                    src={props.src}
                    alt={props.alt}
                    onClick={() => props.handleClicks(props.id)}
                />
            </div>
        </div>
    </div>
)

export default Card;