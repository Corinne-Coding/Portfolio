// SCSS
import "./PartOne.scss";

// Particles
import Particles from "react-particles-js";

// Components
import Flag from "../Flag/Flag";

const Part = ({ data, language, setLanguage }) => {
  return (
    <div className="portrait">
      <section className="part-one">
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

        <div className="titles">
          <h1>Corinne Pradier</h1>
          <h2>{language ? data.english.mainTitle : data.french.mainTitle}</h2>
        </div>

        <div className="menu">
          {language
            ? data.english.header.map((item, index) => {
                return (
                  <a href="#">
                    <h3 key={index}>{item.text}</h3>
                  </a>
                );
              })
            : data.french.header.map((item, index) => {
                return (
                  <a href="#">
                    <h3 key={index}>{item.text}</h3>
                  </a>
                );
              })}
        </div>
      </section>
    </div>
  );
};

export default Part;
