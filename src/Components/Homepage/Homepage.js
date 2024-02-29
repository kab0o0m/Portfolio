import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

import "../Homepage/Homepage.css";

import cv from "../../pdf/Resume.pdf";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import portFolioImage from "../../img/portfolio-img.png";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Engineer", "Programmer"],
    loop: {},
  });

  return (
    <div>
      <div className="top">
        <div className="intro">
          <div className="name">
            <Fade direction="down">
              <h2>I am John </h2>
            </Fade>
          </div>
          <div>
            <h1 className="software">
              Software
              <span className="engineer-developer"> {text}</span>
              <span className="cursor">
                <Cursor />
              </span>
            </h1>
          </div>
          <div className="description">
            <Fade direction="up">
              <h5>
                Explore my portfolio to see examples of my work and let's
                connect to discuss how I can help bring your ideas to life!
              </h5>
            </Fade>
          </div>
          <div className="socials">
            <a href={cv} download="John_resume.pdf" className="cv">
              Download CV
            </a>
            <a href="https://github.com/kab0o0m/" target="_blank">
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-ang-yi-heng-157544147/"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
        <div className="portfolio-image">
          <div className="image">
            <img src={portFolioImage} alt="" />
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="years">
          <div className="year-num">
            <p>2</p>
          </div>
          <div className="year-words">
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="projects">
          <div className="projects-num">
            <p>7</p>
          </div>
          <div className="projects-words">
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body-header">
          <p className="body-header-title">Recent Works</p>
          <p className="body-header-description">
            Dive into my portfolio to witness a showcase of dynamic projects
            reflecting my passion for software development.
          </p>
        </div>
        <div className="showcase">
          <div className="showcase-1"></div>
          <div className="showcase-2"></div>
          <div className="showcase-3"></div>
          <div className="showcase-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
