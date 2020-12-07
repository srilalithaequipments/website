import React from 'react';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-container">
                <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="carousel-background"><img src={ process.env.PUBLIC_URL + "/assets/img/portfolio/3.jpg" } alt="" /></div>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__bounceInDown animate__slow">Welcome</h2>
                                    <h3 className="animate__animated animate__fadeInUp animate__slow animate__delay-2s">We have a crane for your every need.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;