import React from 'react'
import Contact from '../components/Contact/Contact';
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';

function ContactPage() {
  return (
    <>
    <TopPage pageTitle="Contact"/>
    <Contact />
    <Footer />
    </>
  )
}

export default ContactPage;