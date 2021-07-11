// Scss
import "./ContactLogo.scss";

// Pictures
import email from "../../img/icons/email.svg";
import linkedin from "../../img/icons/linkedin.svg";
import github from "../../img/icons/github.svg";

const Logo = ({ name, link, text }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="logo">
      {text ? (
        text
      ) : (
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
      )}
    </a>
  );
};

export default Logo;
