import { Title } from "../../components/title/title";
import { routes } from "../../utils/utils";
import "./styles.css";
import { PlayButton } from "../../components/play-button/play-button";
import { ButtonBlue } from "../../components/button-blue/button-blue";

export const Menu = ({ setRoute }: { setRoute: (route: string) => void }) => {
  return (
    <div className="menu">
      <Title />
      <PlayButton onClick={() => setRoute(routes.Categories)} />
      <ButtonBlue text="How to play" onClick={() => setRoute(routes.game)} />
    </div>
  );
};
