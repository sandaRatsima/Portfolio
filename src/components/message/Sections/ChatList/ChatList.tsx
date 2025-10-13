import ChatOption from "./ChatOption.tsx";
import { ChatOptionsData } from "../../../../const/data";
import "../../../../css/ChatList.css";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ChatList: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
  const handleClick = (index: number) => {
    setActiveIndex(index);
    ChatOptionsData[index].isOpened = true;
  };
  return (
    <div className="ChatList">
      <aside>
        {ChatOptionsData.map((value, index) => (
          <ChatOption
            key={index}
            onClick={() => handleClick(index)}
            isOpened={value.isOpened}
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
