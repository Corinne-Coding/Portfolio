// SCSS
import "./AnimatedArrow.scss";

// Icon
import DownArrow from "../../img/down-arrow.svg";

const AnimatedArrow = ({ data }) => {
  return (
    <a className="animated-arrow" href="#1">
      <p>{data.projects.title}</p>
      <img src={DownArrow} alt="down arrow" />
    </a>
  );
};

export default AnimatedArrow;
