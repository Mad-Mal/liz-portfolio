//Imports
import React from 'react'

//Style imports
import '../styles/about.css'

//Image import
import profilePic from '../img/liz-profile-pic.jpg'

const About = () => {
  return (
    <div className='outerAboutWrap'>
        <div className='innerAboutWrap'>
            <div className='imgContainer'>
                <img  className='lizImg' src={profilePic} alt='Profile picture of Liz' />
            </div>
            <div className='textContainer'>
                <h1 className='aboutHead'>Hi, I'm Liz!</h1>
                <p className='aboutPara'>React.js is THE most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web. This course teaches you React in-depth, from the ground up, step by step by diving into all the core basics, exploring tons of examples and also introducing you to advanced concepts as well. You'll get all the theory, tons of examples and demos, assignments and exercises and tons of important knowledge that is skipped by most other resources - after all, there is a reason why this course is that huge! :) And in case you don't even know why you would want to learn React and you're just here because of some ad or "the algorithm" - no worries: ReactJS is a key technology as a web developer and in this course I will also explain WHY it's that important!</p>
            </div>
        </div>
    </div>
  )
}

export default About