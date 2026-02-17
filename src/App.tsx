import "./App.css";
import { Game } from "./module/game/game";
import { useState } from "react";
import { Categorie } from "./module/categorie/categorie";
import { LIST_WORDS, routes, STATE } from "./utils/utils";
import { Menu } from "./components/menu/menu";
import { Steps } from "./module/steps/steps";

function App() {
  const [route, setRoute] = useState(routes.Menu);
  const [play, setPlay] = useState(STATE.START);

  const [selected, setSelected] = useState("");
  const [win, setWin] = useState(false);

  return (
    <div className="app">
      {route === routes.Menu && (
        <Menu state={play} win={win} setRoute={setRoute} setPlay={setPlay} />
      )}
      {route === routes.Categories && (
        <Categorie setRoute={setRoute} setSelected={setSelected} />
      )}
      {route === routes.Game && (
        <Game
          words={LIST_WORDS}
          setPlay={setPlay}
          setWin={setWin}
          setRoute={setRoute}
        />
      )}
      {route === routes.Steps && <Steps setRoute={setRoute} />}
    </div>
  );
}

export default App;
