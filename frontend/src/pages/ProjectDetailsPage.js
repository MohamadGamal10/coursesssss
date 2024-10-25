import React from 'react'
import TopPage from './TopPage';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import Footer from '../components/Footer/Footer';


function ProjectDetailsPage() {
  return (
    <>
    <TopPage pageTitle="Project Details"/>
    <ProjectDetails />
    <Footer />
    </>
  )
}

export default ProjectDetailsPage;