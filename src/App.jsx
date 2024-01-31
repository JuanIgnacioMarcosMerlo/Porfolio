import { Element } from 'react-scroll';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
        <Element name="Home">
          <Home />
        </Element>
      <div className="information">
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="About">
          <About />
        </Element>
        <Element name="Skills">
          <Skills />
        </Element>
        <Element name="Contacts">
          <Contacts />
        </Element>
      </div>
    </div>
  );
}

export default App;