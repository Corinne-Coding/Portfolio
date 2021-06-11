// SCSS
import "./AnimatedArrow.scss";

// Icon
import DownArrow from "../../img/down-arrow.svg";

const AnimatedArrow = ({ title, setProjectNumber, index }) => {
  return (
    <a
      className="animated-arrow"
      href={`#project-${index}`}
      onClick={() => {
        setProjectNumber(index);
      }}
    >
      <p>{title}</p>
      <img src={DownArrow} alt="down arrow" />
    </a>
  );
};

export default AnimatedArrow;
