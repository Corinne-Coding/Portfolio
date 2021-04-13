// SCSS
import "./PartOne.scss";

// Particles
import Particles from "react-particles-js";

const Part = ({ data, language }) => {
  return (
    <div className="portrait">
      <section className="part-one">
        {
          <Particles
            className="particles"
            params={{
              particles: {
                number: {
                  value: 400,
                  density: {
                    enable: true,
                    value_area: 1500,
                  },
                },
                line_linked: {
                  enable: true,
                  opacity: 0.02,
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
        <div className="titles">
          <h1>Corinne Pradier</h1>
          <h2>{language ? data.english.mainTitle : data.french.mainTitle}</h2>
        </div>

        <div className="menu">
          {language
            ? data.english.header.map((item, index) => {
                return <h3 key={index}>{item.text}</h3>;
              })
            : data.french.header.map((item, index) => {
                return <h3 key={index}>{item.text}</h3>;
              })}
        </div>
      </section>
    </div>
  );
};

export default Part;
