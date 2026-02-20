import "./styles.css";
import heart from "../../assets/images/icon-heart.svg";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
import { useState } from "react";
import { Timer } from "../../components/timer/timer";
import { routes, STATE, type IGame } from "../../utils/utils";
import { LetterWord } from "../../components/letter-word/letter-word";
import { LetterAlphabet } from "../../components/letter-alphabet/letter-alphabet";

export const Game = ({
  game,
  words,
  setGame,
  setPlay,
  setWin,
  setRoute,
}: {
  game: IGame;
  words: string[];
  setGame: (route: IGame) => void;
  setRoute: (route: routes) => void;
  setWin: (route: boolean) => void;
  setPlay: (route: STATE) => void;
}) => {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  const [lettersClicked, setLettersClicked] = useState([""]);

  const array_word = String(words[game.location]).toLowerCase().split("");
  const array_letters_without_space = array_word.filter((e) => e !== " ");

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
            pauseTime={(time: number) => {
              setGame({ ...game, time: time });
            }}
          />

          <div className="game__menu__hearts">
            {Array.from({ length: game.lifes }, (_, index) => (
              <img src={heart} key={index} className="game__menu__heart" />
            ))}
          </div>
        </div>

        <div className="game__words">
          {array_word.map((e, i) => (
            <LetterWord key={i} letter={e} lettersClicked={lettersClicked} />
          ))}
        </div>
        <div className="game__letters">
          {alphabet.map((e) => (
            <LetterAlphabet
              key={e}
              letter={e}
              lettersClicked={lettersClicked}
              onClick={(e: string) => {
                //no ha sido clickeada esa letra
                if (!lettersClicked.some((i) => i === e)) {
                  setLettersClicked([...lettersClicked, e]);

                  //no pertenece letra a la palabra
                  if (!array_letters_without_space.some((i) => i === e)) {
                    setGame({
                      ...game,
                      lifes: game.lifes === 0 ? 0 : game.lifes - 1,
                    });
                  } else if (
                    array_letters_without_space.every((letra) =>
                      [...lettersClicked, e].includes(letra),
                    )
                  ) {
                    setGame({
                      ...game,
                      location: game.location + 1,
                      lifes: 5,
                    });
                    setLettersClicked([""]);
                    if (game.total === game.location + 1) {
                      setWin(true);
                      setPlay(STATE.END);
                      setRoute(routes.Menu);
                    }
                  }
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
