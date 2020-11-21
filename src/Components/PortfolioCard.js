import React from 'react'

const PortfolioCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
                <figure>
                    <img src={ process.env.PUBLIC_URL + `/assets/img/portfolio/${props.image_name}`} className="img-fluid" alt=""/>
                    <a href={`./assets/img/portfolio/${props.image_name}`} data-lightbox="portfolio" data-title={props.title} className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                </figure>

                <div className="portfolio-info">
                    <h4><a href="#">{props.title}</a></h4>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;