// SCSS
import "./Project.scss";

// Components
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";

const Project = ({ item, index, title, setProjectNumber }) => {
  return (
    <section
      className={`project snap-element ${item.ref}`}
      id={`project-${index}`}
    >
      <h3>{item.title}</h3>

      {/* Index of the last project */}
      {index !== 2 && (
        <AnimatedArrow
          title={title}
          index={index + 1}
          setProjectNumber={setProjectNumber}
        />
      )}
    </section>
  );
};

export default Project;
