import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/bookedTickets' >Booked Tickets</Link>
    </div>


  )
}

export default Navbar