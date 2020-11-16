import React from 'react';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-container">
                <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">
                            <div className="carousel-background"><img src="./assets/img/intro-carousel/demag-ac-300.webp" alt="" /></div>
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2>Welcome</h2>
                                    <p>We have a crane for your every need.</p>
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