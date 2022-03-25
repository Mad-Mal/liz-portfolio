//Imports
import React from 'react'

//Style imports
import '../styles/about.css'

const About = () => {
  return (
    <div className='outerAboutWrap'>
        <div className='innerAboutWrap'>
            <div className='imgContainer'>
                <img  className='lizImg' src='https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/277029687_995147348107413_6660262527198944754_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lax3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=pTzMR89IX8cAX_Jlj0Z&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9Xygv86sbPU4MbJ8kLDFPdx-rgGOC-arwWkvvcas6vvw&oe=6244C70E&_nc_sid=7bff83' alt='Profile picture of Liz' />
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