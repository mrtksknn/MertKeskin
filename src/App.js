import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
  );
}

export default App;
