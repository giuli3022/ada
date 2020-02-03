import React from "react";
import './CardTitleContent.css';

const CardTitleContent = props => {
    return (
        <div className="card-title-content">
            <h2 className="card-subtitle-director">{props.director}</h2>
            <h1 className="card-title-movie">{props.title}</h1>
        </div>
    )
}

export default CardTitleContent;
