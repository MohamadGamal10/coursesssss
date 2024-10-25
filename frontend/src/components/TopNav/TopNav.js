import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/css/navTitle.css';
import { NavLink } from 'react-router-dom';

function TopNav() {
    const [color, setcolor] = useState(false);


    const handleScroll = () => {
      if(window.scrollY >= 100){
        setcolor(true);
      }else{
        setcolor(false);
      }
    };


      window.addEventListener('scroll', handleScroll);



  return (
    <>
    <Navbar  collapseOnSelect expand="lg" className={color ? 'nav nav-bg' : 'nav'}>
    <Container>
      <Navbar.Brand  href="/">EduPro</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav className="ms-auto">
          <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/services">Services</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/portfolio">Portfolio</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/courses">Courses</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}

export default TopNav