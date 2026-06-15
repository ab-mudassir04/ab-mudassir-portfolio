import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Certificates />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
