import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/AboutMe";
import Projects from "./Components/Projects";

function App() {
  return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Projects />
        </div>
  );
}

export default App;
