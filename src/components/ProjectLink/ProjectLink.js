// SCSS
import "./ProjectLink.scss";

const ProjectLink = ({ url, text, icon }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <i
        className={
          icon === "eye"
            ? "far fa-eye"
            : icon === "code"
            ? "fas fa-code"
            : icon === "qrcode"
            ? "fas fa-qrcode"
            : null
        }
      ></i>
      <span>{text}</span>
    </a>
  );
};

export default ProjectLink;
