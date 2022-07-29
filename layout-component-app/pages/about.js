
import Layout from '../components/layout'
import videos from '../videos.json'







const About= function(){
  console.log(videos)
  let id = videos[1].id
  return (
  <div className="container">
      <div className="row">
      <div className="col">
      <h2>{videos[1].title}</h2>
      <h4>{videos[2].description}</h4>
      </div> 
      <div className="col">
      <div className="embed-responsive embed-responsive-21by9">
        <iframe className="ivid embed-responsive-item" src={`//player.vimeo.com/video/${id}`} width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      </div>
    </div>
  
    </div>
  )
 }
 
 
 
 export async function 
 getServerSideProps(context){
 const res = await fetch(`https://vimeo.com/api/v2/channel/staffpicks/videos.json`);
 const data = await res.json();

 if (!data) {
  return {
    notFound: true,
  }
}
  return {
   props:{ data: data },
  }
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


// Fetching data from the JSON file
