import SkillNavbarComponent from "./SkillNavbarComponent";
import { SkillsNavbarData } from "../../const/data";
import "../../css/SkillsNavbar.css";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const SkillsNavbar: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="SkillsNavbarContainer">
      {SkillsNavbarData.map((value, index) => (
        <SkillNavbarComponent
          key={index}
          icon={value.icon}
          name={value.name}
          isActive={index == activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default SkillsNavbar;
