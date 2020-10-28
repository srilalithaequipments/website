import React from 'react';

const AboutUs = () => {
    return (
        <section id="about">
            <div className="container">
                <header className="section-header">
                    <h3>About Us</h3>
                    <p>
                        Sri Lalitha Equipments is a renowned crane rental company involved in offering cranes on hire in Central India. We are committed to provide reliable crane services at affordable prices. We are a prominent provider of hydraulic cranes, all terrain cranes, hydraulic telescopic cranes, mobile cranes, and a lot more. These cranes are efficient in lifting materials and performing on and off road operations.
                    </p>
                </header>
                <div className="row about-cols">
                    <div className="col-md-4 wow fadeInUp">
                        <div className="about-col">
                            <div className="img">
                                <img src="./assets/img/about-mission.jpg" alt="" className="img-fluid"/>
                                <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                            </div>
                            <h2 className="title"><a href="#">Our Mission</a></h2>
                            <p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="about-col">
                            <div className="img">
                                <img src="./assets/img/about-plan.jpg" alt="" className="img-fluid"/>
                                <div className="icon"><i className="ion-ios-list-outline"></i></div>
                            </div>
                            <h2 className="title"><a href="#">Our Plan</a></h2>
                            <p>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="about-col">
                            <div className="img">
                                <img src="./assets/img/about-vision.jpg" alt="" className="img-fluid"/>
                                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
                            </div>
                            <h2 className="title"><a href="#">Our Vision</a></h2>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;