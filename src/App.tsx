import "./App.css";
import { Game } from "./module/game/game";
import { useEffect, useState } from "react";
import { Categorie } from "./module/categorie/categorie";
import {
  LIST_WORDS_1,
  LIST_WORDS_2,
  LIST_WORDS_3,
  routes,
  STATE,
} from "./utils/utils";
import { Menu } from "./components/menu/menu";
import { Steps } from "./module/steps/steps";

function App() {
  const [route, setRoute] = useState(routes.Menu);
  const [play, setPlay] = useState(STATE.START);
  const [words, setWords] = useState([""]);

  const [selected, setSelected] = useState("");
  const [win, setWin] = useState(false);

  const [game, setGame] = useState({
    location: 0,
    total: 0,
    lifes: 5,
    time: 150,
  });

  useEffect(() => {
    if (selected === "Movies") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWords(LIST_WORDS_1);
      setGame({ ...game, total: LIST_WORDS_1.length });
    } else if (selected === "Animals") {
      setWords(LIST_WORDS_2);
      setGame({ ...game, total: LIST_WORDS_2.length });
    } else {
      setWords(LIST_WORDS_3);
      setGame({ ...game, total: LIST_WORDS_3.length });
    }
  }, [selected]);

  return (
    <div className="app">
      {route === routes.Menu && (
        <Menu
          state={play}
          win={win}
          setRoute={setRoute}
          setPlay={setPlay}
          reset={() =>
            setGame({
              ...game,
              location: 0,
              lifes: 5,
              time: 150,
            })
          }
        />
      )}

      {route === routes.Game && (
        <Game
          game={game}
          words={words}
          setGame={setGame}
          setPlay={setPlay}
          setWin={setWin}
          setRoute={setRoute}
        />
      )}

      {route === routes.Categories && (
        <Categorie setRoute={setRoute} setSelected={setSelected} />
      )}
      {route === routes.Steps && <Steps setRoute={setRoute} />}
    </div>
  );
}

export default App;
