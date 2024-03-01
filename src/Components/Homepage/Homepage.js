import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

import "../Homepage/Homepage.css";

import cv from "../../pdf/Resume.pdf";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import portFolioImage from "../../img/portfolio-img.png";
import furvo from "../../img/furvo-website.png";
import telegramBot from "../../img/telegram-bot.png";
import koreanFood from "../../img/korean-food-website.png";
import sudoku from "../../img/sudoku.png";
import htmlLogo from "../../img/html.png";
import cssLogo from "../../img/css.png";
import jsLogo from "../../img/js.png";
import figmaLogo from "../../img/figma.svg";
import reactLogo from "../../img/react.svg";
import pythonLogo from "../../img/python.png";
import javaLogo from "../../img/java.webp";

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
            <a
              href={cv}
              download="John_resume.pdf"
              className="cv"
              rel="noreferrer"
            >
              Download CV
            </a>
            <a
              href="https://github.com/kab0o0m/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="" rel="noreferrer" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-ang-yi-heng-157544147/"
              target="_blank"
              rel="noreferrer"
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
      <div className="skills">
        <div className="skills-header">
          <p className="body-header-title">My Skills</p>
        </div>
        <div className="skills-body">
          <div className="skills-body-card">
            <img src={htmlLogo} alt="" />
            <p>HTML</p>
          </div>
          <div className="skills-body-card">
            <img src={cssLogo} alt="" />
            <p>CSS</p>
          </div>
          <div className="skills-body-card">
            <img src={jsLogo} alt="" />
            <p>JS</p>
          </div>
          <div className="skills-body-card">
            <img src={reactLogo} alt="" />
            <p>REACT</p>
          </div>
          <div className="skills-body-card">
            <img src={figmaLogo} alt="" />
            <p>FIGMA</p>
          </div>
          <div className="skills-body-card">
            <img src={pythonLogo} alt="" />
            <p>PYTHON</p>
          </div>
          <div className="skills-body-card">
            <img src={javaLogo} alt="" />
            <p>JAVA</p>
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
          <div className="showcase-1">
            <a
              href="https://kab0o0m.github.io/Furniture-Ecommerce-Website/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={furvo} alt="" />
            </a>
          </div>
          <div className="showcase-2">
            <a
              href="https://t.me/PremiumTutorsAssignmentBot"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegramBot} alt="" />
            </a>
          </div>
          <div className="showcase-3">
            <a
              href="https://github.com/kab0o0m/Sudoku"
              target="blank"
              rel="noopener"
            >
              <img src={sudoku} alt="" />
            </a>
          </div>
          <div className="showcase-4">
            <a
              href="https://singaporewebdevelopment.com/cs2024/tut03grp4/"
              target="blank"
              rel="noopener"
            >
              <img src={koreanFood} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
