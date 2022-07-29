
import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import Image  from 'next/image';
import logo from '../public/assets/logo.png'



export default function Navbar() {

      return (
        <Nav className="navigation-plane navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
          <div className = "nav-logo">
          <Link href="/">
            <a className="navbar-brand">
              <Image className = "logo" src={logo} />  
            </a>
          </Link>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="ml-auto collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link">Account</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/articles">
                  <a className="nav-link">Help</a>
                </Link>
              </li>
            </ul>
          </div>
      </Nav>
        )
}
