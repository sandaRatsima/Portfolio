import ChatList from "./Sections/ChatList/ChatList.tsx";
import ChatBox from "./Sections/ChatBox/ChatBox.tsx";
import "../../css/Messages.css";
import { ChatOptionsData } from "../../const/data.tsx";
import { useState } from "react";

function Message() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="MessageSection">
      <ChatList activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <ChatBox
        name={ChatOptionsData[activeIndex].name}
        content={ChatOptionsData[activeIndex].messages}
        image={ChatOptionsData[activeIndex].image}
      />
    </div>
  );
}

export default Message;
