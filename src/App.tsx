import { useState } from "react";
import "./css/App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./components/home/Home.tsx";
import Profile from "./components/profile/Profile.tsx";
import Explore from "./components/explore/Explore.tsx";
import Message from "./components/message/Message.tsx";

function App() {
  const [activeIndex, setActiveIndex] = useState(3); //Changing depends on what we want to display first;
  return (
    <div className="App">
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <main className="MainSection">
        {activeIndex == 0 && <Home />}
        {activeIndex == 1 && <Profile />}
        {activeIndex == 2 && <Explore />}
        {activeIndex == 3 && <Message />}
      </main>
    </div>
  );
}

export default App;
