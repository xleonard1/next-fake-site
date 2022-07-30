// import React, {useEffect, useState} from 'react'
// import withSession from '../lib/get-session'
// import connectDB from '../lib/dbConnect'
// import Layout from '../components/Layout'

// const profile = ({ user }) => {
//     return (
//       <div>
//         <span>You are authenticated as: {user}</span>
//       </div>
//     );
//   };

// export function getServerSideProps(ctx) {
//     const authSession = getAuthSession(ctx);
//     if (!authSession) {
//       return {
//         redirect: {
//           destination: "/login",
//           permanent: false,
//         },
//       };
//     }
  
//     return {
//       props: {
//         user: authSession.user,
//       },
//     };
//   }
//   export default profile;

// export default function Profile() {
//     const [data, setData] = useState(null)
//     const [isLoading, setLoading] = useState(false)
  
//     useEffect(() => {
//       setLoading(true)
//       fetch('/api/user/62e56a45ddebfa9986c2d2eb')
//         .then((res) => res.json())
//         .then((data) => {
//           setData(data)
//           setLoading(false)
//         })
//     }, [])
//     console.log(data)
 
//     if (isLoading) return <p>Loading...</p>
//     if (!data) return <p>No profile data</p>
  
//     return (
//       <div>
//         <h1>{data.user.name}</h1>
//         <p>{data.user._id}</p>
//       </div>
//     )
// }