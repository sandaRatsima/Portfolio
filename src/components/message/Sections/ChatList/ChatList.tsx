import ChatOption from "./ChatOption.tsx";
import { ChatOptionsData } from "../../../../const/data";
import "../../../../css/ChatList.css";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ChatList: React.FC<Props> = ({}) => {
  return (
    <div className="ChatList">
      <aside>
        {ChatOptionsData.map((value, index) => (
          <ChatOption
            image={value.image}
            name={value.name}
            message={value.messages[0]}
          />
        ))}
      </aside>
    </div>
  );
};

export default ChatList;
