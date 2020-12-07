import React from 'react';

const NavBar = () => {
    return (
        <header id="header">
            <div className="container-fluid">
                <div id="logo" className="pull-left">
                    <h1>
                        {/* <img src="/assets/img/logo.png" alt="logo" width="3%" height="3%" /> */}
                        <a href="#intro" className="scrollto">SHRI LALITHA EQUIPMENTS</a>
                    </h1>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu" id="mainMenu">
                        <li className="menu-active"><a href="#intro">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;