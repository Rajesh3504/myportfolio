import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive web design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database design and integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile-friendly website development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social media integration</p>
            </li>
          </ul>
        </article>
        {/*End of Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mobile app development (Android)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Push notifications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database design and integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>In-app purchases</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App store submission and management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App testing and quality assurance</p>
            </li>
          </ul>
        </article>
{/*End of App Develoopment*/}
        <article className="service">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine learning model development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data preprocessing and cleaning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Model training and evaluation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Classification and regression</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Natural Language Processing (NLP)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Model monitoring and maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data analysis and visualization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reinforcement learning</p>
            </li>
          </ul>
        </article>
        {/*End of Machine Learning*/}
      </div>
    </section>
  )
}

export default Services