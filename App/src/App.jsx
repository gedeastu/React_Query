import React from 'react'
import { DataRegionLoader } from './pages/Region';
import { Suspense,lazy } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();
const RootLayout = lazy(() => import("./layouts/RootLayout"));
const Home = lazy(() => import("./pages/Home"));
const Region = lazy(() => import("./pages/Region"));
const RQRegion = lazy(() => import("./pages/RQRegion"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='region' element={<Region/>} loader={DataRegionLoader}></Route>
      <Route path='rq-region' element={<RQRegion/>}></Route>
    </Route>
  )
)


const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}/>
    </Suspense>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    </>
  )
}

export default App