import { FaRegUserCircle } from "react-icons/fa";
import "../../css/Profile.css";
import { StatsData } from "../../const/data";
import { useState } from "react";
import ProgrammingLanguages from "./Sections/ProgrammingLanguage";
import StatComponent from "./StatComponent";
import SkillsNavbar from "./SkillsNavbar";

function Profile() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="ProfileSection">
      <div className="Head">
        <FaRegUserCircle className="ProfileP"></FaRegUserCircle>
        <div className="UserInfo">
          <p className="UserNameProfile">sandaRatsima</p>
          <div className="StatsContainer">
            {StatsData.map((value) => (
              <StatComponent number={value.number} name={value.name} />
            ))}
          </div>
          <div className="Biography">
            <p>
              I'm an IT student interested in applicative and web development
            </p>
          </div>
        </div>
      </div>
      <SkillsNavbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className="SkillsSection">
        {activeIndex == 0 && <ProgrammingLanguages />}
      </div>
    </div>
  );
}

export default Profile;
