import React, {useEffect, useState} from 'react'


export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    console.log(data)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/user/62e56a45ddebfa9986c2d2eb')
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
      <div>
        <h1>{data.user.name}</h1>
        <p>{data.user._id}</p>
      </div>
    )
}