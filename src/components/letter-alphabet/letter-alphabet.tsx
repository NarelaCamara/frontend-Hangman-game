import "./styles.css";

export const LetterAlphabet = ({
  letter,
  clickedLetter,
  onClick,
}: {
  letter: string;
  clickedLetter?: boolean;
  onClick: (letter: string) => void;
}) => {
  return (
    <div
      className={`letter__alphabet ${clickedLetter ? "letter__alphabet--clicked" : "  letter__alphabet--hover"}`}
      onClick={() => onClick(letter)}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
