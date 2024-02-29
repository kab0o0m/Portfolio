import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Homepage = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Engineer"],
    loop: {},
  });

  return (
    <div>
      <h1>
        I am Software
        <span> {text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default Homepage;
