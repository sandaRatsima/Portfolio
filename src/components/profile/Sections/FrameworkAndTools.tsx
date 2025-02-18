import SquarePicture from "../../PicturesFormat/SquarePicture";
import { FrameworksAndToolsData } from "../../../const/data";
import "../../../css/Skills.css";

function FrameworksAndTools() {
  return (
    <div className="ListSkills">
      {FrameworksAndToolsData.map((value) => (
        <SquarePicture
          image={value.image}
          name={value.name}
          isCaroussel={value.isCaroussel}
        />
      ))}
    </div>
  );
}

export default FrameworksAndTools;
