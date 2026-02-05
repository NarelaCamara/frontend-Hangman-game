import "./App.css";
import { Game } from "./module/game/game";
import { useState } from "react";
import { HowToPlay } from "./module/howToPlay/howToPlay";
import { Home } from "./module/home/home";
import { Categorie } from "./module/categorie/categorie";
import { routes } from "./utils/utils";

function App() {
  const [route, setRoute] = useState(routes.Home);

  return (
    <div className="game bg">
      <div className="game__center">
        {route === routes.Home && <Home setRoute={setRoute} />}
        {route === routes.Categories && <Categorie setRoute={setRoute} />}
        {route === routes.game && (
          <Game word="The lion king" setRoute={setRoute} />
        )}
        {route === routes.Steps && <HowToPlay setRoute={setRoute} />}
      </div>
    </div>
  );
}

export default App;
