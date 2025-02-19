import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
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
      <div className="Picture"></div>
      <div className="ReactionsContainer">
        <FaRegHeart className="IconReaction" />
        <FaRegComment className="IconReaction" />
        <a href=" /images/CV.png" download="CV_Sanda_Ratsima.png">
          <TbSend className="IconReaction" />
        </a>
      </div>
      <p className="Likes">23 000 Likes</p>
      <div className="Description">
        <p className="Author">sandaRatsima</p>
        <p className="DescriptionText">
          Hello, my name is Ratsima Sanda. I am in my second year of a Bachelors
          in Computer Science at Paris-Saclay University and I am currently
          looking for an internship. To download my CV, click the send button
          below the preview.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
