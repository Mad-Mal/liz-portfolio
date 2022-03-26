//Imports
import React from 'react'

//Style imports
import '../styles/gallery.css'

let pictures = [
    {
      'index': '0',
      'pic': 'src/img/lizPortPics/butterfly.jpeg'
    },
    {
      'index': '1',
      'pic': 'src/img/lizPortPics/cherries.jpeg'
    },
    {
      'index': '2',
      'pic': 'src/img/lizPortPics/musicalartist.jpeg'
    },
    {
      'index': '3',
      'pic': 'src/img/lizPortPics/snakeandflowers.jpeg'
    },
    {
      'index': '4',
      'pic': 'src/img/lizPortPics/tiger.jpeg'
    }
];

const Gallery = () => {
  return (
    <div className='outerGalleryWrap'>
      {pictures.map(pic => {
        <div className='innerGalleryWrap'>
              <div className='eleWrap' key={pic.index}>
                {pic.pic}
              </div>
        </div>
      })}
    </div>
  )
}

export default Gallery