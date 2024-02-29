import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import portFolioImage from "../../img/portfolio-img.png";
import "../Homepage/Homepage.css";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Engineer"],
    loop: {},
  });

  return (
    <div>
      <div className="top">
        <div className="intro">
          <div className="name">
            <h1>I am John </h1>
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
        </div>
        <div className="portfolio-image">
          <div className="image">
            <img src={portFolioImage} alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
