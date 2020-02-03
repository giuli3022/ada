import React from "react";
import "./Coffees.scss";

const Coffee = props => {
    return (
        <article className="coffee">
           <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </article>
    )
}

export default Coffee;
