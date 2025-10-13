import ChatOption from "./ChatOption.tsx";
import { ChatOptionsData } from "../../../../const/data";
import "../../../../css/ChatList.css";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ChatList: React.FC<Props> = ({ activeIndex, setActiveIndex }) => {
  return (
    <div className="ChatList">
      <aside>
        {ChatOptionsData.map((value, index) => (
          <ChatOption
            key={index}
            onClick={() => {
              setActiveIndex(index);
              console.log(activeIndex == index);
            }}
            isOpened={activeIndex === index}
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
