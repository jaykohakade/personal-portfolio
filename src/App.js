import React from "react";

import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/intro/intro";
import Project from "./components/project/project";
import About from "./components/about/about";
// import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Intro />
      <Project />
      <About />
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;