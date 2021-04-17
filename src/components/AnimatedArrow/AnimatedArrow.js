// SCSS
import "./AnimatedArrow.scss";

// Icon
import DownArrow from "../../img/down-arrow.svg";

const AnimatedArrow = () => {
  return (
    <div className="down">
      <p>My projects</p>
      <img src={DownArrow} alt="down arrow" />
    </div>
  );
};

export default AnimatedArrow;
