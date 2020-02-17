import React from 'react';
import {Link} from 'react-router-dom';
import "./Links.css";


const Links = () => {
    return (
        <nav className="nav">
            <Link className="link-card" to="/Card/Parasite">Bong Joon-Ho</Link>
            <Link className="link-card" to="/Card/The-Irishman">Scorsese</Link>
            <Link className="link-card" to="/Card/Once-upon-a-time-in-Hollywood">Tarantino</Link>
        </nav>
    );
}

export default Links;
