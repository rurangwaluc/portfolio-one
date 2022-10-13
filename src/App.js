import { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <div className="main">
      <Header
        myTheme={theme}
        onToggleTheme={toggleTheme}
        onSwitch={switchBtn}
      />
      <Hero myTheme={theme} />
      <About myTheme={theme} />
      <Skills myTheme={theme} />
      <Experience myTheme={theme} />
      <Portfolio myTheme={theme} />
      <Contact myTheme={theme} />
      <Footer myTheme={theme} />
    </div>
  );
}

export default App;
