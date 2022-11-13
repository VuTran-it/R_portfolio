import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'


const data = [
  {
    id:1,
    image:IMG1,
    title:'Personal page',
    github: 'https://github.com/VuTran-it/Home',
    demo: 'https://vutran-it.github.io/Home/html/index.html'
  },
  {
    id:2,
    image:IMG1,
    title:'Personal page',
    github: 'https://github.com/VuTran-it/Home',
    demo: 'https://vutran-it.github.io/Home/html/index.html'
  },
  {
    id:3,
    image:IMG1,
    title:'Personal page',
    github: 'https://github.com/VuTran-it/Home',
    demo: 'https://vutran-it.github.io/Home/html/index.html'
  }
]

function Portfolio() {
  return (
    <section id='portfolio' class="section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map((item) => {
            return(
              <article className='portfolio_item'>
                <div className="portfolio_item-img">
                  <img src={item.image} alt="" />
                </div>
                <h3 className='text_light'>{item.title}</h3>
                <div className="portfolio_item-cta">
                  <a href={item.github} className='btn' target='_blank'>Github</a>
                  <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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