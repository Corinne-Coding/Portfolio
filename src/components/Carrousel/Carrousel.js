import { useState } from "react";

// SCSS
import "./Carrousel.scss";

// Components
import CarrouselArrow from "../CarrouselArrow/CarrouselArrow";

// Images
/* To do project */
import toDo01 from "../../img/toDoProject/to-do-list-project-01.png";
import toDo02 from "../../img/toDoProject/to-do-list-project-02.png";
import toDo03 from "../../img/toDoProject/to-do-list-project-03.png";
import toDo04 from "../../img/toDoProject/to-do-list-project-04.png";
import toDo05 from "../../img/toDoProject/to-do-list-project-05.png";
import toDo06 from "../../img/toDoProject/to-do-list-project-06.png";

/* Chat app project */
import chatApp01 from "../../img/chatApp/chat-app-01.png";
import chatApp02 from "../../img/chatApp/chat-app-02.png";
import chatApp03 from "../../img/chatApp/chat-app-03.png";
import chatApp04 from "../../img/chatApp/chat-app-04.png";
import chatApp05 from "../../img/chatApp/chat-app-05.png";
import chatApp06 from "../../img/chatApp/chat-app-06.png";

/* Memory game project */
import memory01 from "../../img/memoryGame/memory-game-01.png";
import memory02 from "../../img/memoryGame/memory-game-02.png";
import memory03 from "../../img/memoryGame/memory-game-03.png";

// Array images
const toDoImages = [toDo06, toDo02, toDo03, toDo04, toDo01, toDo05];
const chatAppImages = [
  chatApp06,
  chatApp01,
  chatApp02,
  chatApp03,
  chatApp04,
  chatApp05,
];
const memoryImages = [memory01, memory02, memory03];

const Carrousel = ({ href }) => {
  // Load the tab images
  const [tab] = useState(
    href === "to-do-list"
      ? toDoImages
      : href === "chat-app"
      ? chatAppImages
      : href === "memory-game"
      ? memoryImages
      : []
  );

  console.log(href);

  // Displayed image in the carrousel
  const [displayedPicture, setDisplayedPicture] = useState(0);

  return (
    <div className="project-pictures">
      <div className="carrousel-container">
        {tab.map((item, index) => {
          console.log(item);
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

      <CarrouselArrow
        displayedPicture={displayedPicture}
        setDisplayedPicture={setDisplayedPicture}
        href={href}
        tab={tab}
        orientation={"right"}
      />

      <CarrouselArrow
        displayedPicture={displayedPicture}
        setDisplayedPicture={setDisplayedPicture}
        href={href}
        tab={tab}
        orientation={"left"}
      />
    </div>
  );
};

export default Carrousel;
