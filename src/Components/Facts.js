import React from 'react';

const Facts = () => {
    return (
        <section id="facts" className="wow fadeIn">
            <div className="container">
                <header className="section-header">
                    <h3>Facts</h3>
                </header>
                <div className="row counters">
                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">274</span>
                        <p>Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">421</span>
                        <p>Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">1,364</span>
                        <p>Hours Of Support</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">18</span>
                        <p>Hard Workers</p>
                    </div>
                </div>
                {/* <div className="facts-img">
                    <img src="./assets/img/facts-img.png" alt="" className="img-fluid"/>
                </div> */}
            </div>
        </section>
    );
}

export default Facts;