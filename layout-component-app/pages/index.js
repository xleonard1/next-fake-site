import React, {useState, useEffect} from 'react';
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import About from './about'
import Contact from './contact'
import Hero from '../components/Hero'





export default function Home(props) {
  
  return (
    <Layout>
        <Hero />
        <About/>
     
      
    </Layout>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
