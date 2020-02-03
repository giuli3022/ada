import React from "react";
import "./Hero.scss";
import background from "../../Images/header-bg.jpg";


const Hero = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${background})` }}>
            <div className="banner-content">
                <h1 className="hero-title">Portwell, Inc.</h1>
                <p className="hero-subtitle">Serving only the best 2019</p>
                <a href="#" className="hero-explore">EXPLORE</a>
            </div>
        </div>

    );
};

export default Hero;
