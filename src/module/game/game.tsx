import heart from "../../assets/images/icon-heart.svg";
import { Letter } from "../../components/letter/letter";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
import { useState } from "react";
import { Timer } from "../../components/timer/timer";
import { routes, STATE } from "../../utils/utils";
import "./styles.css";

export const Game = ({
  words,
  setPlay,
  setWin,
  setRoute,
}: {
  words: string[];
  setRoute: (route: routes) => void;
  setWin: (route: boolean) => void;
  setPlay: (route: STATE) => void;
}) => {
  const letters = "abcdefghijklmnñopqrstuvwxyz".split("");
  const [lettersClicked, setLettersClicked] = useState([""]);

  const [game, setGame] = useState({
    location: 0,
    total: words.length,
    lifes: 5,
    time: 150,
  });

  console.log(game);

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
          {words[game.location].split("").map((e) => (
            <Letter
              letter={e}
              show={lettersClicked.some(
                (i) => String(i).toLowerCase() === String(e).toLowerCase(),
              )}
              onClick={() => {}}
            />
          ))}
        </div>
        <div className="game__letters">
          {letters.map((e) => (
            <Letter
              letter={e}
              show={true}
              onClick={(e: string) => {
                //no ha sido clickeada esa letra
                if (
                  !lettersClicked.some(
                    (i) => String(i).toLowerCase() === String(e).toLowerCase(),
                  )
                ) {
                  setLettersClicked([...lettersClicked, e]);

                  const array_letters = words[game.location].split("");
                  //no pertenece letra a la palabra
                  if (
                    !array_letters.some(
                      (i) =>
                        String(i).toLowerCase() === String(e).toLowerCase(),
                    )
                  ) {
                    setGame({
                      ...game,
                      lifes: game.lifes === 0 ? 0 : game.lifes - 1,
                    });
                  } else {
                    setWin(
                      array_letters.every((letra) =>
                        lettersClicked.includes(letra),
                      ),
                    );
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
