import "./styles.css";

export const ButtonBlue = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div className="button" onClick={onClick}>
      <p className="button__text">{String(text).toLocaleUpperCase()}</p>
    </div>
  );
};
