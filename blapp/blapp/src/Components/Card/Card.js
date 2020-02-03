import React from "react";
import "./Card.css";

import more from "./images/plus.png";
import CardTitleContent from "./CardTitleContent";



const Card = props => {
    return (
        
            <div className="card" style={{ backgroundImage: `url(${props.backgroundimg})` }}>
                <div className="card-content">
                    <article className="card-article">
                        <header className="card-header">
                            <CardTitleContent title={props.title}
                                              director={props.director}>
                            </CardTitleContent>
                            
                        </header>
                        <p>Lorem ipsum dolor sit amet.Suspendisse ultricies nec eros sed ultrices. Nullam lacinia
                        eu ligula commodo malesuada. Donec mollis sem ut vehicula tempor. Sed lacinia magna vel 
                        tellus euismod, id cursus dolor commodo. Donec nec justo eu sem iaculis molestie. Sed 
                        lacinia magna vel tellus euismod, id cursus dolor commodo. Donec nec justo eu sem iaculis
                        molestie.</p>
                        <a href="#" class="link">LINK</a>
                    </article>
                    <footer className="card-footer">
                            <img className="more" src={more} />
                        </footer>
                </div>
            </div>
        
    );
};

export default Card;

