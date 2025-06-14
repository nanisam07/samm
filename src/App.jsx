import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CasesSection from './components/CasesSection';
import ApproachSection from './components/ApproachSection';
import AwardsSection from './components/AwardsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';


import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <CasesSection/>
      <ApproachSection/>
      <AwardsSection/>
      <BlogSection/>
      <Footer/>

    </div>
  );
}

export default App;
