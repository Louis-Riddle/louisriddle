import React from "react";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import AboutMe from "./AboutMe/AboutMe";
import MySkills from "./MySkills/MySkills";

import "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <AboutMe />
      <MySkills />
    </div>
  );
}

export default App;
