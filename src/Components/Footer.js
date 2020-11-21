import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-4 col-md-6 footer-info">
                    <h3>Shri Laitha Equipments</h3>
                </div>

                <div className="col-lg-4 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                        <li><i className="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                        <li><i className="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                        Konark-Maitreya Apts., <br/>
                        Flat No. 201, II<sup>nd</sup> Floor, <br/>
                        Plot No. 15 S.E. Rly. Colony No. 2 <br/>
                        Rana Pratap Nagar <br/>
                        Nagpur-440022 <br/>
                        <strong>Phone:</strong> +91 9823019529<br/>
                        <strong>Email 1:</strong> avsn_atp@yahoo.com<br/>
                        <strong>Email 2:</strong> srilalithaequipments@yahoo.com<br/>
                    </p>

                    {/* <div className="social-links">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    </div> */}

                </div>

                {/* <div className="col-lg-3 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                    <form action="" method="post">
                        <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                    </form>
                </div> */}

                </div>
            </div>
            </div>

            <div className="container">
            <div className="copyright">
                &copy; Copyright <strong>Shri Lalitha Equipments</strong>. All Rights Reserved
            </div>
            </div>
        </footer>
    );
}

export default Footer;