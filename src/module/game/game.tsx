import { Letter } from "../../components/letter/letter";
import Timer from "../../components/timer/timer";
import heart from "../../assets/images/icon-heart.svg";
import { Menu } from "../../components/menu/menu";
import "./styles.css";

export const Game = ({
  word,
  setRoute,
}: {
  word: string;
  setRoute: (route: string) => void;
}) => {
  const letters = "abcdefghijklmnñopqrstuvwxyz".split("");

  const word_array = word.split("");

  return (
    <div className="game">
      <div className="game__navigation">
        <div className="game__menu">
          <Menu setRoute={setRoute} />
          <h1 className="game__menu_categorie">
            {String("Categorie").toLocaleUpperCase()}
          </h1>
        </div>
      </div>
      <Timer totalTimeInSeconds={15} />

      <div className="game__hearts">
        {Array.from({ length: 5 }, (_, index) => (
          <img src={heart} key={index} className="game__heart" />
        ))}
      </div>

      <div className="game__letters">
        {word_array.map((e) => (
          <Letter letter={e} />
        ))}
      </div>
      <div className="game__letters">
        {letters.map((e) => (
          <Letter letter={e} />
        ))}
      </div>
    </div>
  );
};
