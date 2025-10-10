interface PropsChatOption {
  image: string;
  name: string;
  message: string;
}

export default function ChatOption({ image, name, message }: PropsChatOption) {
  return (
    <div className="ChatOption">
      <div className="ChatOptionPicture">
        <img src={image} alt="Chat Option Picture" />
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
