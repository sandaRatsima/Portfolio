interface NavbarProps {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({
  icon,
  activeIcon,
  name,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`NavbarComponent ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="iconContainer">{isActive ? activeIcon : icon}</div>
      <div className="nameContainer">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default NavbarComponent;
