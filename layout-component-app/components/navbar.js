
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import Image  from 'next/image';
import Container from 'react-bootstrap/Container'
import logo from '../public/assets/logo.png'



export default function Navigation () {

      return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="inherit" variant="light">
      <Container>
        <Navbar.Brand href="#"><Nav.Link href="#about"> <Image className = "logo" src={logo} /></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link href="#about">Account</Nav.Link>
          <Nav.Link href="#skills">Help</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        )
}

