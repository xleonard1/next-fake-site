import React, {useState, useEffect} from 'react';
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import About from './about'
import Contact from './contact'
import Hero from '../components/Hero'










export default function Home({data}) {
 
  return (
    <div>
        <Hero/>
        <About props = {data}/>
      </div>
     
     
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://vimeo.com/api/v2/channel/staffpicks/videos.json`)
  const data = await res.json()

  // Pass data to the page via props
  return { 
    props: { 
      data, 
    },
  }
}





Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      
      {page}
    </Layout>
  )
}
