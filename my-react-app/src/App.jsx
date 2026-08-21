import { useState } from "react"
import Navbar from "../components/Navbar.jsx"
import Browse from "./pages/Browse.jsx"
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"

function App() {

  // Creates a state variable called activeTab.
  // activeTab starts with the value "all".
  // setActiveTab is the function used to change activeTab later.
  const [activeTab, setActiveTab] = useState("home");

  // Creates another state variable.
  // language starts as "en" (English).
  // setLanguage changes the language later.
  const [language, setLanguage] = useState("en");

  let page; // This variable will hold the component we want to display.

  // If the active tab is "about",
  // page becomes the About component.
  if (activeTab === "about") {
    page = <About language={language} />;
  }
  else if (activeTab === "home") {
    page = <Home language={language} />;
  }
  // if activeTab is "all", page becomes the Home component.
  else {
    page = (
      <Browse
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
      />
    );
  }

  // Everything below is what React displays.
  return (
    <>
      {/* Navbar is always shown */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Display whichever page we chose above */}
      {page}
    </>
  );
}

export default App;