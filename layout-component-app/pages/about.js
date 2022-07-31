
import Layout from '../components/layout'
import React, {useState, useEffect} from 'react'







const About= function(props){
  
  let id = props.props[0].id
  let description = props.props[0].description




// let id = videos[1].id
return (
  <div>
   <div className="video-container container justify-content-between">
     <div className="row">

       <div className="text-container col-6">
         <h2>{props.props[0].title}</h2>
         <p>{description}</p>
       </div> 
       <div className="col example video-col">
          <div className="embed-responsive embed-responsive-21by9">
            <iframe className="video-card ivid embed-responsive-item" src={`//player.vimeo.com/video/${id}`}  Height = "200" >
            
            </iframe>
            <div className = 'overlay'></div>
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

