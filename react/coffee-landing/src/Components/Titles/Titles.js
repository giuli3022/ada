import React from "react";
import './Titles.scss';

const Titles = props => {
    return (
        <div className="title-content">
            <h1 className={props.titulo}>{props.title}</h1>
            <h2 className={props.sub}>{props.subtitle}</h2>
        </div>
    )
}

export default Titles;

