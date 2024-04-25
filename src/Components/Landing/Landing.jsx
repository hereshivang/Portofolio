import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter,FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase  } from 'react-icons/fa';
import './Landing.css'

const Landing = () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      };

  return (
    <>

    {/* Nav Bar */}
    <nav id="desktop-nav">
        <div className="logo">Shivang</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Shivang</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>


    {/* Profile Section */}
      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/pp.jpg" alt="My Profile Picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Shivang</h1>
          <p className="section__text__p2">A Software Engineer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('./assets/resume-example.pdf')}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>
              Contact Info
            </button>
          </div>
        </div>
      </section>


    {/* About Section */}
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h3>Experience</h3>
                <h2>Turing Private Limited</h2>
                <p>Rolem : </p>
                <p>Tech Stack : </p>
              </div>
              <div className="details-container">
                <h3>Education</h3>
                <p>GLA University, Mathura</p>
                <p>Springfeilds College</p>
                <p>Springfeilds College</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
      </section>





        {/* Experience Section */}




        <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
        </div>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <FaHtml5 className="icon" />
                  <div>
                    <h3>HTML</h3>
                  </div>
                </article>
                <article>
                  <FaCss3 className="icon" />
                  <div>
                    <h3>CSS</h3>
                  </div>
                </article>
                <article>
                  <FaJs className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                  </div>
                </article>
                <article>
                  <FaJs className="icon" />
                  <div>
                    <h3>React</h3>
                  </div>
                </article>
                <article>
                  <FaJs className="icon" />
                  <div>
                    <h3>Next</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <FaNodeJs className="icon" />
                  <div>
                    <h3>Node.js</h3>
                  </div>
                </article>
                <article>
                  <FaDatabase className="icon" />
                  <div>
                    <h3>MongoDB</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Projects Section */}

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-1.png" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Live
                </button>
              </div>
            </div>
            
            <div className="details-container color-container">
              <div className="article-container">
                <img src="./assets/project-1.png" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Project One</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = 'https://github.com/')}
                >
                  Live
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/*  Contact Sections */}

     <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <FaEnvelope className="icon contact-icon email-icon" />
          <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <FaLinkedin className="icon contact-icon" />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
        <div className="contact-info-container">
          <FaGithub className="icon contact-icon" />
          <p><a href="https://github.com">GitHub</a></p>
        </div>
        <div className="contact-info-container">
          <FaTwitter className="icon contact-icon" />
          <p><a href="https://twitter.com">Twitter</a></p>
        </div>
      </div>
    </section>

        {/* Footer Section */}
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Shivang. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Landing
