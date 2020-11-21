import React from 'react';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Facts from './Components/Facts';
import Portfolio from './Components/Portfolio';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import 'animate.css/animate.css'

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <div id="main">
        <AboutUs />
        <Services />
        <Portfolio />
        <Facts />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
