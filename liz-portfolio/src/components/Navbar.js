//Imports
import React from 'react'

//Style imports
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='outerNavWrap'>
        <div className='innerNavWrap'>
            <div className='navWrap'>
                <button className='button butt1'>About</button>
                <button className='button midBut'>Gallery</button>
                <button className='button butt2'>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar