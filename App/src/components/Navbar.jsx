import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className='bg-cyan-300 w-screen h-max flex flex-row gap-5'>
    <Link to={'/'} className='font-bold'>Home</Link>
    <Link to={'/region'}>Region</Link>
    <Link to={'/rq-region'}>RQ Region</Link>
    </nav>
    </>
  )
}

export default Navbar