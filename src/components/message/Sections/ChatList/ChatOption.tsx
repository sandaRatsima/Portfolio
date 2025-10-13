interface PropsChatOption {
  image: string;
  name: string;
  message: string;
  isOpened?: boolean;
  onClick: () => void;
}

export default function ChatOption({
  image,
  name,
  message,
  isOpened = false,
  onClick,
}: PropsChatOption) {
  return (
    <div className={`ChatOption ${isOpened ? "opened" : ""}`} onClick={onClick}>
      <div className="ChatOptionPicture">
        <img src={image} alt={name} />
      </div>
      <div className="ChatOptionTextContainter">
        <div className="ChatOptionName">
          <p>{name}</p>
        </div>
        <div className="ChatOptionMessage">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
