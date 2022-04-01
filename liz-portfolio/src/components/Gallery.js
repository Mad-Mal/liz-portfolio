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
      'alt': 'Hand drawn color butterfly'
    },
    {
      'index': '1',
      'pic': cherries,
      'alt': 'Hand drawn color group of cherries'
    },
    {
      'index': '2',
      'pic': musicalartist,
      'alt': 'Hand drawn color of Yungblood'
    },
    {
      'index': '3',
      'pic': snakeandflowers,
      'alt': 'Hand drawn snake with some flowers'
    },
    {
      'index': '4',
      'pic': tiger,
      'alt': 'Hand drawn tigers face/head'
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