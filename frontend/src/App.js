import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import CoursesPage from './pages/CoursesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import CourseDetailsPage from './pages/CourseDetailsPage';



function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicePage />} />
    <Route path="/courses" element={<CoursesPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/ProjectDetails/:ProjectId" element={<ProjectDetailsPage />} />
    <Route path="/CourseDetails/:CourseId" element={<CourseDetailsPage />} />
  </Routes>
    </div>
  );
}

export default App;
