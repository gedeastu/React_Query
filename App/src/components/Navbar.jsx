import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className='bg-cyan-300 w-screen h-max flex flex-row gap-5'>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/region'}>Region</NavLink>
    <NavLink to={'/rq-region'}>RQ Region</NavLink>
    </nav>
    </>
  )
}

export default Navbar