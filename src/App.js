import { Suspense, lazy } from "react";
import "./App.css";

import Header from "../src/components/header/Header.jsx";
const About = lazy(() => import("../src/components/about/About.jsx"));

function App() {
  return (
    <Suspense fallback={<div>downloading... </div>}>
      <Header />
      <About />
    </Suspense>
  );
}

export default App;
