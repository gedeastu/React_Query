import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const RQRegion = ({apiURL}) => {
    // const data = useQuery(['data'],async () => {
    //     return await axios.get('http://localhost:2004/bali')
    // })
    // if(isLoading) {
    //     return(
    //         <>
    //         <h1>Loading...</h1>
    //         </>
    //     )
    // }
    const queryKey = ['data'];
    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL);
            return response.data;
        }catch(error){
            throw error
        }
      }
      const data = useQuery({
        queryKey: queryKey,
        queryFn: fetchData
    });
  return (
    <>
      <h2>Data from API:</h2>
      {
        data.data.map(region => {
            return (
            <>
            <div key={region.key}>
            <h1>{region.City}</h1>
            </div>
            </>
            )
        })
      }
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}
export default RQRegion;