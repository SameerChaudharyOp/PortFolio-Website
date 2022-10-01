import React from 'react'
import './Portfolio.css'
import News from '../../assets/News.jpg'
import Gym from '../../assets/Gym.jpg'
import food from '../../assets/food.jpg'
import clock from '../../assets/clock.jpg'
import calculator from '../../assets/calculator.jpg'
import realtime from '../../assets/realtime.png'

const Portfolio = () => {
 const data = [
  {
    id: 1,
    image: News,
    title: 'Real Time News Webstite',
    github: 'https://github.com/SameerChaudharyOp/NewsOG',
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
    image: food,
    title: 'Food Haven',
    github: 'https://github.com/SameerChaudharyOp/FoodHaven',
    demo: 'https://foodhaven.netlify.app/'
    },
     {
    id: 4,
    image: clock,
    title: 'Digital Clock',
    github: 'https://github.com/SameerChaudharyOp/Digital-Clock',
    demo: 'https://sameerchaudharyop.github.io/Digital-Clock/'
    },
     {
    id: 5,
    image: calculator,
    title: 'Calculator',
    github: 'https://github.com/SameerChaudharyOp/Calculator/settings/pages',
    demo: 'https://sameerchaudharyop.github.io/Calculator/'
    },
     {
    id: 6,
    image: realtime,
    title: 'Real Time Charcter Counter',
    github: 'https://github.com/SameerChaudharyOp/Real-Time-Character-Counter',
    demo: 'https://sameerchaudharyop.github.io/Real-Time-Character-Counter/'
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
