import React from "react";
import "./Types.scss";
import backgroundTypes from "../../Images/coffee-types.jpg";
import Titles from "../../Components/Titles/Titles";
import Coffees from "../../Components/Coffees/Coffees";
import coffee1 from "../../Images/coffee1.png";
import coffee2 from "../../Images/coffee2.png";
import coffee3 from "../../Images/coffee3.png";



const Types = () => {

    
const coffees = [
    {
        img: coffee1,
        title: "MOCHA LATTE",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        img: coffee2,
        title: "POUR OVER",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
        img: coffee3,
        title: "ESPRESSO",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    }

];

    return (
        
        <section className="type-section" style={{
             backgroundImage: `url(${backgroundTypes})` 
        }}>
            <div className="types-container">
                <div className="coffees-types">

                     <Titles title="WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE" 
                             subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                             doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                             titulo="title black"
                             sub= "subtitle grey">
                    </Titles>

                    <div className="coffees-desc">
                        {coffees.map(coffee => {
                            return (<Coffees img={coffee.img} title={coffee.title} desc={coffee.desc} />)
                        })}
                    </div>

                    <a href="#" className="full-menu">FULL MENU</a>
                </div>
            </div>
        </section>

    );
};

export default Types;

