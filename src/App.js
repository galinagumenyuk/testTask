import { Suspense, lazy } from "react";
import "./App.css";

import Header from "../src/components/header/Header.jsx";
const About = lazy(() => import("../src/components/about/About.jsx"));
const Cases = lazy(() => import("./components/cases/Cases.jsx"));
const Blog = lazy(() => import("./components/blog/Blog.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Header />
      <About />
      <Cases />
      <Blog />
    </Suspense>
  );
}

export default App;
