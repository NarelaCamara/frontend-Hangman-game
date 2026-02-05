import { ButtonPlay } from "../../components/buttonPlay/buttonPlay";
import "./styles.css";

import play from "../../assets/images/icon-play.svg";
import { Title } from "../../components/title/title";
import { Button } from "../../components/button/button";
import { routes } from "../../App";
export const Home = ({ setRoute }: { setRoute: (route: string) => void }) => {
  return (
    <div>
      <Title />
      <ButtonPlay image={play} onClick={() => setRoute(routes.game)} />
      <Button text="How to play" />
    </div>
  );
};
