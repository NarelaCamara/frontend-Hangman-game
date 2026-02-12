import { routes } from "../../utils/utils";
import { Button } from "../button-blue/button-blue";
import { PlayButton } from "../play-button/play-button";
import { Title } from "../title/title";
import "./styles.css";

export const Menu = ({ setRoute }: { setRoute: (route: string) => void }) => {
  return (
    <div>
      <Title />
      <div className="menu">
        <PlayButton onClick={() => setRoute(routes.Categories)} />
        <Button text="How to play" onClick={() => setRoute(routes.Steps)} />
      </div>
    </div>
  );
};
