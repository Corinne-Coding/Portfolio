import { useState } from "react";

// SCSS
import "./scss/App.scss";

// Data
import json from "./data.json";

// Particles
import Particles from "react-particles-js";

// Components
import Link from "./components/Link/Link";
import Flag from "./components/Flag/Flag";
import AnimatedArrow from "./components/AnimatedArrow/AnimatedArrow";

function App() {
  const [data] = useState(json);
  // Languages : true = english / false = french
  const [language, setLanguage] = useState(true);
  const [content, setContent] = useState("main");

  return (
    <>
      <div className="scroll-snap-container">
        <section className="container snap-element">
          <Particles
            className="particles"
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 0.5,
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  repulse: {
                    distance: 80,
                    duration: 3,
                  },
                },
              },
            }}
          />

          <div className="languages">
            <Flag flag="en" setLanguage={setLanguage} language={language} />
            <Flag flag="fr" setLanguage={setLanguage} language={language} />
          </div>

          {content === "main" ? (
            <div className="main-content">
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
          ) : content === "about" ? (
            <div className="about-content"></div>
          ) : null}

          <div className="menu">
            {language
              ? data.english.header.map((item, index) => {
                  return <Link index={index} item={item} />;
                })
              : data.french.header.map((item, index) => {
                  return <Link index={index} item={item} />;
                })}
          </div>

          <AnimatedArrow />
        </section>

        <section
          className="project snap-element"
          style={{
            "background-color": "deeppink",
            height: "100vh",
            width: "100vw",
          }}
        >
          coucou
        </section>
        <section
          className="project snap-element"
          style={{
            "background-color": "pink",
            height: "100vh",
            width: "100vw",
          }}
        >
          coucou
        </section>
        <section
          className="project snap-element"
          style={{
            "background-color": "hotpink",
            height: "100vh",
            width: "100vw",
          }}
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
