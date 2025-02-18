import { FaRegUserCircle } from "react-icons/fa";
import "../../css/Profile.css";
import { StatsData } from "../../const/data";
import StatComponent from "./StatComponent";

function Profile() {
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
    </div>
  );
}

export default Profile;
