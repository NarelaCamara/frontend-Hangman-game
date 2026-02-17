import { Letter } from "../../components/letter/letter";
import heart from "../../assets/images/icon-heart.svg";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
import { useState } from "react";
import { Menu } from "../../components/menu/menu";
import { Timer } from "../../components/timer/timer";
import { state } from "../../utils/utils";
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

  const [play, setPlay] = useState(state.START);

  const [win, setWin] = useState(false);

  return (
    <div>
      {play === state.START && (
        <div className="game">
          <div className="game__menu">
            <NavTitleButton
              text="Category"
              type="Menu"
              onClick={() => {
                console.log("tu vijera:");
                setPlay(state.PAUSE);
              }}
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
      )}

      {(play === state.PAUSE || play === state.END) && (
        <Menu
          title={
            play === state.PAUSE ? "Pause" : win ? "Winnnerrrr" : "Looooseerrrr"
          }
          setRoute={setRoute}
          state={play === state.PAUSE ? "Pause" : "End"}
        />
      )}
    </div>
  );
};
