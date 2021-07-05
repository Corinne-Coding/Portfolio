// Scss
import "./ContactLogo.scss";

// Pictures
import linkedin from "../../img/icons/linkedin.svg";
import github from "../../img/icons/github.svg";
import email from "../../img/icons/email.svg";

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
