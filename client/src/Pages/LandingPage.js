import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import MoreProjects from '../Components/MoreProjects';
import AboutUs from '../Components/AboutUs';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About/>
      <MoreProjects/>
      <AboutUs/>
      {/* <Companies />
      <Guide />
      <Properties />
      <Details />
      <GetStarted /> */}
      {/* <Footer /> */}
    </>
  );
}
