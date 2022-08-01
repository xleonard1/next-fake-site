import Head from 'next/head'
import './layout.module.css'
import styles from './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'






export default function Layout({ children }) {
  
  return (
    <div>
      <Head>
        <title>Fake Page</title>
      </Head>
      <Navbar/>
    <main className = {styles.main} >{children} 
    
      </main>
      <Footer/>
     
    </div>
  )
}
