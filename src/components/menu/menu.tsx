import { routes } from "../../utils/utils";
import { ButtonBlue } from "../button-blue/button-blue";
import { PlayButton } from "../play-button/play-button";
import { Title } from "../title/title";
import "./styles.css";

export const Menu = ({
  setRoute,
  title = "",
  state,
}: {
  setRoute: (route: string) => void;
  state: "Pause" | "End" | "Menu";
  title?: string;
}) => {
  return (
    <div>
      {state === "Menu" && <Title />}
      {state !== "Menu" && <h1>{title}</h1>}
      <div className="menu">
        <PlayButton onClick={() => setRoute(routes.Categories)} />
        <ButtonBlue text="How to play" onClick={() => setRoute(routes.Steps)} />
      </div>
    </div>
  );
};
