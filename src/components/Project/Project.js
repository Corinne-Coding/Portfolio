// SCSS
import "./Project.scss";

// Components
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import Carrousel from "../Carrousel/Carrousel";
import ProjectLink from "../ProjectLink/ProjectLink";

const Project = ({
  item,
  index,
  language,
  lastProject,
  setLanguage,
  setProjectNumber,
  title,
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
        {/* Carrousel */}
        <Carrousel href={item.href} />

        {/* Project texts */}
        <div className="texts">
          <div>
            <h4>{item.title}</h4>
            <p>{item.technologies.text}</p>
            <ul>
              {item.technologies.list.map((line) => {
                return <li key={line}>{line}</li>;
              })}
            </ul>

            <p>{item.description}</p>
          </div>

          <div className="line"></div>

          <div className="links">
            {item.links.netlify && (
              <ProjectLink
                url={item.links.netlify.url}
                text={item.links.netlify.text}
                icon="eye"
              />
            )}

            {item.links.githubClient && (
              <ProjectLink
                url={item.links.githubClient.url}
                text={item.links.githubClient.text}
                icon="code"
              />
            )}

            {item.links.githubServer && (
              <ProjectLink
                url={item.links.githubServer.url}
                text={item.links.githubServer.text}
                icon="code"
              />
            )}

            {item.links.qrcode && (
              <ProjectLink
                url={item.links.qrcode.url}
                text={item.links.qrcode.text}
                icon="qrcode"
              />
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
