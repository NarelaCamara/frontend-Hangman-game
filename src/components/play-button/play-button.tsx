import "./styles.css";
import play from "../../assets/images/icon-play.svg";

export const PlayButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="play">
      <div className="play__button" onClick={onClick}>
        <img src={play} className="play__button__image" />
      </div>
    </div>
  );
};
