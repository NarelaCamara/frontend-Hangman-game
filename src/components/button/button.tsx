import "./styles.css";

export const Button = ({ image }: { image: string }) => {
  return (
    <div className="button">
      <img src={image} className="button__image" />
    </div>
  );
};
