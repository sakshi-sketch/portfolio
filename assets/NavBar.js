import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from 'react';
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";


function NavBar() {
    const [activateLink,setActivateLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>
    {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll" ,onScroll);
        
        return () => window.removeEventListener("scroll" ,onScroll);


    },[]);

    const onUpdateActivateLink = (value) => {
      setActivateLink(value);
    }



  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <h2>LOGO</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activateLink === 'Home' ? 'active navbar-link' :' Home'}onClick = {
              () => onUpdateActivateLink('home') }><h4>Home</h4></Nav.Link>
            <Nav.Link href="#Skills"className={activateLink === 'Skills' ? 'active navbar-link' :' Skills'}onClick = {
              () => onUpdateActivateLink('Skills') }><h4>Skills</h4></Nav.Link>
            <Nav.Link href="#Projects"className={activateLink === 'Projects' ? 'active navbar-link' :'Projects '}onClick = {
              () => onUpdateActivateLink('Projects') }><h4>Projects</h4></Nav.Link>
          </Nav>
          <span className='nav-text'>
            <div className='social-icon'>
                <a href='#'><CiLinkedin /></a>
                <a href='#'><IoLogoInstagram /></a>
                <a href='#'><FaGithub /></a>
            </div>
            <button className='connect-btn' onClick={()=>console.log('connect')}>Let's connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;