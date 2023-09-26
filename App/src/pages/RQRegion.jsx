import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// export const DataRQRegion = async () => {
//     try {
//         const response = await axios.get('http://localhost:2004/bali');
//         return response.data;
//     }catch(error){
//         throw error
//     }
// }
const RQRegion = () => {
    // const RQRegionData = useLoaderData();
    const DataRQRegion = async () => {
        try {
            const response = await axios.get('http://localhost:2004/bali');
            return response.data;
        }catch(error){
            throw error
        }
    }
    const queryKey = ["rq-region"];
    const {isError, data, error, isFetching} = useQuery({
        queryKey: queryKey,
        queryFn: DataRQRegion,
        // cacheTime: 50000,
        staleTime: 0,
        refetchOnMount: true,
        refetchOnWindowFocus: 'always'
    });
    if(isError){
        return(
         <h2>This is Error : {error.message}</h2>
        )
    }
    if(!data){
        return(
        <><h2>Loading..</h2></>
        )
    }
  return (
    <>
      {data?.map(region => {
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