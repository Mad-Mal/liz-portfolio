//Imports
import React from 'react'
import { Link } from 'react-router-dom'

//Style imports
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='outerNavWrap'>
        <div className='innerNavWrap'>
            <div className='navWrap'>
              <Link to='/'>
                <button className='button butt1'>About</button>
              </Link>
              <Link to='/gallery'>
                <button className='button midBut'>Gallery</button>
              </Link>
              <Link to='/contact'>
                <button className='button butt2'>Contact</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar