import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import MoreProjects from '../Components/MoreProjects';
import Team from "./Team"
import AboutUs from '../Components/AboutUs';
import Stats from '../Components/Stats';

export default function LandingPage() {
  return (
    <>
      <Hero name="hero"/>
      <Stats/>
      <About name="top-projects"/>
      <MoreProjects name="projects"/>
      <AboutUs name="about-us"/>
      
    </>
  );
}
