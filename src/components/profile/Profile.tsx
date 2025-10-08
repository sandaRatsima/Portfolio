import "../../css/Profile.css";
import { StatsData } from "../../const/data";
import { useState } from "react";
import ProgrammingLanguages from "./Sections/ProgrammingLanguage";
import FrameworksAndTools from "./Sections/FrameworkAndTools";
import StatComponent from "./StatComponent";
import SkillsNavbar from "./SkillsNavbar";
import Databases from "./Sections/Databases";
import OperatingSystems from "./Sections/OperatingSystem";

function Profile() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="ProfileSection">
      <div className="Head">
        <div className="ProfilePicture">
          <img src="/images/Profile.png" alt="Profile Picture" />
        </div>
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
        {activeIndex == 1 && <FrameworksAndTools />}
        {activeIndex == 2 && <Databases />}
        {activeIndex == 3 && <OperatingSystems />}
      </div>
    </div>
  );
}

export default Profile;
