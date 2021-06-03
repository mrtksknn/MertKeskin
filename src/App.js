import React, { Component } from "react";
import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/AboutMe";
import Comments from "./Components/Comments";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

class App extends Component {

  render() {
    return (
          <div className="App">
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Comments />
              <Contact />
          </div>
    );
  }
  }

export default App;
