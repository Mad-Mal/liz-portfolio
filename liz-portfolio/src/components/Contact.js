//Imports
import React from 'react'

//Style imports
import '../styles/contact.css'

// On click setups
let copyClick = (e) => {
  e.preventDefault();
  const email = navigator.clipboard.writeText('lizc.art05@gmail.com')
    .then(() => {
      alert('You copied my email, I hope to hear from you soon!')
    })
    .catch(err => {
      console.log(err, 'Did not copy')
    })
    return email
}

let instaClick = (e) => {
  e.preventDefault();
  window.location.href='https://www.instagram.com/art.by_liz/?hl=en';
}

const Contact = () => {
  return (
    <section className='outerContact'>
      <div className='innerContact'>
        <h2 className='header'>Contact me</h2>
        <p className='contactPara'>Feel free to reach out to me anytime! I am open to commissions as well as collaboration. You can reach me through my Instagram or my email!</p>
        <div className='buttonWrap'>
          <button onClick={instaClick} className='buttons instaButt'>Instagram</button>
          <a><button onClick={copyClick} className='buttons emailButt'>Email</button></a>
        </div>
      </div>
    </section>
  )
}

export default Contact 