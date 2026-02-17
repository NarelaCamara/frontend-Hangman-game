import "./App.css";
import { Game } from "./module/game/game";
import { useState } from "react";
import { Categorie } from "./module/categorie/categorie";
import { routes } from "./utils/utils";
import { Menu } from "./components/menu/menu";
import { Steps } from "./module/steps/steps";

function App() {
  const [route, setRoute] = useState(routes.Menu);

  return (
    <div className="app">
      {route === routes.Menu && <Menu state="Menu" setRoute={setRoute} />}
      {route === routes.Categories && <Categorie setRoute={setRoute} />}
      {route === routes.game && (
        <Game word="The lion king" setRoute={setRoute} />
      )}
      {route === routes.Steps && <Steps setRoute={setRoute} />}
    </div>
  );
}

export default App;
