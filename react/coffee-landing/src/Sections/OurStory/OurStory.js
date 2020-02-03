import React from "react";
import "./OurStory.scss";
import backgroundOurStory from "../../Images/our-story.jpg";
import Titles from "../../Components/Titles/Titles";

const OurStory = () => {
    return (
        <section className="story-sect">
            <div className="brown-sect">
                <Titles title="OUR STORY" 
                    subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                    titulo="title white"
                    sub= "subtitle white">
                </Titles>
            </div>

            <div className="img-sect"  style={{
                        backgroundImage: `url(${backgroundOurStory})`
                        }}>
            </div>
        </section>
    );
};

export default OurStory;