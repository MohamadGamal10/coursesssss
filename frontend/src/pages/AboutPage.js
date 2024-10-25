import React from 'react'
import TopPage from './TopPage';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import AboutDesc from '../components/AboutDesc/AboutDesc';

function AboutPage() {
  return (
    <>
    <TopPage pageTitle="About"/>
    <About />
    <AboutDesc />
    <Footer />
    </>
  )
}

export default AboutPage;