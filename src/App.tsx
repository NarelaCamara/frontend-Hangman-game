import "./App.css";
import { Title } from "./components/title";

function App() {
  return (
    <div>
      <Title />

      <button className="button-how-to-play">
        <p className="how-to-play">How to play</p>
      </button>
    </div>
  );
}

export default App;
