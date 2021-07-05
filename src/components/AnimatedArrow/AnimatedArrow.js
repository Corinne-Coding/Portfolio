// SCSS
import "./AnimatedArrow.scss";

// Icon
import DownArrowLight from "../../img/icons/down-arrow-light.svg";
import DownArrowDark from "../../img/icons/down-arrow-dark.svg";

const AnimatedArrow = ({ title, setProjectNumber, index, color }) => {
  return (
    <a
      className={`animated-arrow ${color}`}
      href={`#project-${index}`}
      onClick={() => {
        setProjectNumber(index);
      }}
    >
      <p>{title}</p>
      <img
        src={color === "light" ? DownArrowLight : DownArrowDark}
        alt="down arrow"
      />
    </a>
  );
};

export default AnimatedArrow;
