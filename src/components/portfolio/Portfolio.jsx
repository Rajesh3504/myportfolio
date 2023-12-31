import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Rajesh3504" className='btn'>Github</a>
          <a href="https://github.com/Rajesh3504" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Chat app</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://github.com/Rajesh3504" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Food app</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://github.com/Rajesh3504" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Image Classification</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://github.com/Rajesh3504" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>File Downloader</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn'>Github</a>
          <a href="https://github.com/Rajesh3504" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default portfolio