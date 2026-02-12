import { Letter } from "../../components/letter/letter";
import Timer from "../../components/timer/timer";
import heart from "../../assets/images/icon-heart.svg";
import "./styles.css";
import { ButtonViolet } from "../../components/button-violet/button-violet";
import { routes } from "../../utils/utils";

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
          <h1 className="game__menu_categorie">
            <ButtonViolet name="Menu" onClick={() => setRoute(routes.Menu)} />
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
