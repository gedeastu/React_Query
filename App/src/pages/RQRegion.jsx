import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const RQRegion = () => {
    // const RQRegionData = useLoaderData();

    // Fetching Data with Axios
    const DataRQRegion = async () => {
        try {
            const response = await axios.get('http://localhost:2004/bali');
            return response.data;
        }catch(error){
            throw error
        }
    }

    //Query Key in React
    const queryKey = ["rq-region"];

    //useQuery
    const { 
      isLoading, 
      isError, 
      data, 
      error, 
      isFetching, 
      refetch,
    } = useQuery({
        // Get queryKey
        queryKey: queryKey,

        // Get queryFn
        queryFn: DataRQRegion,

        // enabled use for disable or enable fetching data
        // enabled:false || true,

        cacheTime: 5000,
        staleTime: 0,
        refetchOnMount: true,
        refetchOnWindowFocus: 'always',
        // refetchInterval: 2000,
        refetchIntervalInBackground: true,
        // select: (data) => {
        //   const dataRegion = data.map(region => {region.City})
        //   return dataRegion;
        // }
    });

    if(isError){
        return(
         <h2>This is Error : {error.message}</h2>
        )
    }

    if(isLoading || isFetching){
        return(
        <>
        <h2>Loading..</h2>
        <button onClick={refetch} className='text-black'>Fetching</button>
        </>
        )
    }

    // console.log({isLoading,isFetching})
 
  return (
    <>
      {/* Called data with Data Transformtaion in react Query */}
      {data.map((region) => {
        return (
        <div key={region.id}>
        <h1>{region.city}</h1>
        <p>{region.desc}</p>
        </div>
        )
      })
      }

      {/* Called Data with Data Transformation */}
      {/* {data?.map((region) => {
        return (
          <div key={region}>{region}</div>
        )
      })} */}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}
export default RQRegion;