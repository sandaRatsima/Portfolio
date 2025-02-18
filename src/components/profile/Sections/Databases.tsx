import SquarePicture from "../../PicturesFormat/SquarePicture";
import { DatabasesData } from "../../../const/data";
import "../../../css/Skills.css";

function Databases() {
  return (
    <div className="ListSkills">
      {DatabasesData.map((value) => (
        <SquarePicture
          image={value.image}
          name={value.name}
          isCaroussel={value.isCaroussel}
        />
      ))}
    </div>
  );
}

export default Databases;
