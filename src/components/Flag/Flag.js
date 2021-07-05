// SCSS
import "./Flag.scss";

// Icons
import frenchFlag from "../../img/icons/france.svg";
import englishFlag from "../../img/icons/united-kingdom.svg";

const Flag = ({ language, setLanguage, flag }) => {
  return (
    <img
      className="flag"
      src={flag === "fr" ? frenchFlag : englishFlag}
      alt="flag"
      onClick={() => {
        if (language === 0 && flag === "fr") {
          setLanguage(1);
        } else if (language === 1 && flag === "en") {
          setLanguage(0);
        }
      }}
    />
  );
};

export default Flag;
