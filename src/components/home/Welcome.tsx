import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import "../../css/Welcome.css";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="UserContainer">
        <div className="ProfilePicture">
          <FaRegUserCircle className="Icon" />
        </div>
        <p className="userName">sandaRatsima</p>
        <div className="More">
          <IoIosMore className="Icon" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
