import { useEffect, useState } from "react";

// SCSS
import "./scss/App.scss";

// Data
import json from "./data.json";

// Particles
/* From :  https://www.npmjs.com/package/react-particles-js */
import Particles from "react-particles-js";

// Components
import AnimatedArrow from "./components/AnimatedArrow/AnimatedArrow";
import ButtonMenu from "./components/ButtonMenu/ButtonMenu";
import Content from "./components/Content/Content";
import Flag from "./components/Flag/Flag";
import Project from "./components/Project/Project";

function App() {
  const [data, setData] = useState(json.english);
  // Languages : 0 = english (default) / 1 = french
  const [language, setLanguage] = useState(0);
  const [content, setContent] = useState("home");

  useEffect(() => {
    const loadData = () => {
      if (language === 0) {
        setData(json.english);
      } else {
        setData(json.french);
      }
    };

    loadData();
  }, [language]);

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

          <div className="flags-container">
            <Flag flag="en" setLanguage={setLanguage} language={language} />
            <Flag flag="fr" setLanguage={setLanguage} language={language} />
          </div>

          <div className="menu">
            {data.header.map((item, index) => {
              return (
                <ButtonMenu
                  key={index}
                  item={item}
                  setContent={setContent}
                  content={content}
                />
              );
            })}
          </div>

          {content === "home" ? (
            <Content>
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
              <h2>{data.mainTitle}</h2>
            </Content>
          ) : content === "about" ? (
            <Content>
              <h3>{data.contentTitles.about}</h3>
            </Content>
          ) : content === "contact" ? (
            <Content>
              <h3>{data.contentTitles.contact}</h3>
            </Content>
          ) : null}

          <AnimatedArrow href={1} data={data} />
        </section>

        {data.projects.list.map((item) => {
          return <Project key={item.id} item={item} data={data} />;
        })}
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
