import "./app.scss"
import Cursor from "./components/Cursor/Cursor";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
       <Portfolio /> 
       <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;

//1 install sass, create app.scss add styles create components folder and navbar.jsx and scss
//add navbar to app.jsx
