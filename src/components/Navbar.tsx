import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import NavbarComponent from "./NavbarComponent.tsx";
import "../css/navbar.css";
import "react-icons";
import { NavbarData } from "../const/data.tsx";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Navbar">
      <aside>
        <div className="Title">
          <h2>Portfolio</h2>
        </div>
        <div className="ListSections">
          {NavbarData.map((value, index) => {
            return (
              <NavbarComponent
                key={index}
                icon={value.icons}
                activeIcon={value.fillIcon}
                name={value.name}
                isActive={index == activeIndex}
                onClick={() => setActiveIndex(index)}
              ></NavbarComponent>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
