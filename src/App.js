import "./App.css";
import About from "./Components/AboutMe/About";
import Body from "./Components/Body/Body";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <About />
      <Skills />
      <Project />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
