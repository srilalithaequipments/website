import React from 'react';
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    return (
        <section id="portfolio"  className="section-bg" >
            <div className="container">
                <header className="section-header">
                    <h3 className="section-title" style={{color: "#fff"}}>Our Portfolio</h3>
                </header>
                <div className="row portfolio-container">
                    <PortfolioCard image_name="demag-AC-615.jpg" title="DEMAG AC 615"/>
                    <PortfolioCard image_name="demag-HC-400.jpg" title="DEMAG HC 400"/>
                    <PortfolioCard image_name="krupp-KMK-4070.jpg" title="KRUPP KMK 4070"/>
                    <PortfolioCard image_name="krupp-kmk-5110.jpg" title="KRUPP KMK 5110"/>
                    <PortfolioCard image_name="luna-43_120.jpg" title="LUNA 43/120"/>
                    <PortfolioCard image_name="T 750.jpg" title="T 750"/>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;