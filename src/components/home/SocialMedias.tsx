import { SocialMediaData } from "../../const/data";
import SocialMediaComponent from "./SocialMediaComponent";
import "../../css/SocialMedias.css";

function SocialMedia() {
  return (
    <div className="ListSocialMedias">
      {SocialMediaData.map((value) => (
        <SocialMediaComponent
          icon={value.icon}
          name={value.name}
          id={value.id}
          link={value.link}
        />
      ))}
    </div>
  );
}
export default SocialMedia;
