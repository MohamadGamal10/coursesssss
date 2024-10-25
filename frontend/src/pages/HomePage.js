import React from 'react'
import Chart from './../components/Chart/Chart';
import Courses from './../components/Courses/Courses';
import Footer from './../components/Footer/Footer';
import RecentProject from './../components/RecentProject/RecentProject';
import Services from './../components/Services/Services';
import Summary from './../components/Summary/Summary';
import Team from './../components/Team/Team';
import TopBanner from './../components/TopBanner/TopBanner';
import Videos from './../components/Videos/Videos';
import About from './../components/About/About';
function HomePage() {
  return (
     <>
     <TopBanner />
     <Courses />
     <RecentProject />
      <About />
      <Team />
      <Videos />
      <Chart />
      <Services />
      <Summary />
      <Footer />
     </>
  )
}

export default HomePage;