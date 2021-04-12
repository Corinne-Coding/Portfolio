// SCSS
import "./Link.scss";

// Icons
import sun from "../../img/sun.svg";
import message from "../../img/message.svg";
import grid from "../../img/grid.svg";

const Link = ({ text, icon }) => {
  return (
    <li className="link">
      <a href="#">
        <img
          src={
            icon === "sun"
              ? sun
              : icon === "grid"
              ? grid
              : icon === "message"
              ? message
              : null
          }
          alt="grid-icon"
        />
        <span>{text}</span>
      </a>
    </li>
  );
};

export default Link;
