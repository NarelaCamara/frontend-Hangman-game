import "./App.css";
import { Button } from "./components/button/button";
import { Title } from "./components/title/title";
import play from "./assets/images/icon-play.svg";

function App() {
  return (
    <div>
      <Title />
      <Button image={play} />
      <button className="button-how-to-play">
        <p className="how-to-play">How to play</p>
      </button>
    </div>
  );
}

export default App;
