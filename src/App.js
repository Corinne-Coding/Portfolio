import { useState } from "react";

// Components
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Link from "./components/Link/Link";
import PartOne from "./components/PartOne/PartOne";

// Icons
import logoEnglish from "./img/logo-en.svg";
import logoFrench from "./img/logo-fr.svg";

// Data
import json from "./data.json";

function App() {
  const [data] = useState(json);
  // true = english / false = french
  const [language, setLanguage] = useState(true);

  return (
    <div className="app">
      <header>
        <img src={language ? logoEnglish : logoFrench} alt="logo" />

        <div>
          <ul>
            {language
              ? data.english.header.map((item, index) => {
                  return <Link key={index} text={item.text} icon={item.icon} />;
                })
              : data.french.header.map((item, index) => {
                  return <Link key={index} text={item.text} icon={item.icon} />;
                })}
          </ul>
          <ToggleButton language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <PartOne data={data} language={language} />
    </div>
  );
}

export default App;
