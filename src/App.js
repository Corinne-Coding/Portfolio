import { useState } from "react";

// Components
import PartOne from "./components/PartOne/PartOne";

// Data
import json from "./data.json";

function App() {
  const [data] = useState(json);
  // true = english / false = french
  const [language, setLanguage] = useState(false);

  return (
    <>
      <PartOne data={data} language={language} />
    </>
  );
}

export default App;
