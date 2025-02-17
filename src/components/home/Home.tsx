import "../../css/Home.css";
import Welcome from "./Welcome";

function Home() {
  return (
    <div className="HomeSection">
      <div className="TitleContainer">
        <p className="HomeTitle">For you</p>
      </div>
      <Welcome></Welcome>
    </div>
  );
}

export default Home;
