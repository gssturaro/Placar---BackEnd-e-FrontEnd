import React from "react";
import Placar from "./Placar";
import './PlacarContainer.scss';

const PlacarContainer = () => {
    return(
        <div className="PlacarContainer">
            <Placar time="FrontEnd" />
            <Placar time="BackEnd" />
        </div>
    )
}

export default PlacarContainer;