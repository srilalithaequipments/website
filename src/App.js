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
      </div>
    </div>
  );
}

export default App;
