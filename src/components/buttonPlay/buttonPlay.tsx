import "./styles.css";
export const ButtonPlay = ({ image }: { image: string }) => {
  return (
    <div className="buttonPlay">
      <img src={image} className="buttonPlay__image" />
    </div>
  );
};
