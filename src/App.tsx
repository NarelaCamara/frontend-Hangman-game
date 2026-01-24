import "./App.css";
import { Title } from "./components/title/title";
import { Menu } from "./components/menu/menu";
import play from "./assets/images/icon-play.svg";
import menu from "./assets/images/icon-menu.svg";
import { Card } from "./components/card/card";
import { Letter } from "./components/letter/letter";
import { ButtonPlay } from "./components/buttonPlay/buttonPlay";
import { Button } from "./components/button/button";

function App() {
  return (
    <div>
      <Title />
      <Button text="How to play" />
      <ButtonPlay image={play} />
      <Menu image={menu} />
      <Letter letter="A" />
      <Card />
    </div>
  );
}

export default App;
