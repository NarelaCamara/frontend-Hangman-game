import { routes, STATE } from "../../utils/utils";
import { ButtonBlue } from "../button-blue/button-blue";
import { PlayButton } from "../play-button/play-button";
import { Title } from "../title/title";
import "./styles.css";

export const Menu = ({
  setRoute,
  setPlay,
  reset,
  win,
  state,
}: {
  reset: () => void;
  setPlay: (state: STATE) => void;
  setRoute: (route: routes) => void;
  state: STATE;
  win: boolean;
}) => {
  const title =
    state === STATE.START
      ? "Menu"
      : state === STATE.PAUSE
        ? "Pause"
        : state === STATE.END && win
          ? "Winnnerrrr"
          : "Looooseerrrr";

  return (
    <div className="menu">
      {state === STATE.START && <Title />}
      {state !== STATE.START && <h1 className="menu__title">{title}</h1>}
      <div className="menu__modal">
        {state === STATE.START && (
          <>
            <PlayButton onClick={() => setRoute(routes.Categories)} />
            <ButtonBlue
              text="How to play"
              onClick={() => setRoute(routes.Steps)}
            />
          </>
        )}

        {(state === STATE.PAUSE || state === STATE.END) && (
          <>
            <button
              onClick={() => {
                setRoute(routes.Game);
                if (state === STATE.END) {
                  reset();
                }
              }}
            >
              {state === STATE.PAUSE ? "Continue" : "Play Again!"}
            </button>
            <button
              onClick={() => {
                setRoute(routes.Categories);
                reset();
              }}
            >
              New Categorie
            </button>
            <button
              onClick={() => {
                setRoute(routes.Menu);
                setPlay(STATE.START);
                reset();
              }}
            >
              Quit Game
            </button>
          </>
        )}
      </div>
    </div>
  );
};
