import "../../css/images.css";
import { HiSquare2Stack } from "react-icons/hi2";

interface Props {
  image: string;
  name: string;
  isCaroussel: boolean;
}

const SquarePicture: React.FC<Props> = ({ image, name, isCaroussel }) => {
  return (
    <div
      className="SquareImage"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="PictureName">{name}</p>
      {isCaroussel && <HiSquare2Stack className="CarousselIcon" />}
    </div>
  );
};

export default SquarePicture;
