import React from "react";
import Header from "./header";
import Home from "./home";
import About from "./About";

const App = () => {

  return (
    <div className="bg-black w-full">
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );

}
export default App;