import { useState } from "react";

// Components
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Link from "./components/Link/Link";

// Icons
import logo from "./img/logo.svg";

// Data
import json from "./data.json";

function App() {
  const [language, setLanguage] = useState(true);
  // const [data, setData] = useState(language ? json.english : json.french);
  const [data, setData] = useState(json);
  const [content, setContent] = useState(true);
  console.log(data);

  return (
    <div className="app">
      <header>
        <img src={logo} alt="logo" />

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

      <section style={{ color: "white" }}></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
}

export default App;
