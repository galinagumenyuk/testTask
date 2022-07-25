import { Suspense, lazy } from "react";
import "./App.css";

import Header from "../src/components/header/Header.jsx";
const About = lazy(() => import("../src/components/about/About.jsx"));
const Cases = lazy(() => import("../src/cases/Cases.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Header />
      <About />
      <Cases />
    </Suspense>
  );
}

export default App;
