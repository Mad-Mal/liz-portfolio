//Imports
import React from 'react'

//Style imports
import '../styles/contact.css'

const Contact = () => {
  return (
    <section className='outerContact'>
      <div className='innerContact'>
        <h2 className='header'>Contact me</h2>
        <p className='contactPara'>Feel free to reach out to me! I am open to commissions as well as collaboration. You can reach me through my Instagram or my email!</p>
        <div className='buttonWrap'>
          <button className='buttons instaButt'>Instagram</button>
          <button className='buttons emailButt'>Email</button>
        </div>
      </div>
    </section>
  )
}

export default Contact