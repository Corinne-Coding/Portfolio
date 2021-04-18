import { useState } from "react";

// SCSS
import "./scss/App.scss";

// Data
import json from "./data.json";

// Particles
import Particles from "react-particles-js";

// Components

import Flag from "./components/Flag/Flag";
import AnimatedArrow from "./components/AnimatedArrow/AnimatedArrow";

function App() {
  const [data] = useState(json);
  // Languages : true = english / false = french
  const [language, setLanguage] = useState(true);
  const [content, setContent] = useState("home");

  return (
    <>
      <div className="scroll-snap-container">
        <section className="home snap-element">
          {
            <Particles
              className="particles"
              params={{
                particles: {
                  number: {
                    value: 200,
                    density: {
                      enable: true,
                      value_area: 1500,
                    },
                  },
                  line_linked: {
                    enable: true,
                    opacity: 0.04,
                  },
                  move: {
                    speed: 0.05,
                  },
                  size: {
                    value: 1,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.05,
                    },
                  },
                },

                retina_detect: true,
              }}
            />
          }

          <div className="languages">
            <Flag flag="en" setLanguage={setLanguage} language={language} />
            <Flag flag="fr" setLanguage={setLanguage} language={language} />
          </div>

          <section>
            {content === "home" ? (
              <div className="titles">
                <h1>
                  <span>C</span>
                  <span>o</span>
                  <span>r</span>
                  <span>i</span>
                  <span>n</span>
                  <span>n</span>
                  <span>e&nbsp;</span>
                  <span>P</span>
                  <span>r</span>
                  <span>a</span>
                  <span>d</span>
                  <span>i</span>
                  <span>e</span>
                  <span>r</span>
                </h1>
                <h2>
                  {language ? data.english.mainTitle : data.french.mainTitle}
                </h2>
              </div>
            ) : null}
          </section>

          <div className="menu">
            {language
              ? data.english.header.map((item, index) => {
                  return (
                    <a href="#" key={index}>
                      {item.text}
                    </a>
                  );
                })
              : data.french.header.map((item, index) => {
                  return (
                    <a href="#" key={index}>
                      {item.text}
                    </a>
                  );
                })}
          </div>

          <AnimatedArrow />
        </section>

        <section
          className="project snap-element"
          style={{ "background-color": "deeppink" }}
        >
          coucou
        </section>
        <section
          className="project snap-element"
          style={{ "background-color": "pink" }}
        >
          coucou
        </section>
        <section
          className="project snap-element"
          style={{ "background-color": "hotpink" }}
        >
          coucou
        </section>

        <section
          className="project snap-element"
          style={{ "background-color": "orange" }}
        >
          coucou
        </section>
      </div>
    </>
  );
}

export default App;

/*

          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>

          */
