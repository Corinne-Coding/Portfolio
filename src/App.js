import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

// SCSS
import "./scss/App.scss";

// Components
import AnimatedArrow from "./components/AnimatedArrow/AnimatedArrow";
import Audio from "./components/Audio/Audio";
import ButtonMenu from "./components/ButtonMenu/ButtonMenu";
import Flag from "./components/Flag/Flag";
import ContactLogo from "./components/ContactLogo/ContactLogo";
import Project from "./components/Project/Project";

// Data
import json from "./data.json";

// Icons & pictures
import copyImage from "./img/icons/copy.svg";
import cvFR from "./img/CV/CV-Corinne-Pradier.pdf";
import download from "./img/icons/download.svg";

// Particles
/* From :  https://www.npmjs.com/package/react-particles-js */
import Particles from "react-particles-js";

// Pictures
import profilePicture from "./img/me.jpg";

function App() {
  const [data, setData] = useState(json.english);
  // Languages : 0 = english (default) / 1 = french
  const [language, setLanguage] = useState(0);
  // Content : "home" / "about" / "contact"
  const [content, setContent] = useState("home");
  // Copy email
  const [copy, setCopy] = useState(false);
  // Scroll to a project
  const [, setProjectNumber] = useState(0);

  useEffect(() => {
    // Function to load content in chosen language
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
    // Function to undisplay "copied"
    const undisplayText = () => {
      setCopy(false);
    };

    setTimeout(() => {
      undisplayText();
    }, 4000);
  }, [copy]);

  return (
    <>
      <img src={profilePicture} alt="profile" style={{ display: "none" }} />
      <div className="scroll-snap-container">
        {/* PRESENTING */}
        <div className={content === "about" ? "picture" : "no-picture"}>
          <section className="container snap-element">
            {/* Languages & Music icons */}
            <div className="lang-music-container">
              {language === 0 ? (
                <Flag flag="fr" setLanguage={setLanguage} language={language} />
              ) : (
                <Flag flag="en" setLanguage={setLanguage} language={language} />
              )}
              <Audio data={data} />
            </div>

            {/* Menu list */}
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

            {/* ----- Home content ----- */}
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
              /* ----- About content ----- */
              <div className="absolute-content right">
                <h3>{data.contentTitles.about}</h3>
                <div className="description">
                  {data.description.map((text, index) => {
                    return (
                      <p key={index}>
                        {text}
                        <br />
                        <br />
                      </p>
                    );
                  })}
                  <div>
                    {language === 0 ? (
                      <p>
                        Want to know more about <span>Le Reacteur</span> ?
                      </p>
                    ) : (
                      <p>
                        Pour en savoir plus sur <span>Le Reacteur</span> :
                      </p>
                    )}
                    <a
                      href="https://www.lereacteur.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.lereacteur.io/
                    </a>
                  </div>
                </div>
              </div>
            ) : content === "contact" ? (
              /* ----- Contact content ----- */
              <div className="absolute-content w100">
                <div className="texts">
                  <h3>Corinne Pradier</h3>
                  <p>{data.mainTitle}</p>

                  {/* mail */}
                  <div className="mail">
                    <ContactLogo
                      text="pradier.corinne@gmail.com"
                      link="mailto:pradier.corinne@gmail.com"
                    />

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

                  {/* icons  */}
                  <div className="logos-container">
                    <ContactLogo
                      name="linkedin"
                      link="https://www.linkedin.com/in/corinne-pradier-6610201b2/"
                    />
                    <ContactLogo
                      name="github"
                      link="https://github.com/Corinne-Coding"
                    />
                  </div>

                  {/* CV */}
                  <a href={cvFR} download>
                    <span>
                      {language === 0
                        ? `Download my CV :`
                        : "Téléchargez mon CV :"}
                    </span>

                    <img src={download} alt="download icon" />
                  </a>
                </div>
              </div>
            ) : null}

            {/* Arrow at the bottom */}
            <AnimatedArrow
              title={data.projects.title}
              index={0}
              setProjectNumber={setProjectNumber}
              color="light"
            />

            {/* Particles */}
            <Particles
              className="particles"
              params={{
                particles: {
                  number: {
                    value: 40,
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
                    speed: 0.3,
                    out_mode: "out",
                  },
                },
              }}
            />
          </section>
        </div>

        {/* PROJECTS */}
        {data.projects.list.map((item, index) => {
          return (
            <Project
              key={index}
              item={item}
              index={index}
              title="Next project"
              setProjectNumber={setProjectNumber}
              lastProject={data.projects.list.length - 1}
              setLanguage={setLanguage}
              language={language}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
