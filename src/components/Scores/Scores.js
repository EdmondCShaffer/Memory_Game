import React from "react";
import "./Scores.css";

const Scores = props => (
    
    
        <div class="card scoreCard lighten-3">
            <div className=" score center-align">Current Score: {props.score}</div>
            <div className=" highScore center-align">High Score: {props.highScore}</div>
        </div>

)

export default Scores