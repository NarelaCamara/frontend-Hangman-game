import { routes } from "../../utils/utils";
import { Button } from "../button/button";
import { PlayButton } from "../play-button/PlayButton";
import { Title } from "../title/title";
import "./styles.css";

export const Menu = ({ setRoute }: { setRoute: (route: string) => void }) => {
  return (
    <div className="menu">
      <Title />
      <PlayButton onClick={() => setRoute(routes.game)} />
      <Button text="How to play" />
    </div>
  );
};
