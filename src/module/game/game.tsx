import { Letter } from "../../components/letter/letter";
import Timer from "../../components/timer/timer";
import heart from "../../assets/images/icon-heart.svg";
import { routes } from "../../utils/utils";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
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
      <div className="game__menu">
        <NavTitleButton
          text="Category"
          type="Menu"
          onClick={() => setRoute(routes.Menu)}
        />

        <Timer totalTimeInSeconds={15} />

        <div className="game__menu__hearts">
          {Array.from({ length: 5 }, (_, index) => (
            <img src={heart} key={index} className="game__menu__heart" />
          ))}
        </div>
      </div>

      <div className="game__words">
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
