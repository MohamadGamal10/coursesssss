import React from 'react'
import TopPage from './TopPage'
import Footer from '../components/Footer/Footer';
import AllProjects from '../components/AllProjects/AllProjects';

function PortfolioPage() {
  return (
    <>
    <TopPage pageTitle="All Projects"/>
    <AllProjects />
    <Footer />
    </>
  )
}

export default PortfolioPage;