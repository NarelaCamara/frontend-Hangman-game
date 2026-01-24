import "./styles.css";

export const Button = ({ text }: { text: string }) => {
  return (
    <div className="button">
      <p className="button__text">{text}</p>
    </div>
  );
};
