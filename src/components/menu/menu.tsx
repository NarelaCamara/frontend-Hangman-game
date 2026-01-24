import "./styles.css";

export const Menu = ({ image }: { image: string }) => {
  return (
    <div className="menu">
      <img src={image} className="menu__image" />
    </div>
  );
};
