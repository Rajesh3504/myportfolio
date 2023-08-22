import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
          <div className="experience__webdevelopment">
            <h3>Web Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermidiate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Basic</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Basic</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>Mangodb</h4>
                  <small className='text-light'>Basic</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div><h4>Django</h4>
                  <small className='text-light'>Intermediate</small></div>
              </article>           
            </div>
          </div>


          {/*end*/}


      <div className="experience__programingLanguages">
            <h3>Programming Languages</h3>
        <div className="experience__content">
          <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>C</h4>
                  <small className='text-light'>Intermidiate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Basic</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <HiBadgeCheck className='experience__details-icon'/>
                  <div>
                  <h4>Kotlin</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience