import { useState } from "react";

// Components
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Link from "./components/Link/Link";
import Part from "./components/Part/Part";

// Icons
import logoEnglish from "./img/logo-en.svg";
import logoFrench from "./img/logo-fr.svg";

// Data
import json from "./data.json";

function App() {
  const [language, setLanguage] = useState(true);
  const [data] = useState(json);
  const [content, setContent] = useState(true);

  return (
    <div className="app">
      <header>
        <img src={language ? logoEnglish : logoFrench} alt="logo" />

        <div>
          <ul>
            {content
              ? data.english.header.map((item, index) => {
                  return <Link key={index} text={item.text} icon={item.icon} />;
                })
              : data.french.header.map((item, index) => {
                  return <Link key={index} text={item.text} icon={item.icon} />;
                })}
          </ul>
          <ToggleButton
            language={language}
            setLanguage={setLanguage}
            content={content}
            setContent={setContent}
          />
        </div>
      </header>

      <Part particles={true} />
      <Part particles={false} />
      <Part particles={false} />
      <Part particles={false} />
    </div>
  );
}

export default App;
