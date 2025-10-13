import { IoMdInformationCircleOutline } from "react-icons/io";


interface ChatBoxHeaderProps {
  name: string;
  image: string;
}

export default function ChatBoxHeader({ name, image }: ChatBoxHeaderProps) {
  return (
    <div className="ChatBoxHeader">
      <img className="ChatBoxHeaderImage" src={image} alt={name} />
      <p className="ChatBoxHeaderName">{name}</p>
      <IoMdInformationCircleOutline className="ChatBoxHeaderInfo"/>
    </div>
  );
}
