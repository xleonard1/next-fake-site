import React, {useState} from "react";
import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/assets/logo.png'


export default function footer () {

    return (
        <footer className="footer bg-transparent text-center text-lg-start">
  <div className="container p-4">
    
    <div className="row links-row">

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    
        <ul className="list-unstyled mb-0">
        <li>
            <a href="#!" className="footer-active">Fake Site</a>
          </li>
          <li>
            <a href="#!" className="text-dark">About us</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Press</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Policies</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Help</a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <ul className="list-unstyled">
          <li>
            <a href="#!" className="footer-active">Account</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Edit Profile</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Friends</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Social</a>
          </li>
          <li>
            <a href="#!" className="text-dark">Delete Profile</a>
          </li>
        </ul>
      </div>
     
    </div>
 
  </div>
  <div className = "footer-bottom text-center p-3 container">
    <div className = 'row'>
           <div className ='col footer-logo'>
                <Link href="/" className="navbar-brand">
                 <Image className = "logo" src={logo} />  
               </Link>
            </div>
            <div className = 'col-md-9'>
              
            </div>
            <div className = "col" >
              <ul className="list-unstyled footer-list ">
                  <li>Terms</li>
                  <li>Policy</li>
                  <li>Site Map</li>
              </ul>
          </div>
        </div>
    </div>
</footer>
    )




}