import logo from "../../assets/images/logo.svg";
import "./styles.css";

export const Title = () => {
  return (
    <div className="title">
      <img className="title__image" src={logo} />
    </div>
  );
};
