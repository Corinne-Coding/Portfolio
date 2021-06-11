// Scss
import "./Logo.scss";

// Pictures
import linkedin from "../../img/linkedin.svg";
import github from "../../img/github.svg";
import email from "../../img/email.svg";

const Logo = ({ name, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="logo">
      <img
        src={
          name === "linkedin"
            ? linkedin
            : name === "github"
            ? github
            : name === "email"
            ? email
            : null
        }
        alt={`${name} logo`}
      />
    </a>
  );
};

export default Logo;
