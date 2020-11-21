import React from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <header className="section-header wow fadeInUp">
                    <h3>Services</h3>
                    <p style={{ textAlign: "center" }}>
                        We are a prominent provider of hydraulic cranes, all-terrain cranes, hydraulic telescopic cranes, mobile cranes, and a lot more. These cranes are efficient in lifting materials and performing on and off-road operations. We provide our cranes for pan-India projects.
                    </p>
                </header>
                <div className="row services-cols">
                    <ServicesCard image_name="quality.jpg" title="Quality of Service"
                        content="We always deliver the highest quality of service with zero equipment breakdown and quick back-up. We are committed to provide round the clock crane services at affordable prices." />
                    <ServicesCard image_name="innovation.jpg" title="Innovation"
                        content="Our company is constantly upgrading its fleet of equipment to stay ahead of the market and to provide state-of-art machines for your diverse needs." />
                    <ServicesCard image_name="safety.png" title="Safety"
                        content="At Shri Lalitha Equipments, safety comes first. Our staff and our clients are the most valuable asset and their safety takes precedence over everything else. We take utmost precautions at all our sites of work." />
                </div>
            </div>
        </section>
    );
}

export default Services;