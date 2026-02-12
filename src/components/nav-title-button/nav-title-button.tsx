import { ButtonViolet } from "../button-violet/button-violet";
import "./styles.css";

export const NavTitleButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className="nav">
      <ButtonViolet name="Back" onClick={onClick} />
      <h1 className="nav__title">{text} </h1>
    </div>
  );
};
