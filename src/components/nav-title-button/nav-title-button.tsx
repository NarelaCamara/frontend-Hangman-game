import { ButtonViolet } from "../button-violet/button-violet";
import "./styles.css";

export const NavTitleButton = ({
  text,
  type = "Back",
  onClick,
}: {
  text: string;
  type?: "Back" | "Menu";
  onClick: () => void;
}) => {
  return (
    <div className="nav">
      <ButtonViolet name={type} onClick={onClick} />
      <h1 className="nav__title">{text} </h1>
    </div>
  );
};
