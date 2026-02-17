import heart from "../../assets/images/icon-heart.svg";
import { Letter } from "../../components/letter/letter";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
import { useEffect, useState } from "react";
import { Timer } from "../../components/timer/timer";
import { LIST_WORDS, routes, STATE } from "../../utils/utils";
import "./styles.css";

export const Game = ({
  category,
  setPlay,
  setWin,
  setRoute,
}: {
  category: string;
  setRoute: (route: routes) => void;
  setWin: (route: boolean) => void;
  setPlay: (route: STATE) => void;
}) => {
  const letters = "abcdefghijklmnñopqrstuvwxyz".split("");
  const [words, setWords] = useState<Array<string>>([]);

  const [game, setGame] = useState({
    location: 0,
    word_array: [""],
    lifes: 5,
    time: 15,
  });

  useEffect(() => {
    if (category) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWords(LIST_WORDS);
      const letters_word: string = LIST_WORDS[0];
      console.log("letters_word", letters_word);
      setGame({
        ...game,
        word_array: letters_word.split(""),
      });
    }
  }, []);

  return (
    <div>
      <div className="game">
        <div className="game__menu">
          <NavTitleButton
            text="Category"
            type="Menu"
            onClick={() => {
              setPlay(STATE.PAUSE);
              setRoute(routes.Menu);
            }}
          />

          <Timer
            totalTimeInSeconds={game.time}
            endTime={() => {
              setWin(false);
              setPlay(STATE.END);
              setRoute(routes.Menu);
            }}
          />

          <div className="game__menu__hearts">
            {Array.from({ length: game.lifes }, (_, index) => (
              <img src={heart} key={index} className="game__menu__heart" />
            ))}
          </div>
        </div>

        <div className="game__words">
          {game.word_array.map((e) => (
            <Letter letter={e} />
          ))}
        </div>
        <div className="game__letters">
          {letters.map((e) => (
            <Letter letter={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
