// SCSS
import "./Flag.scss";

// Icons
import frenchFlag from "../../img/france.svg";
import englishFlag from "../../img/united-kingdom.svg";

const Flag = ({ language, setLanguage, flag }) => {
  return (
    <>
      <img
        className="flag"
        src={flag === "fr" ? frenchFlag : englishFlag}
        alt="flag"
        onClick={() => {
          if (language && flag === "fr") {
            setLanguage(false);
          } else if (!language && flag === "en") {
            setLanguage(true);
          }
        }}
      />
    </>
  );
};

export default Flag;
