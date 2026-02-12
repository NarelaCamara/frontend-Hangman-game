import play from "../../assets/images/icon-play.svg";
import { PlayButton } from "../../components/PlayButton/PlayButton";
import { Title } from "../../components/title/title";
import { Button } from "../../components/button/button";
import { routes } from "../../utils/utils";
import "./styles.css";

export const Menu = ({ setRoute }: { setRoute: (route: string) => void }) => {
  return (
    <div className="menu">
      <Title />
      <PlayButton image={play} onClick={() => setRoute(routes.game)} />
      <Button text="How to play" />
    </div>
  );
};
