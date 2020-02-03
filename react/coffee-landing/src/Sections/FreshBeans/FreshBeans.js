import React from "react";
import "./FreshBeans.scss";
import Beans from "../../Images/fresh-beans.jpg";

const FreshBeans = () => {
    return (
        <section className="fresh-beans">
            <div className="beans-text">
                <h2>FRESH BEANS</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <a href="#">LEARN MORE</a>
            </div>
            <div className="beans-img">
                <img src={Beans}/> 
            </div>
        </section>
    );
};

export default FreshBeans;


/*img es background*/