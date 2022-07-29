import React, {useState, useEffect} from 'react';
import {Image, Video, Transformation } from 'cloudinary-react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import About from './about'
import Contact from './contact'
import Hero from '../components/Hero'







export default function Home({data}) {
 
  return (
    <Layout>
        <Hero/>
        <About props = {data}/>
        
     
      
    </Layout>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
   headers: {
     Authorization:`Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
   }
  }).then(r => r.json());
  const {resources, next_cursor: nextCursor } = results
  console.log('results', results)
  const images = resources


  const res = await fetch(`https://vimeo.com/api/v2/channel/staffpicks/videos.json`)
  const data = await res.json()

  // Pass data to the page via props
  return { 
    props: { 
      data, 
      images, 
      nextCursor: nextCursor || false
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
