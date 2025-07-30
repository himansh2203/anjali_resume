import "../styles/home.css"; // Import the VideoSlider component
import SlideUpBox from "../components/sildeUpBox"; // Import the Aeroplane component
import Aeroplane from "../components/aeroplane";
import Proffesinal from "../components/proffesinalSummary";
import Project from "../components/project";

function Home() {
  return (
    <div className="home">
      <h1>
        <center>Hi, Welcome Guys</center>
      </h1>
      <SlideUpBox />
      <Aeroplane />
      <Proffesinal />
      {/* <Project /> */}
    </div>
  );
}
export default Home;
