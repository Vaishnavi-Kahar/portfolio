import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";

import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer"; // Assuming you have a Contact component
import Skills from "./components/Skills/Skills";

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="main">
      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Profile />
      <About ref={aboutRef} />
      {/* <Skills /> */}

      <Projects ref={projectsRef} />
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
