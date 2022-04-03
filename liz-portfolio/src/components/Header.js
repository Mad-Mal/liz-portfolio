//Imports
import React from 'react'
import logo from '../img/ArtbyLiz (2).png'

//Style imports
import '../styles/header.css'


const Header = () => {
  return (
    <div className='outerNavWrap'>
      <img src={logo} alt='Logo that says Art by Liz' className='lizLogo' />
    </div>
  )
}

export default Header