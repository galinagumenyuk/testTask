import { Suspense } from "react";
import "./App.css";

import Header from "../src/components/header/Header.jsx";

function App() {
  return (
    <Suspense fallback={<div>downloading... </div>}>
      <Header />
    </Suspense>
  );
}

export default App;
