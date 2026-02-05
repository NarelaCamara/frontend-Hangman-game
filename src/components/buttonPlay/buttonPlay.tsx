import "./styles.css";
export const ButtonPlay = ({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) => {
  return (
    <div className="position-button-play">
      <div className="buttonPlay" onClick={onClick}>
        <img src={image} className="buttonPlay__image" />
      </div>
    </div>
  );
};
