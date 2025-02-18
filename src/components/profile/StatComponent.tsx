import "../../css/SocialMedias.css";

interface PropsStat {
  number: number;
  name: string;
}

const StatComponent: React.FC<PropsStat> = ({ number, name }) => {
  return (
    <div className="StatComponent">
      <p className="StatNumber">{number}</p>
      <p className="StatName">{name}</p>
    </div>
  );
};

export default StatComponent;
