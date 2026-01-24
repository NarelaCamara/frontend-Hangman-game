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
  const steps = [
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
  ];
  return (
    <div>
      <Title />
      <Button text="How to play" />
      <ButtonPlay image={play} />
      <Menu image={menu} />
      <Letter letter="A" />

      {steps.map((e) => (
        <Card title={e.title} step={e.step} description={e.description} />
      ))}
    </div>
  );
}

export default App;
