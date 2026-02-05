import "./App.css";
import { Game } from "./module/game/game";
import { useState } from "react";
import { HowToPlay } from "./module/howToPlay/howToPlay";
import { Home } from "./module/home/home";
import { Categorie } from "./module/categorie/categorie";

export const routes = {
  Home: "Inicio",
  game: "Game",
  Steps: "Steps",
  Categories: "Catergories",
};

function App() {
  const [route, setRoute] = useState(routes.Home);

  return (
    <div className="game bg">
      {route === routes.Home && <Home setRoute={setRoute} />}
      {route === routes.Categories && <Categorie setRoute={setRoute} />}
      {route === routes.game && (
        <Game word="The lion king" setRoute={setRoute} />
      )}
      {route === routes.Steps && <HowToPlay setRoute={setRoute} />}
    </div>
  );
}

export default App;
