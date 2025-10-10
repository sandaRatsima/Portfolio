import ChatList from "./Sections/ChatList/ChatList.tsx";
import ChatBox from "./Sections/ChatBox/ChatBox.tsx";
import "../../css/Messages.css";

function Message() {
  return (
    <div className="MessageSection">
      <ChatList
        activeIndex={0}
        setActiveIndex={function (index: number): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ChatBox />
    </div>
  );
}

export default Message;
