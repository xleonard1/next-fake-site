
import Layout from '../components/layout'
import React, {useState, useEffect} from 'react'
import User from '../models/user'







const About= function(props){
  
  let id = props.props[5].id
  let description = props.props[5].description




// let id = videos[1].id
return (


 
 
   <div className="video-container container justify-content-between">
     <div className="row">

       <div className="text-container col-md-6 col-lg-6 ">
         <h2>{props.props[1].title}</h2>
         <p>{description}</p>
       </div> 
       
       <div className= 'col'>
         <div class="card">
           <div className="iframe-ratio ratio ratio-1x1">
           <iframe src={`//player.vimeo.com/video/${id}`}  Height = "200"></iframe>
           </div>
           
          </div>
        </div>
     </div>
  </div>
  
      
   
     


  )

}
 



export default About

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

