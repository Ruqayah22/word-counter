import { useState } from "react";
import "./App.css";
// import Analyzer from "./components/Analyzer";
import CountApp from "./components/CountApp";
import Navbar from "./components/Navbar";

function App() {
  const [language, setLanguage] = useState("en"); // Shared language state

  return (
    <div className="App">
      {/* <Navbar />
      <CountApp /> */}
      {/* <Analyzer /> */}
      <Navbar language={language} setLanguage={setLanguage} />
      <CountApp language={language} />
    </div>
  );
}

export default App;
