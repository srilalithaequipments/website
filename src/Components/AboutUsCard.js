import React from 'react';

const AboutUsCard = (props) => {
    return (
        <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
                <div className="img">
                    <img src={`./assets/img/${props.image_name}`} alt="" className="img-fluid"/>
                </div>
                <h2 className="title"><a href="#">{props.title}</a></h2>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

export default AboutUsCard;