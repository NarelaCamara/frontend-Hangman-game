import "./styles.css";

export const Letter = ({
  letter,
  onClick,
  show,
}: {
  letter: string;
  show: boolean;
  onClick: (letter: string) => void;
}) => {
  return letter === " " ? (
    <div className="space"></div>
  ) : (
    <div className="letter" onClick={() => onClick(letter)}>
      {show ? String(letter).toLocaleUpperCase() : "-"}
    </div>
  );
};
