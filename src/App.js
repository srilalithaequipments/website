import React from 'react';
import NavBar from './Components/NavBar';
import Intro from './Components/Intro';
import FeaturedServices from './Components/FeaturedServices';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ActionSection from './Components/ActionSection';
import Skills from './Components/Skills';
import Facts from './Components/Facts';
import Portfolio from './Components/Portfolio';
import Clients from './Components/Clients';
import Testimonials from './Components/Testimonials';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <div id="main">
        <FeaturedServices />
        <AboutUs />
        <Services />
        <ActionSection />
        <Skills />
        <Facts />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
