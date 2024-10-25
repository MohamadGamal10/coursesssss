import React from 'react'
import TopPage from './TopPage';
import Footer from '../components/Footer/Footer';
import CourseDetails from '../components/CourseDetails/CourseDetails';

function CourseDetailsPage() {
  return (
    <>
    <TopPage pageTitle="Course Details"/>
    <CourseDetails />
    <Footer />
    </>
  )
}

export default CourseDetailsPage;