import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_transparent from '../../images/logo_transparent-2.png'


const NavBar = () => {
    return (
        <div style={{width:"100%"}}>
            <Navbar expand="lg" className='p-0'>
            <Container fluid >
                <Navbar.Brand href="#">
                    <img src={logo_transparent} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"    
                    navbarScroll
                >
                    <Nav.Link key="home" className='ms-auto' to="/home" as={NavLink} >Home</Nav.Link>
                    <Nav.Link key="skills" className='ms-auto' to="/home#skills" as={NavLink} >Skills</Nav.Link>
                    <Nav.Link key="projects" className='ms-auto' to="/home#projects" as={NavLink} >Projects</Nav.Link>
                    <Nav.Link key="projects" className='ms-auto' to="/contact" as={NavLink} >Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
};

export default NavBar;