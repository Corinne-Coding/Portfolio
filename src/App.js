import { useState } from "react";

// Components
import PartOne from "./components/PartOne/PartOne";

// Data
import json from "./data.json";

function App() {
  const [data] = useState(json);
  // Languages : true = english / false = french
  const [language, setLanguage] = useState(true);

  return (
    <>
      <PartOne data={data} language={language} setLanguage={setLanguage} />

      <footer>
        <div>
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
