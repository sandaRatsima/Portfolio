import SquarePicture from "../../PicturesFormat/SquarePicture";
import { OperatingSystemsData } from "../../../const/data";
import "../../../css/Skills.css";

function OperatingSystems() {
  return (
    <div className="ListSkills">
      {OperatingSystemsData.map((value) => (
        <SquarePicture
          image={value.image}
          name={value.name}
          isCaroussel={value.isCaroussel}
        />
      ))}
    </div>
  );
}

export default OperatingSystems;
