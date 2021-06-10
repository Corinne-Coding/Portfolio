import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
import Flag from "./components/Flag/Flag";
import Project from "./components/Project/Project";

// Pictures
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";
import email from "./img/email.svg";
import copyImage from "./img/copy.svg";

function App() {
  const [language, setLanguage] = useState(0);
  // Languages : 0 = english (default) / 1 = french
  const [data, setData] = useState(json.english);
  const [content, setContent] = useState("home");
  const [copy, setCopy] = useState(false);

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

  useEffect(() => {
    const undisplayText = () => {
      setCopy(false);
    };

    setTimeout(() => {
      undisplayText();
    }, 4000);
  }, [copy]);

  return (
    <>
      <div className="scroll-snap-container">
        <div className="test">
          <div className={content === "about" ? "picture" : "no-picture"}>
            <section className="container snap-element">
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
                <div className="absolute-content w100">
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
                </div>
              ) : content === "about" ? (
                <div className="absolute-content right">
                  <h3>{data.contentTitles.about}</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    vitae eaque a placeat omnis nemo facilis tenetur officiis.
                    Nulla sapiente debitis vitae hic quia consequatur quos omnis
                    sed possimus quo. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Ad vitae eaque a placeat omnis nemo
                    facilis tenetur officiis. Nulla sapiente debitis vitae hic
                    quia consequatur quos omnis sed possimus quo.
                  </p>
                </div>
              ) : content === "contact" ? (
                <div className="absolute-content w100">
                  <div className="texts">
                    <h3>Corinne Pradier</h3>
                    <p>{data.mainTitle}</p>

                    <div className="mail">
                      <p>pradier.corinne@gmail.com</p>
                      <CopyToClipboard
                        text={copy}
                        onCopy={() => {
                          setCopy("pradier.corinne@gmail.com");
                        }}
                      >
                        <img src={copyImage} alt="copy logo" />
                      </CopyToClipboard>
                      <div>{<span>{copy ? "Copied !" : ""}</span>}</div>
                    </div>

                    <div className="logos">
                      <a href="https://www.linkedin.com/in/corinne-pradier-6610201b2/">
                        <img src={linkedin} alt="linkedin logo" />
                      </a>

                      <a href="https://github.com/Corinne-Coding">
                        <img src={github} alt="github logo" />
                      </a>

                      <a href="mailto:pradier.corinne@gmail.com">
                        <img src={email} alt="email logo" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}

              <AnimatedArrow href={1} data={data} />

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
            </section>
          </div>
        </div>

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
         

          https://www.flaticon.com/authors/pixel-buddha
          https://www.flaticon.com/authors/becris

          */
