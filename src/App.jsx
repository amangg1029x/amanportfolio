import React from "react";
import Header from "./header";
import Skills from "./skills";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./Footer";

const App = () => {

  return (
    <div className="bg-black">
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );

}
export default App;
