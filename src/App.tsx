import "./App.css";
import { Title } from "./components/title/title";
import { Menu } from "./components/menu/menu";
import play from "./assets/images/icon-play.svg";
import heart from "./assets/images/icon-heart.svg";
import menu from "./assets/images/icon-menu.svg";
import { Card } from "./components/card/card";
import { Letter } from "./components/letter/letter";
import { ButtonPlay } from "./components/buttonPlay/buttonPlay";
import { Button } from "./components/button/button";
import Timer from "./components/timer/timer";

function App() {
  const steps = [
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
  ];

  const letters = "abcdefghijklmnñopqrstuvwxyz".split("");

  const words = "The lion king".split("");
  return (
    <div className="game">
      <div className="game__navigation">
        <div className="game__menu">
          <Menu image={menu} />
          <h1 className="game__menu_categorie">
            {String("Categorie").toLocaleUpperCase()}
          </h1>
        </div>
        <Timer totalTimeInSeconds={15} />
        <img src={heart} className="game__heart" />
        <img src={heart} className="game__heart" />
        <img src={heart} className="game__heart" />
        <img src={heart} className="game__heart" />
        <img src={heart} className="game__heart" />
      </div>

      <Title />
      <Button text="How to play" />
      <ButtonPlay image={play} />

      <div className="game__letters">
        {words.map((e) => (
          <Letter letter={e} />
        ))}
      </div>

      <div className="game__letters">
        {letters.map((e) => (
          <Letter letter={e} />
        ))}
      </div>

      <div className="game__steps">
        {steps.map((e) => (
          <Card title={e.title} step={e.step} description={e.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
