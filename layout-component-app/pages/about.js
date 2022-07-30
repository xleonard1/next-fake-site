
import Layout from '../components/layout'
import React, {useState, useEffect} from 'react'







const About= function(props){
  
  let id = props.props[1].id
  let description = props.props[1].description




// let id = videos[1].id
return (
  <div>
   <div className="video-container container justify-content-between">
     <div className="row">

       <div className="text-container col-8">
         <h2>{props.props[1].title}</h2>
         <p>{description}</p>
       </div> 
       <div className="col video-col">
          <div className="embed-responsive embed-responsive-21by9">
          <iframe className="video-card ivid embed-responsive-item" src={`//player.vimeo.com/video/${id}`} width="400" height="300" ></iframe>
          <div className = 'video-img-overlay d-flex flex-column'></div>
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

