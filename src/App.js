import './App.css';
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from './components/pages/Home';
import Resume from "./components/pages/Resume";
import Footer from "./components/pages/Footer";
import Portfolio from './components/pages/Portfolio';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
