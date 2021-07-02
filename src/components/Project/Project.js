// SCSS
import "./Project.scss";

// Components
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";

// Images
import toDo01 from "../../img/to-do-list-project-01.png";

const Project = ({
  item,
  index,
  language,
  setLanguage,
  lastProject,
  title,
  setProjectNumber,
}) => {
  console.log(item);

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
          <span onClick={handleLanguage}>FRANÇAIS</span>
        ) : (
          <span onClick={handleLanguage}>ENGLISH</span>
        )}
      </div>

      <div className="project-container">
        {/* Project picture */}
        <div className="project-pictures">
          <img src={toDo01} alt="to-do list" />
        </div>

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
        />
      )}
    </section>
  );
};

export default Project;
