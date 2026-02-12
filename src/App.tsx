import "./App.css";
import { Game } from "./module/game/game";
import { useState } from "react";
import { HowToPlay } from "./module/howToPlay/howToPlay";
import { Categorie } from "./module/categorie/categorie";
import { routes } from "./utils/utils";
import { Menu } from "./components/menu/menu";

function App() {
  const [route, setRoute] = useState(routes.Menu);

  return (
    <div>
      {route === routes.Menu && <Menu setRoute={setRoute} />}
      {route === routes.Categories && <Categorie setRoute={setRoute} />}
      {route === routes.game && (
        <Game word="The lion king" setRoute={setRoute} />
      )}
      {route === routes.Steps && <HowToPlay setRoute={setRoute} />}
    </div>
  );
}

export default App;
