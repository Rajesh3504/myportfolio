import React from 'react'
import './about.css'
import ME from '../../assets/king2.0.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Certifications</h5>
                <small>20+</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ completed</small>
              </article>
            </div>
            
              <p>
              Hello and welcome to my portfolio website! I'm an aspiring developer student with a passion for creating innovative solutions through coding. My journey into the world of programming began when I discovered my love for problem-solving and logical thinking. I have been honing my skills in various programming languages, including HTML, CSS, and JavaScript, and I'm eager to dive deeper into the world of web development. Through my projects and experiences, I have gained hands-on knowledge in front-end development, responsive design, and UI/UX principles. I believe in continuous learning and staying up-to-date with the latest technologies, which allows me to bring fresh ideas and solutions to the table. With a strong eye for detail and a commitment to delivering high-quality work, I am excited to collaborate on projects and contribute to the ever-evolving digital landscape. Feel free to explore my portfolio and get in touch for any potential opportunities or collaborations. Together, let's turn ideas into reality!
              </p>

            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About