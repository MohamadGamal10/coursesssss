import React from 'react'
import TopPage from './TopPage'
import Services from './../components/Services/Services';
import Footer from './../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

function ServicePage() {
  return (
    <>
    <TopPage pageTitle="Services"/>
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default ServicePage