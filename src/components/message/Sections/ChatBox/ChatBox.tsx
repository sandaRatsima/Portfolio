import ChatBoxHeader from "./ChatBoxHeader.tsx";
import "../../../../css/ChatBox.css";

interface ChatBoxProps {
  name: string;
  content: string[];
  image: string;
}

export default function ({ name, content, image }: ChatBoxProps) {
  return (
    <div className="ChatBox">
      <ChatBoxHeader image={image} name={name} />
      <p>{content[0]}</p>
    </div>
  );
}
