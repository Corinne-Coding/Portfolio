import "./CarrouselArrow.scss";

const CarrouselArrow = ({
  displayedPicture,
  setDisplayedPicture,
  href,
  tab,
  orientation,
}) => {
  const scrollToLeft = () => {
    if (displayedPicture === 0) {
      setDisplayedPicture(tab.length - 1);
    } else {
      setDisplayedPicture(displayedPicture - 1);
    }
  };

  const scrollToRight = () => {
    if (displayedPicture === tab.length - 1) {
      setDisplayedPicture(0);
    } else {
      setDisplayedPicture(displayedPicture + 1);
    }
  };

  return (
    <a
      className={
        orientation === "left" ? "circle circle-left" : "circle circle-right"
      }
      href={`#${href}-${displayedPicture}`}
      onClick={orientation === "left" ? scrollToLeft : scrollToRight}
    >
      <i
        className={
          orientation === "left" ? "fas fa-arrow-left" : "fas fa-arrow-right"
        }
      ></i>
    </a>
  );
};

export default CarrouselArrow;
