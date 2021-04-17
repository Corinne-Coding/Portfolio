// SCSS
import "./PartOne.scss";

const Part = ({ data, language }) => {
  return (
    <section>
      <div className="titles">
        <h1>Corinne Pradier</h1>
        <h2>{language ? data.english.mainTitle : data.french.mainTitle}</h2>
      </div>
    </section>
  );
};

export default Part;
