import React from 'react';

const ServicesCard = (props) => {
    return (
        <div className="col-md-4 wow fadeInUp">
            <div className="services-col">
                <div className="img">
                    <img src={ process.env.PUBLIC_URL + `/assets/img/${props.image_name}`} alt="" className="img-fluid"/>
                </div>
                <h2 className="title"><a>{props.title}</a></h2>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

export default ServicesCard; 