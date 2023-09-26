import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData,Link } from 'react-router-dom'

// const [data,setData] = useState([])
// export const DataRegionLoader = async () => {
//   useEffect(()=>{
//   axios.get('http://localhost:2004/bali').then((res)=>{
//   setData(res.data);
//   })
//   },[])
// }
export const DataRegionLoader = async () => {
    const response = await axios.get('http://localhost:2004/bali');
    if (!response.data){
      throw new Error('Failed to fetch data')
    }
    return response;
}
// if (error) {
//   return <h2>{error.message}</h2>
// }
const Region = () => {
  const regionData = useLoaderData();
  console.log(regionData);
  return (
    <>
    <div>
      {regionData.data.map((data)=>(
        <div key={data.id}>
          <h1>{data.City}</h1>
        </div>
      ))}
    </div>
    </>
  )
}
export default Region;