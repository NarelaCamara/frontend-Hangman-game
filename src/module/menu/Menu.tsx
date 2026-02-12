import play from "../../assets/images/icon-play.svg";
import { ButtonPlay } from "../../components/buttonPlay/buttonPlay";
import { Title } from "../../components/title/title";
import { Button } from "../../components/button/button";
import { routes } from "../../utils/utils";
import "./styles.css";

export const Menu = ({ setRoute }: { setRoute: (route: string) => void }) => {
  return (
    <div className="menu">
      <Title />
      <ButtonPlay image={play} onClick={() => setRoute(routes.game)} />
      <Button text="How to play" />
    </div>
  );
};
