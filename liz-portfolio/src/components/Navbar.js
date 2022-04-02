// Imports
import React from 'react'
import { Link } from 'react-router-dom'

//Style Imports
import '../styles/navbar.css'

const Navbar = () => {
  return (
      
          <nav className='navWrap'>
            <Link to='/'>
                <button className='button butt1'>About</button>
            </Link>
            <Link to='/gallery'>
                <button className='button midBut'>Gallery</button>
            </Link>
            <Link to='/contact'>
                <button className='button butt2'>Contact</button>
            </Link>
        </nav>
      
  )
}

export default Navbar