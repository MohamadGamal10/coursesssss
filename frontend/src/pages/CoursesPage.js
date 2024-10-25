import React from 'react'
import TopPage from './TopPage';
import Footer from './../components/Footer/Footer';
import AllCourses from '../components/AllCourses/AllCourses';

function CoursesPage() {
  return (
    <>
    <TopPage pageTitle="All Courses"/>
    <AllCourses />
    <Footer />
    </>
  )
}

export default CoursesPage;