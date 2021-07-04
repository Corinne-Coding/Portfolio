import { useState } from "react";

// SCSS
import "./Carrousel.scss";

// Images
import toDo01 from "../../img/to-do-list-project-01.png";
import toDo02 from "../../img/to-do-list-project-02.png";
import toDo03 from "../../img/to-do-list-project-03.png";
import toDo04 from "../../img/to-do-list-project-04.png";
import toDo05 from "../../img/to-do-list-project-05.png";
import toDo06 from "../../img/to-do-list-project-06.png";
import toDo07 from "../../img/to-do-list-project-07.png";

const toDoImages = [toDo02, toDo03, toDo04, toDo01, toDo05, toDo07, toDo06];

const Carrousel = ({ href }) => {
  const [tab] = useState(href === "to-do-list" ? toDoImages : []);
  const [displayedPicture, setDisplayedPicture] = useState(0);

  console.log(href);

  return (
    <div className="project-pictures">
      <div className="carrousel-container">
        {tab.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt="project"
              className="carrousel-img"
              id={`${href}-${index}`}
            />
          );
        })}
      </div>

      <a
        className="circle circle-left"
        href={`#${href}-${displayedPicture}`}
        onClick={() => {
          if (displayedPicture === 0) {
            setDisplayedPicture(tab.length - 1);
          } else {
            setDisplayedPicture(displayedPicture - 1);
          }
        }}
      >
        <i className="fas fa-arrow-left"></i>
      </a>

      <a
        className="circle circle-right"
        href={`#${href}-${displayedPicture}`}
        onClick={() => {
          if (displayedPicture === tab.length - 1) {
            setDisplayedPicture(0);
          } else {
            setDisplayedPicture(displayedPicture + 1);
          }
        }}
      >
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Carrousel;
