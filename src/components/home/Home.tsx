import "../../css/Home.css";
import Welcome from "./Welcome";
import SocialMedia from "./SocialMedias";

function Home() {
  return (
    <div className="MainSection">
      <div className="HomeSection">
        <div className="TitleContainer">
          <p className="HomeTitle">For you</p>
        </div>
        <Welcome></Welcome>
      </div>
      <div className="SocialMedias">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Home;
