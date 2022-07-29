import Head from 'next/head'
import './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'



export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fake Page</title>
      </Head>
      <Navbar/>
      <main className = 'style-container' >{children} 
    
      </main>
      <Footer/>
     
    </>
  )
}
