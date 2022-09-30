import React from 'react'
import './Portfolio.css'
import News from '../../assets/News.jpg'
import Gym from '../../assets/Gym.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
 const data = [
  {
    id: 1,
    image: News,
    title: 'Real Time News Webstite',
    github: 'https://github.com/SameerChaudharyOp/1st-React-Website',
    demo: 'https://foodhaven.netlify.app/'
    },
     {
    id: 2,
    image: Gym,
    title: 'Gym Website',
    github: 'https://github.com/SameerChaudharyOp/1st-React-Website',
    demo: 'https://foodhaven.netlify.app/'
    },
     {
    id: 3,
    image: IMG3,
    title: 'Food Haven',
    github: 'https://github.com/SameerChaudharyOp/1st-React-Website',
    demo: 'https://foodhaven.netlify.app/'
    },
     {
    id: 4,
    image: IMG4,
    title: 'Digital Clock',
    github: 'https://github.com/SameerChaudharyOp/1st-React-Website',
    demo: 'https://foodhaven.netlify.app/'
    },
     {
    id: 5,
    image: IMG5,
    title: 'Calculator',
    github: 'https://github.com/SameerChaudharyOp/1st-React-Website',
    demo: 'https://foodhaven.netlify.app/'
    },
     {
    id: 6,
    image: IMG6,
    title: 'Real Time Charcter Counter',
    github: 'https://github.com/SameerChaudharyOp/1st-React-Website',
    demo: 'https://foodhaven.netlify.app/'
    }
 ]



  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
       {
        data.map(({id,image,title,github,demo}) =>{
          return(
            <article key={id} className='portfolio-item'>
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-cta'>
                <a href={github}>Github</a>
                <a href={demo} className='btn-1 btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
              </div>

            </article>
          )
        })

        
       }
    
      </div>
    </section>
  )
}

export default Portfolio
