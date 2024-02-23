import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/Services/Services";
import css from "./styles/app.module.scss";
const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <People />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
