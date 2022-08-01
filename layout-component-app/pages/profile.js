import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import stockimage from '../public/assets/stockimage.png'
import User from '../models/user'







export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    console.log(data)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/user/62e6fdde0795bfcfa16caa31')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    console.log(data)
 
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div className = 'profile-container'>
        <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <div className="text-center">
                    <Image src={stockimage} width="100" height ="100"class="rounded-circle"/>
                </div>
                
                <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h5 className="mt-2 mb-0">Hello! {data.user.name}</h5>
                    <span>Your ID: {data.user._id}</span>
                    
                    <div className="px-4 mt-1">
                        <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>

                    
                    <div className="buttons">
                        
                        <button className="btn btn-outline-primary px-4">Message</button>
                        <button className="btn btn-primary px-4 ms-3">Contact</button>
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
        
      </div>
    )
}

Profile.getLayout = function getLayout(page) {
    return (
      <Layout>
        <Navbar />
        
        {page}
      </Layout>
    )
  }