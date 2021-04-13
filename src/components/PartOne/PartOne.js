// SCSS
import "./PartOne.scss";

// Particles
import Particles from "react-particles-js";

// import portrait from "../../img/portrait.png";

const Part = ({ data, language }) => {
  return (
    <section className="part-one">
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 300,
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
              direction: "left",
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
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="titles">
        <h1>Corinne Pradier</h1>
        <h2>{language ? data.english.mainTitle : data.french.mainTitle}</h2>
      </div>
    </section>
  );
};

export default Part;
