import NavbarComponent from "./NavbarComponent.tsx";
import "../../css/navbar.css";
import { NavbarData } from "../../const/data.tsx";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Navbar: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="Navbar">
      <aside>
        <div className="Title">
          <h2>Portfolio Sanda Ratsima</h2>
        </div>
        <div className="ListSections">
          {NavbarData.map((value, index) => (
            <NavbarComponent
              key={index}
              icon={value.icons}
              activeIcon={value.fillIcon}
              name={value.name}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
