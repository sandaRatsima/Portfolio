interface Props {
  icon: React.ReactNode;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillNavbarComponent: React.FC<Props> = ({
  icon,
  name,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`SkillNavbarComponent ${isActive ? "active " : ""}`}
      onClick={onClick}
    >
      <div className="NavbarIcon">{icon}</div>
      <p className="SkillType">{name}</p>
    </div>
  );
};

export default SkillNavbarComponent;
