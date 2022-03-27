//Imports
import React from 'react'

//Style imports
import '../styles/gallery.css'

//Image imports
import butterfly from '../img/lizPortPics/butterfly.jpeg'
import cherries from '../img/lizPortPics/cherries.jpeg'
import musicalartist from '../img/lizPortPics/musicalartist.jpeg'
import snakeandflowers from '../img/lizPortPics/snakeandflowers.jpeg'
import tiger from '../img/lizPortPics/tiger.jpeg'

let pictures = [
    {
      'index': '0',
      'pic': butterfly,
      'alt': 'Hand drawn color picture of a butterfly'
    },
    {
      'index': '1',
      'pic': cherries,
      'alt': 'Hand drawn color picture of a group of cherries'
    },
    {
      'index': '2',
      'pic': musicalartist,
      'alt': 'Hand drawn color picture of Yungblood'
    },
    {
      'index': '3',
      'pic': snakeandflowers,
      'alt': 'Hand drawn picture of a snake with some flowers'
    },
    {
      'index': '4',
      'pic': tiger,
      'alt': 'Hand drawn picture of a tigers face/head'
    }
];

const Gallery = () => {
  return (
    <div className='outerGalleryWrap'>
      <div className='innerGalleryWrap'>
        {pictures.map(pic => (
          <div className='eleWrap' key={pic.index}>
            <img src={pic.pic} alt={pic.alt} className='mappedPics' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery