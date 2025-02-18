interface Props {
  icon: React.ReactNode;
  name: string;
  id: string;
  link: string;
}

const SocialMediaComponent: React.FC<Props> = ({ icon, name, id, link }) => {
  return (
    <a href={link}>
      <div className="SocialMediaComponent">
        <div className="iconContainer">{icon}</div>
        <div className="TextSocialMedia">
          <p className="nameSocialMedia">{name}</p>
          <p className="idSocialMedia">{id}</p>
        </div>
      </div>
    </a>
  );
};

export default SocialMediaComponent;
