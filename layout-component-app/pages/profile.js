import React, {useEffect, useState} from 'react'



export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/user/62e56a45ddebfa9986c2d2eb')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
 
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div>
        <h1>{data.user.name}</h1>
        <p>{data.id}</p>
      </div>
    )
}