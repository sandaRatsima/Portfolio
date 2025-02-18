import SquarePicture from "../../PicturesFormat/SquarePicture";
import { ProgrammingLanguagesData } from "../../../const/data";
import "../../../css/Skills.css";

function ProgrammingLanguages() {
  return (
    <div className="ListSkills">
      {ProgrammingLanguagesData.map((value) => (
        <SquarePicture
          image={value.image}
          name={value.name}
          isCaroussel={value.isCaroussel}
        />
      ))}
    </div>
  );
}

export default ProgrammingLanguages;
