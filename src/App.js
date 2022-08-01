import { Suspense, lazy } from "react";
import Favicon from "react-favicon";
import "./App.css";

import Header from "./components/header/Header";
import Hero from "./components/header/Hero.jsx";
const About = lazy(() => import("../src/components/about/About.jsx"));
const Cases = lazy(() => import("./components/cases/Cases.jsx"));
const Blog = lazy(() => import("./components/blog/Blog.jsx"));
const Team = lazy(() => import("./components/team/Team.jsx"));
const Contact = lazy(() => import("./components/contact/Contact.jsx"));
const Footer = lazy(() => import("./components/footer/Footer.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <div className="positionWrapper">
        <Favicon url={"../favicon.ico"} />
        <Header />
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
