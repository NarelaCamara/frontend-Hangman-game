import "./styles.css";
import menu from "../../assets/images/icon-menu.svg";
import back from "../../assets/images/icon-back.svg";

export const ButtonViolet = ({
  onClick,
  name,
}: {
  onClick: () => void;
  name: "Menu" | "Back";
}) => {
  return (
    <div className="button__violet" onClick={onClick}>
      <img
        src={name === "Menu" ? menu : back}
        className="button__violet__image"
      />
    </div>
  );
};
