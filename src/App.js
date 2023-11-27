import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FootballNav from "./components/FootballNav";
import SerieA from "./components/SerieA";
import SerieB from "./components/SerieB";
import SerieC from "./components/SerieC";
import Ligue1 from "./components/Ligue1";
import Liga from "./components/Liga";
import PremierLeague from "./components/PremierLeague";
import SerieD from "./components/SerieD";

function App() {
  return (
    <div>
      <FootballNav />
      <SerieA />
      <SerieB />
      <SerieC />
      <SerieD />
      <Ligue1 />
      <Liga />
      <PremierLeague />
    </div>
  );
}

export default App;
