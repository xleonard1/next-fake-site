import Head from 'next/head'
import './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { userService } from 'services';



export default function Layout({ children }) {
  const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/profile');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
