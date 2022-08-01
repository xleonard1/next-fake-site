
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavLink from 'react-bootstrap/NavLink';
import Image  from 'next/image';
import Container from 'react-bootstrap/Container'
import logo from '../public/assets/logo.png'




export default function Navigation () {

      return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">
          <NavLink href = "/"> 
            <Image className = "logo" src={logo} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <NavLink href="/logIn">Account</NavLink>
          <NavLink href="/">Help</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        )
}

