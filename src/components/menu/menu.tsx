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
              className="menu__modal__play__again__pause"
              onClick={() => {
                setRoute(routes.Game);
                if (state === STATE.END) {
                  reset();
                }
              }}
            >
              {String(
                state === STATE.PAUSE ? "Continue" : "Play Again!",
              ).toLocaleUpperCase()}
            </button>
            <button
              className="menu__modal__new__category"
              onClick={() => {
                setRoute(routes.Categories);
                reset();
              }}
            >
              {String("New Categorie").toLocaleUpperCase()}
            </button>
            <button
              className="menu__modal__quit__game"
              onClick={() => {
                setRoute(routes.Menu);
                setPlay(STATE.START);
                reset();
              }}
            >
              {String("Quit Game").toLocaleUpperCase()}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
