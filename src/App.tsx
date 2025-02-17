import { useState } from "react";
import "./css/App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./components/home/Home.tsx";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <Navbar
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></Navbar>

      <main className="MainSection">{activeIndex == 0 && <Home />}</main>
    </div>
  );
}

export default App;
