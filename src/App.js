import React from 'react';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Facts from './Components/Facts';
import Portfolio from './Components/Portfolio';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <div id="main">
        <AboutUs />
        <Services />
        <Skills />
        <Facts />
        <Portfolio />
        <Clients />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
