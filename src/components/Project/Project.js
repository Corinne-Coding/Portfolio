// SCSS
import "./Project.scss";

// Components
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import Carrousel from "../Carrousel/Carrousel";

// Carrousel

const Project = ({
  item,
  index,
  language,
  setLanguage,
  lastProject,
  title,
  setProjectNumber,
}) => {
  const handleLanguage = () => {
    if (language === 0) {
      setLanguage(1);
    } else if (language === 1) {
      setLanguage(0);
    }
  };

  return (
    <section
      className={`project snap-element ${item.ref}`}
      id={`project-${index}`}
    >
      {/* Absolute name */}
      <p className="absolute absolute-name">Corinne • Pradier</p>

      {/* Absolute language */}
      <div className="absolute absolute-languages">
        {language === 0 ? (
          <span onClick={handleLanguage}>Français</span>
        ) : (
          <span onClick={handleLanguage}>English</span>
        )}
      </div>

      <div className="project-container">
        {/* Project picture */}
        <Carrousel href={item.href} />

        {/* project texts */}
        <div className="texts">
          <h4>{item.title}</h4>
          <p>{item.technologies.text}</p>
          <ul>
            {item.technologies.list.map((line) => {
              return <li key={line}>{line}</li>;
            })}
          </ul>

          <p>{item.description}</p>

          <div className="line"></div>

          <div className="links">
            {item.links.netlify && (
              <a href={item.links.netlify.url} target="_blank" rel="noreferrer">
                <i className="far fa-eye"></i>
                <span>{item.links.netlify.text}</span>
              </a>
            )}

            {item.links.githubClient && (
              <a
                href={item.links.githubClient.url}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-code"></i>
                <span>{item.links.githubClient.text}</span>
              </a>
            )}

            {item.links.githubServer && (
              <a
                href={item.links.githubServer.url}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-code"></i>
                <span>{item.links.githubServer.text}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Index of the last project */}
      {index !== lastProject && (
        <AnimatedArrow
          title={title}
          index={index + 1}
          setProjectNumber={setProjectNumber}
          color="dark"
        />
      )}
    </section>
  );
};

export default Project;
