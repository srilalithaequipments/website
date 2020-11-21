import React from 'react';
import ClientImage from './ClientsImage';

const Clients = () => {
    return (
        <section id="clients" className="wow fadeInUp">
            <div className="container">

                <header className="section-header">
                    <h3>Our Clients</h3>
                </header>

                <div className="owl-carousel clients-carousel">
                    <ClientImage image_name="ACC.png" client_name="ACC"/>
                    <ClientImage image_name="afcon.png" client_name="afcon"/>
                    <ClientImage image_name="elecon.png" client_name="elecon"/>
                    <ClientImage image_name="HG-infra.png" client_name="HG-infra"/>
                    <ClientImage image_name="itd.png" client_name="itd"/>
                    <ClientImage image_name="kcc.png" client_name="kcc"/>
                    <ClientImage image_name="l-T.png" client_name="l-T"/>
                    <ClientImage image_name="ncc.png" client_name="ncc"/>
                    <ClientImage image_name="pnc.png" client_name="pnc"/>
                    <ClientImage image_name="sadbhav.png" client_name="sadbhav"/>
                    <ClientImage image_name="sk_samanta.png" client_name="sk_samanta"/>
                    <ClientImage image_name="sks_power_gen.png" client_name="sks_power_gen"/>
                    <ClientImage image_name="il-fs.png" client_name="il-fs"/>
                </div>

            </div>
        </section>
    );
}

export default Clients;